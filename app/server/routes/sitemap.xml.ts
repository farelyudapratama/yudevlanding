// app/server/routes/sitemap.xml.ts
import { defineEventHandler, setHeader } from 'h3'
import { queryCollection } from '@nuxt/content/server'
import { projects } from '../../data/projects'

export default defineEventHandler(async (event) => {
  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  
  const baseUrl = 'https://yudev.my.id'

  const normalizePath = (path: string) => (path.startsWith('/') ? path : `/${path}`)
  const getIsoDate = (value: unknown) => {
    if (!value) {
      return null
    }

    const date = new Date(String(value))
    return Number.isNaN(date.getTime()) ? null : date.toISOString()
  }
  
  // Static routes
  const staticRoutes = [
    {
      url: '/',
      changeFreq: 'weekly',
      priority: 1.0
    },
    {
      url: '/blog',
      changeFreq: 'weekly',
      priority: 0.9
    },
    {
      url: '/projects',
      changeFreq: 'monthly',
      priority: 0.8
    }
  ]
  
  // Dynamic blog routes
  let blogRoutes: any[] = []
  try {
    const posts = await queryCollection(event, 'blog').all()
    blogRoutes = posts.map((post: any) => ({
      url: normalizePath(post.path || post._path || `/blog/${post.slug || ''}`),
      lastmod: getIsoDate(post.updatedAt || post.date || post._mtime),
      changeFreq: 'monthly',
      priority: 0.7
    }))
  } catch (e) {
    console.error('Error fetching blog posts:', e)
  }
  
  // Dynamic project routes
  const projectRoutes = projects.map((project) => ({
    url: `/projects/${project.slug}`,
    changeFreq: 'monthly',
    priority: 0.7
  }))
  
  const allRoutes = [...staticRoutes, ...blogRoutes, ...projectRoutes]
  
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allRoutes.map(route => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    ${route.lastmod ? `<lastmod>${route.lastmod}</lastmod>` : ''}
    <changefreq>${route.changeFreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`
  
  return sitemapXml
})
