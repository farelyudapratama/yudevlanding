// app/server/routes/sitemap.xml.ts
import { defineEventHandler, setHeader } from 'h3'
import { queryCollection } from '@nuxt/content/server'
import { projects } from '../../data/projects'

export default defineEventHandler(async (event) => {
  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  
  const baseUrl = 'https://yudev.my.id'

  const normalizePath = (path: string) => (path.startsWith('/') ? path : `/${path}`)
  
  // Static routes
  const staticRoutes = [
    { url: '/', changeFreq: 'weekly', priority: 1.0 },
    { url: '/blog', changeFreq: 'weekly', priority: 0.9 },
    { url: '/projects', changeFreq: 'monthly', priority: 0.8 }
  ]
  
  // Dynamic blog routes
  let blogRoutes: any[] = []
  try {
    const posts = await queryCollection(event, 'blog').all()
    blogRoutes = posts.map((post: any) => ({
      url: normalizePath(post.path || post._path || `/blog/${post.slug || ''}`),
      changeFreq: 'monthly',
      priority: 0.7
    }))
  } catch (e) {
    console.error('Error fetching blog posts for sitemap:', e)
  }
  
  // Dynamic project routes
  const projectRoutes = projects.map((project) => ({
    url: `/projects/${project.slug}`,
    changeFreq: 'monthly',
    priority: 0.7
  }))
  
  const allRoutes = [...staticRoutes, ...blogRoutes, ...projectRoutes]
  
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <changefreq>${route.changeFreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`
  
  return sitemapXml
})
