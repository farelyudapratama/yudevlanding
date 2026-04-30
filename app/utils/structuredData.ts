export function generateStructuredData(type: string, data: any) {
  const siteUrl = 'https://yudev.my.id'
  
  const schemas = {
    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Yudev',
      url: siteUrl,
      logo: `${siteUrl}/logo.svg`,
      description: 'Membantu transformasi bisnis Anda melalui pengembangan website, aplikasi Android, dan sinkronisasi sistem yang terpadu di era digital.',
      sameAs: [
        'https://github.com/farelyudapratama',
        'https://linkedin.com/in/farelyudapratama'
      ]
    },
    
    service: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: data.name,
      description: data.description,
      provider: {
        '@type': 'LocalBusiness',
        name: 'Yudev',
        url: siteUrl
      },
      areaServed: 'ID'
    },
    
    project: {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: data.name,
      description: data.description,
      image: data.image,
      url: `${siteUrl}/projects/${data.slug}`,
      creator: {
        '@type': 'Person',
        name: 'Yudev'
      },
      datePublished: data.year
    },
    
    faq: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: data.items.map((item: any) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    }
  }
  
  return schemas[type as keyof typeof schemas] || null
}
