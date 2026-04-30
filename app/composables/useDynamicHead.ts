// app/composables/useDynamicHead.ts

/**
 * Composable untuk dynamic head management dengan SEO optimization
 */
export function useDynamicHead(options: {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'product'
  keywords?: string[]
  author?: string
  publishedDate?: string
  modifiedDate?: string
  robots?: string
}) {
  const route = useRoute()
  const config = useRuntimeConfig()
  
  const siteUrl = config.public.siteUrl || 'https://yudev.my.id'
  const rawPath = options.url || route.path
  const normalizedPath = rawPath.startsWith('/') ? rawPath : `/${rawPath}`
  const pageUrl = `${siteUrl}${normalizedPath}`
  const imageUrl = options.image || `${siteUrl}/og-image.svg`
  
  // Default values
  const title = options.title || 'Yudev - Digitalisasi Bisnis Otomatis & Terintegrasi'
  const description = options.description || 
    'Membantu transformasi bisnis Anda melalui pengembangan website, aplikasi Android, dan sinkronisasi sistem yang terpadu di era digital.'
  const type = options.type || 'website'
  
  // Build head object
  const head: any = {
    title,
    meta: [
      {
        name: 'description',
        content: description
      },
      {
        name: 'robots',
        content: options.robots || 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
      },
      {
        name: 'googlebot',
        content: options.robots || 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: pageUrl
      }
    ]
  }
  
  // Add keywords if provided
  if (options.keywords && options.keywords.length > 0) {
    head.meta.push({
      name: 'keywords',
      content: options.keywords.join(', ')
    })
  }
  
  // Add robots meta if specified
  // Open Graph
  head.meta.push(
    {
      property: 'og:title',
      content: title
    },
    {
      property: 'og:description',
      content: description
    },
    {
      property: 'og:url',
      content: pageUrl
    },
    {
      property: 'og:type',
      content: type
    },
    {
      property: 'og:image',
      content: imageUrl
    },
    {
      property: 'og:image:secure_url',
      content: imageUrl
    },
    {
      property: 'og:image:alt',
      content: title
    },
    {
      property: 'og:image:width',
      content: '1200'
    },
    {
      property: 'og:image:height',
      content: '630'
    },
    {
      property: 'og:site_name',
      content: 'Yudev'
    },
    {
      property: 'og:locale',
      content: 'id_ID'
    }
  )
  
  // Twitter Card
  head.meta.push(
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: title
    },
    {
      name: 'twitter:description',
      content: description
    },
    {
      name: 'twitter:image',
      content: imageUrl
    },
    {
      name: 'twitter:url',
      content: pageUrl
    }
  )
  
  // Article specific
  if (type === 'article') {
    if (options.author) {
      head.meta.push({
        property: 'article:author',
        content: options.author
      })
    }
    if (options.publishedDate) {
      head.meta.push({
        property: 'article:published_time',
        content: options.publishedDate
      })
    }
    if (options.modifiedDate) {
      head.meta.push({
        property: 'article:modified_time',
        content: options.modifiedDate
      })
    }
  }
  
  // Structured data for article
  if (type === 'article' && options.publishedDate) {
    head.script = head.script || []
    head.script.push({
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        description: description,
        image: imageUrl,
        url: pageUrl,
        author: {
          '@type': 'Person',
          name: options.author || 'Yudev'
        },
        datePublished: options.publishedDate,
        dateModified: options.modifiedDate || options.publishedDate,
        publisher: {
          '@type': 'Organization',
          name: 'Yudev',
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/logo.svg`
          }
        }
      })
    })
  }
  
  useHead(head)
}
