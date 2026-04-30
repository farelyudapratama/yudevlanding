// scripts/generate-sitemap.mjs
import { writeFileSync } from 'fs'
import { projects } from '../app/data/projects.js'

const baseUrl = 'https://yudev.my.id'

const staticRoutes = [
  { url: '/', changefreq: 'weekly', priority: '1.0' },
  { url: '/blog', changefreq: 'weekly', priority: '0.9' },
  { url: '/projects', changefreq: 'monthly', priority: '0.8' }
]

const projectRoutes = projects.map(p => ({
  url: `/projects/${p.slug}`,
  changefreq: 'monthly',
  priority: '0.7'
}))

// Sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticRoutes, ...projectRoutes].map(r => `  <url>
    <loc>${baseUrl}${r.url}</loc>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n')}
</urlset>`

writeFileSync('public/sitemap.xml', sitemap)
console.log('✓ Generated public/sitemap.xml')

// Robots.txt
const robots = `User-agent: *
Allow: /

Disallow: /admin/
Disallow: /api/

Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/rss.xml`

writeFileSync('public/robots.txt', robots)
console.log('✓ Generated public/robots.txt')
