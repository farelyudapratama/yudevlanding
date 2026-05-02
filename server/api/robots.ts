export default defineEventHandler((event) => {
  const siteUrl = 'https://yudev.my.id'
  
  const robotsTxt = `
User-agent: *
Allow: /

User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 1

User-agent: Yandex
Allow: /
Crawl-delay: 1

Disallow: /admin/
Disallow: /api/
Disallow: /_nuxt/
Disallow: /404
Disallow: /500

Sitemap: ${siteUrl}/sitemap.xml

Crawl-delay: 1
`.trim()

  setResponseHeader(event, 'Content-Type', 'text/plain')
  return robotsTxt
})