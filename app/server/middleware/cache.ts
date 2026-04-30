// app/server/middleware/cache.ts
export default defineEventHandler((event) => {
  // Set cache headers berdasarkan route
  const url = event.node.req.url || ''
  
  if (url.startsWith('/api/')) {
    setHeader(event, 'Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400')
  } else if (url.startsWith('/projects/')) {
    setHeader(event, 'Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=604800')
  } else if (url.startsWith('/blog/')) {
    setHeader(event, 'Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=604800')
  } else if (url === '/' || url === '') {
    setHeader(event, 'Cache-Control', 'public, max-age=600, s-maxage=3600')
  }
  
  // Security headers
  setHeader(event, 'X-Content-Type-Options', 'nosniff')
  setHeader(event, 'X-Frame-Options', 'SAMEORIGIN')
  setHeader(event, 'Referrer-Policy', 'strict-origin-when-cross-origin')
})
