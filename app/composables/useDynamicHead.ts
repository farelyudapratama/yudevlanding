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
  faqs?: Array<{ question: string; answer: string }>
  structuredData?: any[]
  section?: string
  tags?: string[]
}) {
  const route = useRoute()
  const config = useRuntimeConfig()
  
  const siteUrl = String(config.public.siteUrl || 'https://yudev.my.id').replace(/\/$/, '')
  const siteName = String(config.public.siteName || 'Yudev')
  const defaultImage = '/og-image.png'
  const toAbsoluteUrl = (value: string) => {
    if (!value) return siteUrl
    if (value.startsWith('http://') || value.startsWith('https://')) return value
    return `${siteUrl}${value.startsWith('/') ? value : `/${value}`}`
  }

  const rawPath = options.url || route.path
  const normalizedPath = rawPath.startsWith('/') ? rawPath : `/${rawPath}`
  const pageUrl = `${siteUrl}${normalizedPath}`
  
  // Handle single or multiple images
  const imageInputs = Array.isArray(options.image) ? options.image : [options.image || defaultImage]
  const images = imageInputs.filter(Boolean).map(image => toAbsoluteUrl(image as string))
  const primaryImage = images[0] || toAbsoluteUrl(defaultImage)
  
  // Default values
  const title = options.title || 'Yudev - Digitalisasi Bisnis Otomatis & Terintegrasi'
  const description = options.description || 
    'Membantu transformasi bisnis Anda melalui pengembangan website, aplikasi Android, dan sinkronisasi sistem yang terpadu di era digital.'
  const type = options.type || 'website'
  const robots = options.robots || 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
  
  // Build head object
  const head: any = {
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'robots', content: robots },
      { name: 'googlebot', content: robots },
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
    { property: 'og:type', content: type === 'product' ? 'website' : type },
    { property: 'og:site_name', content: siteName },
    { property: 'og:locale', content: 'id_ID' }
  )
  
  // Add all images to OG
  images.forEach((img, index) => {
    head.meta.push(
      { property: 'og:image', content: img },
      { property: 'og:image:secure_url', content: img },
      { property: 'og:image:alt', content: `${title} - Image ${index + 1}` },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:type', content: 'image/png' }
    )
  })
  
  // Twitter Card
  head.meta.push(
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: primaryImage },
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
  
  // Structured Data: WebPage
  head.script.push({
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': type === 'article' ? 'Article' : 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: title,
      description,
      inLanguage: 'id-ID',
      isPartOf: {
        '@type': 'WebSite',
        '@id': `${siteUrl}#website`,
        name: siteName,
        url: siteUrl
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: primaryImage
      }
    })
  })

  // Structured Data: WebSite and ProfessionalService (for homepage)
  if (type === 'website' && normalizedPath === '/') {
    head.script.push({
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${siteUrl}#website`,
        name: siteName,
        alternateName: 'Yudev',
        url: siteUrl,
        description: description,
        publisher: {
          '@type': 'Organization',
          '@id': `${siteUrl}#organization`,
          name: siteName,
          logo: {
            '@type': 'ImageObject',
            url: toAbsoluteUrl('/logo.svg')
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

    head.script.push({
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': `${siteUrl}#professional-service`,
        name: siteName,
        url: siteUrl,
        image: primaryImage,
        description,
        areaServed: {
          '@type': 'Country',
          name: 'Indonesia'
        },
        availableLanguage: ['Indonesian', 'English'],
        priceRange: 'Rp1.500.000+',
        serviceType: [
          'Jasa pembuatan website',
          'Landing page',
          'Web system',
          'Android app',
          'AI integration',
          'System integration'
        ],
        makesOffer: [
          {
            '@type': 'Offer',
            name: 'Landing Page Starter',
            price: '1500000',
            priceCurrency: 'IDR',
            availability: 'https://schema.org/InStock'
          },
          {
            '@type': 'Offer',
            name: 'Landing Page Growth',
            price: '3000000',
            priceCurrency: 'IDR',
            availability: 'https://schema.org/InStock'
          },
          {
            '@type': 'Offer',
            name: 'Web System Standard',
            price: '4500000',
            priceCurrency: 'IDR',
            availability: 'https://schema.org/InStock'
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
          '@id': `${siteUrl}#organization`,
          name: siteName,
          logo: {
            '@type': 'ImageObject',
            url: toAbsoluteUrl('/logo.svg')
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
          item: toAbsoluteUrl(crumb.url)
        }))
      })
    })
  }

  if (options.faqs && options.faqs.length > 0) {
    head.script.push({
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: options.faqs.map(item => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer
          }
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
      '@id': `${siteUrl}#organization`,
      name: siteName,
      url: siteUrl,
      logo: toAbsoluteUrl('/logo.svg'),
      image: primaryImage,
      description: 'Membantu transformasi bisnis Anda melalui pengembangan website, aplikasi Android, dan sinkronisasi sistem yang terpadu di era digital.',
      sameAs: [
        'https://github.com/farelyudapratama',
        'https://www.linkedin.com/in/farel-yuda-pratama'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: ['id', 'en']
      }
    })
  })

  if (options.structuredData && options.structuredData.length > 0) {
    options.structuredData.forEach(schema => {
      head.script.push({
        type: 'application/ld+json',
        innerHTML: JSON.stringify(schema)
      })
    })
  }
  
  useHead(head)
}
