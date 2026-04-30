// scripts/generate-static-files.mjs
import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const baseUrl = 'https://yudev.my.id'

// Static routes
const staticRoutes = [
  { url: '/', changefreq: 'weekly', priority: '1.0' },
  { url: '/blog', changefreq: 'weekly', priority: '0.9' },
  { url: '/projects', changefreq: 'monthly', priority: '0.8' }
]

// Read projects data
let projectRoutes = []
try {
  const projectsPath = join(__dirname, '../app/data/projects.ts')
  // Simple regex to extract slugs from the file
  const fs = await import('fs')
  const content = fs.readFileSync(projectsPath, 'utf-8')
  const slugMatches = content.match(/slug:\s*'([^']+)'/g)
  
  if (slugMatches) {
    projectRoutes = slugMatches.map(match => {
      const slug = match.match(/'([^']+)'/)[1]
      return { url: `/projects/${slug}`, changefreq: 'monthly', priority: '0.7' }
    })
  }
} catch (e) {
  console.error('Error reading projects:', e)
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
