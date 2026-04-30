export function useDynamicHead(options: {
  title?: string
  description?: string
  image?: string | string[]
  url?: string
  type?: 'website' | 'article' | 'product'
  keywords?: string[]
  author?: string
  publishedDate?: string
  modifiedDate?: string
  robots?: string
  breadcrumbs?: Array<{ name: string; url: string }>
  section?: string
  tags?: string[]
}) {
  const route = useRoute()
  const config = useRuntimeConfig()
  
  const siteUrl = config.public.siteUrl || 'https://yudev.my.id'
  const rawPath = options.url || route.path
  const normalizedPath = rawPath.startsWith('/') ? rawPath : `/${rawPath}`
  const pageUrl = `${siteUrl}${normalizedPath}`
  
  // Handle single or multiple images
  const images = Array.isArray(options.image) ? options.image : [options.image || `${siteUrl}/og-image.svg`]
  const primaryImage = images[0]
  
  // Default values
  const title = options.title || 'Yudev - Digitalisasi Bisnis Otomatis & Terintegrasi'
  const description = options.description || 
    'Membantu transformasi bisnis Anda melalui pengembangan website, aplikasi Android, dan sinkronisasi sistem yang terpadu di era digital.'
  const type = options.type || 'website'
  
  // Build head object
  const head: any = {
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'robots', content: options.robots || 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'googlebot', content: options.robots || 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'author', content: options.author || 'Yudev' },
      { name: 'publisher', content: 'Yudev' },
      { name: 'language', content: 'id-ID' }
    ],
    link: [
      { rel: 'canonical', href: pageUrl }
    ],
    script: []
  }
  
  // Add keywords if provided
  if (options.keywords && options.keywords.length > 0) {
    head.meta.push({ name: 'keywords', content: options.keywords.join(', ') })
  }
  
  // Open Graph - Multiple images support
  head.meta.push(
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: pageUrl },
    { property: 'og:type', content: type },
    { property: 'og:site_name', content: 'Yudev' },
    { property: 'og:locale', content: 'id_ID' },
    { property: 'og:determiner', content: 'the' }
  )
  
  // Add all images to OG
  images.forEach((img, index) => {
    const imgUrl = img.startsWith('http') ? img : `${siteUrl}${img}`
    head.meta.push(
      { property: 'og:image', content: imgUrl },
      { property: 'og:image:secure_url', content: imgUrl },
      { property: 'og:image:alt', content: `${title} - Image ${index + 1}` },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:type', content: 'image/png' }
    )
  })
  
  // Twitter Card
  head.meta.push(
    { name: 'twitter:card', content: images.length > 1 ? 'summary_large_image' : 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: images[0]?.startsWith('http') ? images[0] : `${siteUrl}${images[0]}` },
    { name: 'twitter:url', content: pageUrl },
    { name: 'twitter:site', content: '@yudev_id' },
    { name: 'twitter:creator', content: '@yudev_id' }
  )
  
  // Article specific meta
  if (type === 'article') {
    if (options.author) {
      head.meta.push({ property: 'article:author', content: options.author })
    }
    if (options.publishedDate) {
      head.meta.push({ property: 'article:published_time', content: options.publishedDate })
    }
    if (options.modifiedDate) {
      head.meta.push({ property: 'article:modified_time', content: options.modifiedDate })
    }
    if (options.section) {
      head.meta.push({ property: 'article:section', content: options.section })
    }
    if (options.tags && options.tags.length > 0) {
      options.tags.forEach(tag => {
        head.meta.push({ property: 'article:tag', content: tag })
      })
    }
  }
  
  // Structured Data: WebSite (for homepage)
  if (type === 'website' && normalizedPath === '/') {
    head.script.push({
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Yudev',
        url: siteUrl,
        description: description,
        publisher: {
          '@type': 'Organization',
          name: 'Yudev',
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/logo.svg`
          }
        },
        potentialAction: [
          {
            '@type': 'SearchAction',
            target: `${siteUrl}/blog?q={search_term_string}`,
            'query-input': 'required name=search_term_string'
          }
        ]
      })
    })
  }
  
  // Structured Data: Article/BlogPosting
  if (type === 'article' && options.publishedDate) {
    head.script.push({
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        description: description,
        image: images.map(img => img.startsWith('http') ? img : `${siteUrl}${img}`),
        url: pageUrl,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': pageUrl
        },
        author: {
          '@type': 'Person',
          name: options.author || 'Yudev',
          url: siteUrl,
          sameAs: [
            'https://github.com/farelyudapratama',
            'https://linkedin.com/in/farelyudapratama'
          ]
        },
        datePublished: options.publishedDate,
        dateModified: options.modifiedDate || options.publishedDate,
        wordCount: description.split(' ').length * 100, // Estimasi
        publisher: {
          '@type': 'Organization',
          name: 'Yudev',
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/logo.svg`
          }
        },
        keywords: options.keywords?.join(', ') || ''
      })
    })
  }
  
  // BreadcrumbList structured data
  if (options.breadcrumbs && options.breadcrumbs.length > 0) {
    head.script.push({
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: options.breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: `${siteUrl}${crumb.url}`
        }))
      })
    })
  }
  
  // Organization structured data (global)
  head.script.push({
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Yudev',
      url: siteUrl,
      logo: `${siteUrl}/logo.svg`,
      image: primaryImage,
      description: 'Membantu transformasi bisnis Anda melalui pengembangan website, aplikasi Android, dan sinkronisasi sistem yang terpadu di era digital.',
      sameAs: [
        'https://github.com/farelyudapratama',
        'https://linkedin.com/in/farelyudapratama'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: ['id', 'en']
      }
    })
  })
  
  useHead(head)
}
