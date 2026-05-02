// scripts/generate-static-files.mjs
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const baseUrl = 'https://yudev.my.id'
const today = new Date()

function formatDate(date) {
  return date.toISOString().slice(0, 10)
}

function getFrontmatterValue(content, key) {
  const match = content.match(new RegExp(`^${key}:\\s*["']?([^"'\\n]+)["']?`, 'm'))
  return match?.[1]?.trim()
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

// Static routes
const staticRoutes = [
  { url: '/', changefreq: 'weekly', priority: '1.0', lastmod: formatDate(today), image: '/og-image.png' },
  { url: '/blog', changefreq: 'weekly', priority: '0.9', lastmod: formatDate(today) },
  { url: '/projects', changefreq: 'monthly', priority: '0.8', lastmod: formatDate(today) }
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
      return { url: `/projects/${slug}`, changefreq: 'monthly', priority: '0.7', lastmod: formatDate(today) }
    })
  }
} catch (e) {
  console.error('Error reading projects:', e)
}

// Read blog content so articles stay discoverable after every build.
let blogRoutes = []
try {
  const blogDir = join(__dirname, '../content/blog')
  if (existsSync(blogDir)) {
    blogRoutes = readdirSync(blogDir)
      .filter(file => file.endsWith('.md'))
      .map(file => {
        const fullPath = join(blogDir, file)
        const content = readFileSync(fullPath, 'utf-8')
        const slug = file.replace(/\.md$/, '')
        const date = getFrontmatterValue(content, 'date')
        const cover = getFrontmatterValue(content, 'cover')
        const lastmod = date && new Date(date) <= today ? date : formatDate(statSync(fullPath).mtime)

        return {
          url: `/blog/${slug}`,
          changefreq: 'monthly',
          priority: '0.7',
          lastmod,
          image: cover
        }
      })
  }
} catch (e) {
  console.error('Error reading blog content:', e)
}

// Generate sitemap.xml
const allRoutes = [...staticRoutes, ...projectRoutes, ...blogRoutes]
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allRoutes.map(r => `  <url>
    <loc>${escapeXml(baseUrl + r.url)}</loc>
    <lastmod>${escapeXml(r.lastmod)}</lastmod>
    <changefreq>${escapeXml(r.changefreq)}</changefreq>
    <priority>${escapeXml(r.priority)}</priority>${r.image ? `
    <image:image>
      <image:loc>${escapeXml(baseUrl + r.image)}</image:loc>
    </image:image>` : ''}
  </url>`).join('\n')}
</urlset>`

writeFileSync('public/sitemap.xml', sitemap)
console.log('✓ Generated public/sitemap.xml')

// Generate robots.txt
const robots = `User-agent: *
Allow: /

Disallow: /admin/
Disallow: /api/

Sitemap: ${baseUrl}/sitemap.xml`

writeFileSync('public/robots.txt', robots)
console.log('✓ Generated public/robots.txt')
