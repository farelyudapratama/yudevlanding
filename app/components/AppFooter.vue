<script setup lang="ts">
const currentYear = new Date().getFullYear()

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
    { label: 'API Integration', to: '#' },
    { label: 'Android App', to: '#' }
  ],
  sosial: [
    { icon: 'i-mdi-github', label: 'GitHub', to: 'https://github.com/farelyudapratama' },
    { icon: 'i-mdi-linkedin', label: 'LinkedIn', to: 'https://www.linkedin.com/in/farel-yuda-pratama' },
    { icon: 'i-heroicons-envelope', label: 'Email', to: 'mailto:halo@yudev.my.id' }
  ]
}
</script>

<template>
  <footer v-reveal="{ distance: 26, duration: 0.7 }" class="transition-colors duration-300">
    <div class="border-t border-gray-200 dark:border-gray-800 w-full"></div>

    <div class="border-t border-gray-200 dark:border-gray-800 w-full relative">
      <UContainer class="w-full max-w-7xl">
        <div v-reveal="{ distance: 18, duration: 0.72, delay: 0.06 }" class="md:border-x border-gray-200 dark:border-gray-800 px-5 py-8 sm:px-6 md:px-12 md:py-12 bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-8">
            <div class="md:col-span-12 lg:col-span-5">
              <NuxtLink to="/" class="text-2xl font-black text-gray-900 dark:text-white tracking-tight flex items-center gap-1 mb-4 transition-colors">
                Yudev<span class="text-primary-500">.</span>
              </NuxtLink>

              <p class="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
                Kami membangun sistem digital yang mengutamakan kualitas eksekusi, komunikasi transparan, dan solusi teknis yang tepat guna untuk pertumbuhan bisnis Anda.
              </p>
            </div>

            <div class="md:col-span-6 lg:col-span-3 lg:col-start-8">
              <h4 class="font-bold text-gray-900 dark:text-white mb-5 uppercase text-[10px] tracking-[0.2em] transition-colors">Navigasi</h4>
              <ul class="space-y-3.5">
                <li v-for="(link, idx) in footerLinks.navigasi" :key="link.label" v-reveal="{ origin: 'left', distance: 14, duration: 0.55, delay: idx * 0.04 }">
                  <NuxtLink :to="link.to" class="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-500 transition-colors cursor-pointer">
                    {{ link.label }}
                  </NuxtLink>
                </li>
              </ul>
            </div>

            <div class="md:col-span-6 lg:col-span-2">
              <h4 class="font-bold text-gray-900 dark:text-white mb-5 uppercase text-[10px] tracking-[0.2em] transition-colors">Layanan</h4>
              <ul class="space-y-3.5">
                <li v-for="(link, idx) in footerLinks.layanan" :key="link.label" v-reveal="{ origin: 'right', distance: 14, duration: 0.55, delay: idx * 0.04 }">
                  <NuxtLink :to="link.to" class="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-500 transition-colors cursor-pointer">
                    {{ link.label }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </UContainer>
    </div>

    <div class="border-t border-gray-200 dark:border-gray-800 w-full relative">
      <UContainer class="w-full max-w-7xl">
        <div v-reveal="{ distance: 14, duration: 0.6, delay: 0.08 }" class="md:border-x border-gray-200 dark:border-gray-800 px-5 py-5 sm:px-6 md:px-12 md:py-6 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-xs md:text-sm text-gray-500 dark:text-gray-500">
            &copy; {{ currentYear }} Yudev. Solusi Digital Terintegrasi.
          </p>

          <div class="flex items-center gap-5">
            <NuxtLink
              v-for="(social, idx) in footerLinks.sosial"
              :key="social.label"
              :to="social.to"
              target="_blank"
              v-reveal="{ origin: 'bottom', distance: 10, duration: 0.45, delay: idx * 0.05 }"
              class="text-gray-400 hover:text-primary-500 dark:text-gray-500 dark:hover:text-primary-400 transition-colors cursor-pointer"
            >
              <Icon :name="social.icon" class="w-5 h-5" />
            </NuxtLink>
          </div>
        </div>
      </UContainer>
    </div>

    <div class="border-t border-gray-200 dark:border-gray-800 w-full"></div>
  </footer>
</template>