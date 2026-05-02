export default defineEventHandler(async () => {
  const siteUrl = 'https://yudev.my.id'
  
  const staticPages = [
    { loc: '/', changefreq: 'weekly', priority: 1.0 },
    { loc: '/blog', changefreq: 'weekly', priority: 0.9 },
    { loc: '/projects', changefreq: 'weekly', priority: 0.9 },
  ]

  const blogPosts = [
    { slug: ' cara-mudah-membuat-landing-page-yang-menjual', date: '2025-12-01' },
    { slug: ' manfaat-digitalisasi-untuk-umkm', date: '2025-11-15' },
    { slug: ' why-choose-nuxtjs-for-your-web-project', date: '2025-10-20' },
  ]

  const projects = [
    { slug: ' ecommerce-platform-umkm', date: '2025-11-01' },
    { slug: ' hotel-management-system', date: '2025-10-15' },
    { slug: ' ai-chatbot-customer-service', date: '2025-09-20' },
  ]

  const urls = [
    ...staticPages,
    ...blogPosts.map(post => ({
      loc: `/blog/${post.slug}`,
      changefreq: 'monthly' as const,
      priority: 0.8,
      lastmod: post.date
    })),
    ...projects.map(project => ({
      loc: `/projects/${project.slug}`,
      changefreq: 'monthly' as const,
      priority: 0.8,
      lastmod: project.date
    }))
  ]

  return urls
})