// app/server/routes/sitemap.xml.ts
import { defineEventHandler, setHeader } from 'h3'
import { queryCollection } from '#content/server'

export default defineEventHandler(async (event) => {
  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  
  const baseUrl = 'https://yudev.my.id'
  
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
    const posts = await queryCollection('blog').all()
    blogRoutes = posts.map((post: any) => ({
      url: `/blog/${post._path?.split('/').pop() || post.slug}`,
      lastmod: post.updatedAt || post._mtime,
      changeFreq: 'monthly',
      priority: 0.7
    }))
  } catch (e) {
    console.error('Error fetching blog posts:', e)
  }
  
  // Dynamic project routes
  const projects = [
    'snapcal-vision-ai',
    'apothecary-system',
    'stockup-inventory',
    'aturdana-landing-system',
    'media-cms'
  ]
  
  const projectRoutes = projects.map(slug => ({
    url: `/projects/${slug}`,
    changeFreq: 'monthly',
    priority: 0.7
  }))
  
  const allRoutes = [...staticRoutes, ...blogRoutes, ...projectRoutes]
  
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allRoutes.map(route => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    ${route.lastmod ? `<lastmod>${new Date(route.lastmod).toISOString().split('T')[0]}</lastmod>` : ''}
    <changefreq>${route.changeFreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`
  
  return sitemapXml
})
