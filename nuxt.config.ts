// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/content', '@nuxt/image', '@nuxtjs/seo'],
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
  
  // Head configuration untuk SEO dan social sharing
  app: {
    head: {
      htmlAttrs: {
        lang: 'id-ID'
      },
      titleTemplate: '%s | Yudev',
      title: 'Yudev - Digitalisasi Bisnis Otomatis & Terintegrasi',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Membantu transformasi bisnis Anda melalui pengembangan website, aplikasi Android, dan sinkronisasi sistem yang terpadu di era digital.' },
        { name: 'keywords', content: 'web development, aplikasi android, sistem terintegrasi, digitalisasi bisnis, software development, yudev' },
        { name: 'author', content: 'Yudev' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        
        // Open Graph untuk social sharing
        { property: 'og:title', content: 'Yudev - Digitalisasi Bisnis Otomatis & Terintegrasi' },
        { property: 'og:description', content: 'Membantu transformasi bisnis Anda melalui pengembangan website, aplikasi Android, dan sinkronisasi sistem yang terpadu di era digital.' },
        { property: 'og:url', content: 'https://yudev.my.id' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Yudev' },
        { property: 'og:locale', content: 'id_ID' },
        { property: 'og:image', content: 'https://yudev.my.id/og-image.png' },
        { property: 'og:image:alt', content: 'Yudev - Digitalisasi Bisnis Otomatis & Terintegrasi' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Yudev - Digitalisasi Bisnis Otomatis & Terintegrasi' },
        { name: 'twitter:description', content: 'Membantu transformasi bisnis Anda melalui pengembangan website, aplikasi Android, dan sinkronisasi sistem yang terpadu di era digital.' },
        { name: 'twitter:image', content: 'https://yudev.my.id/og-image.png' },
        
        // Additional SEO
        { name: 'theme-color', content: '#ffffff' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'sitemap', href: '/sitemap.xml' },
        { rel: 'alternate', hreflang: 'id', href: 'https://yudev.my.id' },
        { rel: 'alternate', hreflang: 'x-default', href: 'https://yudev.my.id' },
        // Preconnect untuk performance
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
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
            image: 'https://yudev.my.id/og-image.png',
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
      crawlLinks: true,
      routes: ['/sitemap.xml', '/robots.txt', '/rss.xml'],
      ignore: ['/admin']
    },
    // Compression
    compressPublicAssets: true
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
    '/': { prerender: true, cache: { maxAge: 60 * 10 } },
    '/blog/**': { swr: 3600 },
    '/projects/**': { prerender: true },
    '/**': {
      cache: { maxAge: 60 * 60 },
      headers: {
        'Cache-Control': 'public, max-age=3600, s-maxage=86400'
      }
    }
  },

  vite: {
    server: {
      allowedHosts: [
        'tones-toilet-carriers-coffee.trycloudflare.com'
      ]
    }
  }
})