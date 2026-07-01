// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/content', '@nuxt/image', '@nuxtjs/seo'],
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  colorMode: {
    preference: 'dark',
    fallback: 'dark', 
    storageKey: '',
  },
  
  // Runtime config untuk environment variables
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.yudev.my.id',
      siteName: process.env.NUXT_PUBLIC_SITE_NAME || 'Yudev'
    }
  },
  
  // Head configuration untuk SEO dan social sharing
  app: {
    head: {
      htmlAttrs: {
        lang: 'id'
      },
      titleTemplate: '%s | Yudev',
      title: 'Jasa Pembuatan Website & Digitalisasi Bisnis Terintegrasi',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Yudev: jasa pembuatan website, landing page, web system, Android, integrasi AI, dan otomasi bisnis untuk UMKM Indonesia.' },
        { name: 'keywords', content: 'jasa pembuatan website, jasa landing page, website bisnis, web system, aplikasi android, integrasi AI, otomasi bisnis, yudev' },
        { name: 'author', content: 'Yudev' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        
        // Open Graph untuk social sharing
        { property: 'og:title', content: 'Jasa Pembuatan Website & Digitalisasi Bisnis Terintegrasi | Yudev' },
        { property: 'og:description', content: 'Yudev: jasa pembuatan website, landing page, web system, Android, integrasi AI, dan otomasi bisnis untuk UMKM Indonesia.' },
        { property: 'og:url', content: 'https://www.yudev.my.id' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Yudev' },
        { property: 'og:locale', content: 'id_ID' },
        { property: 'og:image', content: 'https://www.yudev.my.id/og-image.png' },
        { property: 'og:image:alt', content: 'Yudev - Jasa Pembuatan Website dan Sistem Bisnis' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:type', content: 'image/png' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Jasa Pembuatan Website & Digitalisasi Bisnis Terintegrasi | Yudev' },
        { name: 'twitter:description', content: 'Yudev: jasa pembuatan website, landing page, web system, Android, integrasi AI, dan otomasi bisnis untuk UMKM Indonesia.' },
        { name: 'twitter:image', content: 'https://www.yudev.my.id/og-image.png' },
        
        // Additional SEO
        { name: 'theme-color', content: '#0a192f' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'sitemap', href: '/sitemap.xml' },
        // hreflang removed — single-language site, not needed
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
            url: 'https://www.yudev.my.id',
            description: 'Yudev: jasa pembuatan website, landing page, web system, Android, integrasi AI, dan otomasi bisnis untuk UMKM Indonesia.',
            image: 'https://www.yudev.my.id/og-image.png',
            sameAs: [
              'https://github.com/farelyudapratama',
              'https://www.linkedin.com/in/farel-yuda-pratama'
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

  // Performance & Security optimizations
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml', '/robots.txt', '/api/sitemap', '/api/robots'],
      failOnError: false,
      ignore: ['/admin']
    },
    // Compression
    compressPublicAssets: true,
    devStorage: {
      cache: {
        driver: 'memory'
      }
    },
    // Security & SEO HTTP Headers
    routeRules: {
      '/': {
        headers: {
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'SAMEORIGIN',
          'X-XSS-Protection': '1; mode=block',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
          'Cache-Control': 'public, max-age=600, s-maxage=3600'
        }
      },
      '/blog/**': {
        headers: {
          'Cache-Control': 'public, max-age=3600, s-maxage=86400',
          'X-Content-Type-Options': 'nosniff'
        }
      },
      '/projects/**': {
        headers: {
          'Cache-Control': 'public, max-age=86400, s-maxage=604800'
        }
      }
    }
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
    // Gunakan provider ipx tapi disable saat generate/build
    provider: 'ipx',
    formats: ['webp', 'avif'],
    // Batasi ukuran agar tidak error saat build
    sharp: {
      // Disable animated images processing
    }
  },
  // Robots.txt and sitemap.xml are generated as static files before build.
  // Disable @nuxtjs/seo sitemap - use static sitemap instead.
  // sitemap: false, // Uncomment if using @nuxtjs/seo module
  site: {
    url: 'https://www.yudev.my.id',
    name: 'Yudev',
    description: 'Yudev: jasa pembuatan website, landing page, web system, Android, integrasi AI, dan otomasi bisnis untuk UMKM Indonesia.',
    defaultLocale: 'id',
    debug: false,
  },

  ogImage: {
    mode: 'static',
    static: {
      fallback: '/og-image.png'
    }
  },

  sitemap: {
    sources: [
      '/api/sitemap'
    ],
    autoLastmod: true,
    exclude: [
      '/admin/**',
      '/_nuxt/**',
      '/404',
      '/500'
    ],
    defaults: {
      changefreq: 'weekly',
      priority: 0.8
    }
  },

  robots: {
    groups: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Bingbot', allow: '/' },
      { userAgent: 'Yandex', allow: '/' },
    ],
    sitemap: 'https://www.yudev.my.id/sitemap.xml',
    disallow: [
      '/admin/',
      '/_nuxt/',
      '/404',
      '/500'
    ]
  },

  schemaOrg: {
    identity: 'Organization',
    schema: {
      '@type': 'Organization',
      name: 'Yudev',
      url: 'https://www.yudev.my.id',
      logo: 'https://www.yudev.my.id/og-image.png',
      description: 'Yudev: jasa pembuatan website, landing page, web system, Android, integrasi AI, dan otomasi bisnis untuk UMKM Indonesia.',
      sameAs: [
        'https://github.com/farelyudapratama',
        'https://www.linkedin.com/in/farel-yuda-pratama'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        availableLanguage: ['id', 'en']
      }
    }
  },
  // Routeules untuk SEO dan caching
  routeRules: {
    '/': { prerender: true, cache: { maxAge: 60 * 10 } },
    '/blog/**':  { swr: 3600 },
    '/projects/**': { prerender: true },
    '/**': {
      cache: { maxAge: 60 * 60 },
      headers: {
        'Cache-Control': 'public, max-age=3600, s-maxage=86400'
      }
    },
    '/__og-image__/**': { swr: false, cache: false }
  },

  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  }
})
