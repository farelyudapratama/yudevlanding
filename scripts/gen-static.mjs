// scripts/gen-static.mjs - Generate static sitemap & robots for Vercel
import { writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const baseUrl = 'https://yudev.my.id'

// Static routes
const staticRoutes = [
  { url: '/', changefreq: 'weekly', priority: '1.0' },
  { url: '/blog', changefreq: 'weekly', priority: '0.9' },
  { url: '/projects', changefreq: 'monthly', priority: '0.8' }
]

// Read projects from data file
let projectRoutes = []
try {
  const projectsPath = join(__dirname, '../app/data/projects.ts')
  const content = await import('file://' + projectsPath)
  if (content.projects) {
    projectRoutes = content.projects.map(p => ({
      url: `/projects/${p.slug}`,
      changefreq: 'monthly',
      priority: '0.7'
    }))
  }
} catch (e) {
  console.error('Could not load projects:', e.message)
}

// Generate sitemap.xml
const allRoutes = [...staticRoutes, ...projectRoutes]
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(r => `  <url>
    <loc>${baseUrl}${r.url}</loc>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n')}
</urlset>`

writeFileSync('public/sitemap.xml', sitemap)
console.log('✓ Generated public/sitemap.xml')

// Generate robots.txt
const robots = `User-agent: *
Allow: /

Disallow: /admin/
Disallow: /api/

Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/rss.xml`

writeFileSync('public/robots.txt', robots)
console.log('✓ Generated public/robots.txt')
