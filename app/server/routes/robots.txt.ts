// app/server/routes/robots.txt.ts
import { defineEventHandler, setHeader } from 'h3'

export default defineEventHandler((event) => {
  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8')
  
  const baseUrl = 'https://yudev.my.id'
  
  const robotsTxt = `User-agent: *
Allow: /

# Disallow admin and API routes
Disallow: /admin/
Disallow: /.well-known/
Disallow: /api/

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Crawl delay for specific bots
User-agent: AhrefsBot
Crawl-delay: 10
Disallow: /api/

User-agent: SemrushBot
Crawl-delay: 10
Disallow: /api/`

  return robotsTxt
})
