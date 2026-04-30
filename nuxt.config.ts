// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/content', '@nuxt/image'],
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // Runtime config untuk environment variables
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://yudev.my.id',
      siteName: process.env.NUXT_PUBLIC_SITE_NAME || 'Yudev'
    }
  },
  
  // Site metadata untuk SEO
  site: {
    url: 'https://yudev.my.id',
    name: 'Yudev - Digitalisasi Bisnis Otomatis & Terintegrasi',
    description: 'Membantu transformasi bisnis Anda melalui pengembangan website, aplikasi Android, dan sinkronisasi sistem yang terpadu di era digital.',
    defaultLocale: 'id',
  },

  // Head configuration untuk SEO dan social sharing
  app: {
    head: {
      title: 'Yudev - Digitalisasi Bisnis Otomatis & Terintegrasi',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Membantu transformasi bisnis Anda melalui pengembangan website, aplikasi Android, dan sinkronisasi sistem yang terpadu di era digital.' },
        { name: 'keywords', content: 'web development, aplikasi android, sistem terintegrasi, digitalisasi bisnis, software development, yudev' },
        { name: 'author', content: 'Yudev' },
        
        // Open Graph untuk social sharing
        { property: 'og:title', content: 'Yudev - Digitalisasi Bisnis Otomatis & Terintegrasi' },
        { property: 'og:description', content: 'Membantu transformasi bisnis Anda melalui pengembangan website, aplikasi Android, dan sinkronisasi sistem yang terpadu di era digital.' },
        { property: 'og:url', content: 'https://yudev.my.id' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Yudev' },
        { property: 'og:image', content: 'https://yudev.my.id/og-image.svg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Yudev - Digitalisasi Bisnis Otomatis & Terintegrasi' },
        { name: 'twitter:description', content: 'Membantu transformasi bisnis Anda melalui pengembangan website, aplikasi Android, dan sinkronisasi sistem yang terpadu di era digital.' },
        { name: 'twitter:image', content: 'https://yudev.my.id/og-image.svg' },
        
        // Additional SEO
        { name: 'theme-color', content: '#ffffff' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        
        // Preconnect untuk performance
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://yudev.my.id' },
        { rel: 'sitemap', href: '/sitemap.xml' },
        { rel: 'alternate', hreflang: 'id', href: 'https://yudev.my.id' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Yudev',
            url: 'https://yudev.my.id',
            description: 'Membantu transformasi bisnis Anda melalui pengembangan website, aplikasi Android, dan sinkronisasi sistem yang terpadu di era digital.',
            image: 'https://yudev.my.id/og-image.svg',
            sameAs: [
              'https://github.com/farelyudapratama',
              'https://linkedin.com/in/farelyudapratama'
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              availableLanguage: ['id', 'en']
            }
          })
        }
      ]
    }
  },

  // Performance optimizations
  nitro: {
    prerender: {
      crawlLinks: false,
      routes: ['/robots.txt'],
      ignore: ['/admin']
    },
    headers: {
      'Cache-Control': 'public, max-age=3600, s-maxage=86400'
    },
    // Compression
    compressPublicAssets: true,
    // Disable payload cache in dev to avoid unstorage directory creation issues
    storage: process.env.NODE_ENV === 'development' ? {
      cache: {
        driver: 'memory'
      }
    } : undefined
  },

  // Image optimization configuration
  image: {
    dir: './public',
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    },
    presets: {
      default: {
        modifiers: {
          quality: 80,
          format: 'webp'
        }
      },
      cover: {
        modifiers: {
          quality: 85,
          format: 'webp'
        }
      },
      thumbnail: {
        modifiers: {
          width: 300,
          height: 300,
          quality: 75,
          format: 'webp'
        }
      }
    },
    provider: 'ipx',
    formats: ['webp', 'avif']
  },

  // Routeules untuk SEO dan caching
  routeRules: {
    '/blog/**': process.env.NODE_ENV === 'development' ? {} : { swr: 3600 },
    '/projects/**': { swr: 3600 },
  },

  vite: {
    server: {
      allowedHosts: [
        'tones-toilet-carriers-coffee.trycloudflare.com'
      ]
    }
  }
})