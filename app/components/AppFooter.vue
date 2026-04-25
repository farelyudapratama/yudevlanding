<script setup lang="ts">
// Mengambil tahun saat ini secara dinamis untuk copyright
const currentYear = new Date().getFullYear()

// Struktur data link untuk memudahkan manajemen
const footerLinks = {
  navigasi: [
    { label: 'Beranda', to: '#' },
    { label: 'Portofolio', to: '#' },
    { label: 'Layanan & Harga', to: '#' },
    { label: 'FAQ', to: '#' }
  ],
  layanan: [
    { label: 'Landing Page', to: '#' },
    { label: 'Web System', to: '#' },
    { label: 'AI Integration', to: '#' },
    { label: 'UI/UX Design', to: '#' }
  ],
  sosial: [
    { icon: 'i-mdi-github', label: 'GitHub', to: '#' },
    { icon: 'i-mdi-linkedin', label: 'LinkedIn', to: '#' },
    { icon: 'i-mdi-instagram', label: 'Instagram', to: '#' },
    { icon: 'i-heroicons-envelope', label: 'Email', to: 'mailto:halo@yudev.com' }
  ]
}
</script>

<template>
  <footer class="bg-white dark:bg-[#060B19] border-t border-gray-100 dark:border-white/5 transition-colors duration-300 pt-16 pb-8">
    <UContainer class="w-full max-w-7xl">
      
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
        
        <div class="md:col-span-12 lg:col-span-4">
          <NuxtLink to="/" class="text-2xl font-black text-gray-900 dark:text-white tracking-tight flex items-center gap-2 mb-4 transition-colors">
            <div class="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center">
              <span class="text-white text-lg leading-none font-bold">Y</span>
            </div>
            Yudev<span class="text-primary-500">.</span>
          </NuxtLink>
          <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs transition-colors">
            Mitra teknologi terpercaya untuk mentransformasi ide Anda menjadi produk digital yang berkinerja tinggi dan berfokus pada hasil bisnis.
          </p>
        </div>

        <div class="md:col-span-4 lg:col-span-2 lg:col-start-8">
          <h4 class="font-bold text-gray-900 dark:text-white mb-6 uppercase text-xs tracking-wider transition-colors">Navigasi</h4>
          <ul class="space-y-4">
            <li v-for="link in footerLinks.navigasi" :key="link.label">
              <NuxtLink :to="link.to" class="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="md:col-span-4 lg:col-span-2">
          <h4 class="font-bold text-gray-900 dark:text-white mb-6 uppercase text-xs tracking-wider transition-colors">Layanan</h4>
          <ul class="space-y-4">
            <li v-for="link in footerLinks.layanan" :key="link.label">
              <NuxtLink :to="link.to" class="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

      </div>

      <div class="pt-8 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 transition-colors">
        
        <p class="text-sm text-gray-500 dark:text-gray-500 transition-colors">
          &copy; {{ currentYear }} Yudev. All rights reserved.
        </p>

        <div class="flex items-center gap-5">
          <NuxtLink 
            v-for="social in footerLinks.sosial" 
            :key="social.label"
            :to="social.to"
            target="_blank"
            class="text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white transition-colors"
            :aria-label="social.label"
          >
            <Icon :name="social.icon" class="w-5 h-5" />
          </NuxtLink>
        </div>

      </div>
    </UContainer>
  </footer>
</template>