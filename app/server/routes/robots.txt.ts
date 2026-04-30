// app/server/routes/robots.txt.ts
import { defineEventHandler, setHeader } from 'h3'

export default defineEventHandler((event) => {
  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8')
  
  const baseUrl = 'https://yudev.my.id'
  
  const robotsTxt = `# robots.txt for Yudev
# https://yudev.my.id

# Allow all crawlers
User-agent: *
Allow: /

# Block private/admin areas
Disallow: /admin/
Disallow: /_nuxt/
Disallow: /_ipx/
Disallow: /.well-known/
Disallow: /api/
Disallow: /__nuxt/
Disallow: /__vite/

# Specific bot rules
User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: AhrefsBot
Crawl-delay: 10
Disallow: /api/
Disallow: /admin/

User-agent: SemrushBot
Crawl-delay: 10
Disallow: /api/
Disallow: /admin/

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/rss.xml`

  return robotsTxt
})
