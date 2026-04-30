export function useHeadMeta(options: {
  title: string
  description: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'blog'
  author?: string
  publishedDate?: string
  modifiedDate?: string
}) {
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl || 'https://yudev.my.id'
  
  const url = options.url ? `${siteUrl}${options.url}` : siteUrl
  const image = options.image || `${siteUrl}/og-image.svg`
  
  const meta = {
    title: options.title,
    meta: [
      {
        name: 'description',
        content: options.description
      },
      {
        property: 'og:title',
        content: options.title
      },
      {
        property: 'og:description',
        content: options.description
      },
      {
        property: 'og:url',
        content: url
      },
      {
        property: 'og:type',
        content: options.type || 'website'
      },
      {
        property: 'og:image',
        content: image
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
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:title',
        content: options.title
      },
      {
        name: 'twitter:description',
        content: options.description
      },
      {
        name: 'twitter:image',
        content: image
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: url
      }
    ],
    script: options.type === 'article' ? [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: options.title,
          description: options.description,
          image: image,
          url: url,
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
      }
    ] : []
  }
  
  useHead(meta)
}
