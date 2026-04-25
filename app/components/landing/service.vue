<script setup lang="ts">
import { ref, computed } from 'vue'

// Tab categories
const categories = ['Landing Page', 'Web System'] as const
type Category = (typeof categories)[number]

type PricingPackage = {
  name: string
  target: string
  price: string
  unit: string
  period: string
  description: string
  features: string[]
  isPopular: boolean
}

const activeTab = ref<Category>(categories[0])

// Struktur Data Terpusat (Berdasarkan Tab)
const pricingData: Record<Category, PricingPackage[]> = {
  'Landing Page': [
    {
      name: 'Starter',
      target: 'Cocok untuk UMKM & Personal Brand',
      price: '1.5', unit: 'jt', period: '/ project',
      description: 'Solusi cepat untuk hadir di dunia digital dengan tampilan profesional.',
      features: ['2 Halaman Landing Page', 'Maksimal 6 Section', 'Mobile Responsive', 'Tombol WhatsApp', 'Hosting 6 Bulan dan free domain (.com)', 'Revisi Sepuasnya (Selama Sebelum Hosting Aktif)'],
      isPopular: false
    },
    {
      name: 'Growth',
      target: 'Fokus Konversi & Performa',
      price: '3', unit: 'jt', period: '/ project',
      description: 'Desain interaktif dengan copywriting persuasif untuk mendatangkan lebih banyak leads.',
      features: ['Jumlah Halaman Landing Page (by Request)', 'Maksimal 10 Section', 'Animasi Scroll', 'Optimasi SEO Basic', 'Domain & Hosting 1 Tahun', 'SSL', "Email", "Revisi Sepuasnya (Selama Sebelum Hosting Aktif)"],
      isPopular: true 
    },
    {
      name: 'Custom',
      target: 'Kebutuhan Campaign Khusus',
      price: 'Custom', unit: '', period: 'by discussion',
      description: 'Solusi landing page yang sepenuhnya disesuaikan dengan kebutuhan bisnis dan target audiens Anda.',
      features: ['Harga disesuaikan berdasarkan kebutuhan spesifik Anda'],
      isPopular: false
    }
  ],
  'Web System': [
    {
      name: 'Web Standard',
      target: 'Cocok untuk Bisnis Kecil & Personal Projects',
      price: '3', unit: 'jt', period: '/ project',
      description: 'Sistem web sederhana untuk kebutuhan dasar seperti portofolio, dan blog.',
      features: ['Maks 5 Halaman Utama', 'Dashboard Admin', 'Blog / Artikel System', 'Form Kontak', 'Hosting 6 Bulan', 'Revisi Sepuasnya (Selama Sebelum Hosting Aktif)'],
      isPopular: false
    },
    {
      name: 'Web Expert',
      target: 'Ideal untuk Startup & Bisnis Menengah',
      price: '12', unit: 'jt', period: '/ project',
      description: 'Sistem web yang dirancang untuk menangani kebutuhan bisnis yang lebih kompleks dengan fitur-fitur canggih.',
      features: ['Maks 10 Halaman Utama', 'Dashboard Admin yang Dapat Disesuaikan', 'Sistem Blog / Artikel yang Kuat', 'Form Kontak yang Terintegrasi', 'Hosting 1 Tahun', 'Revisi Sepuasnya (Selama Sebelum Hosting Aktif)'],
      isPopular: true 
    },
    {
      name: 'Web Custom',
      target: 'Solusi Kustom untuk Sistem Web Sesuai Kebutuhan',
      price: 'Custom', unit: '', period: 'by discussion',
      description: 'Sistem web yang sepenuhnya disesuaikan dengan kebutuhan bisnis Anda.',
      features: ['Harga disesuaikan berdasarkan kebutuhan spesifik Anda'],
      isPopular: false
    }
  ],
}

const currentPackages = computed(() => pricingData[activeTab.value])
</script>

<template>
  <div class="min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
    
    <div class="border-t border-gray-200 dark:border-gray-800 w-full h-20"></div>

    <div class="border-t border-gray-200 dark:border-gray-800 w-full">
      <UContainer>
        <div class="border-x border-gray-200 dark:border-gray-800 p-8 md:p-12 flex flex-col items-center text-center">
          
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Pilih Solusi Sesuai Skala Bisnis Anda
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
            Harga transparan, tanpa biaya tersembunyi. Mulai dari landing page sederhana hingga sistem terintegrasi AI.
          </p>

          <div class="inline-flex p-1.5 bg-gray-200/50 dark:bg-[#131E3A] rounded-xl backdrop-blur-sm border border-gray-200 dark:border-white/10 transition-colors">
            <button
              v-for="tab in categories"
              :key="tab"
              @click="activeTab = tab"
              class="px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300"
              :class="activeTab === tab 
                ? 'bg-white dark:bg-[#1E2D50] text-gray-900 dark:text-white shadow-sm' 
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'"
            >
              {{ tab }}
            </button>
          </div>

        </div>
      </UContainer>
    </div>

    <div class="border-t border-gray-200 dark:border-gray-800 w-full">
      <UContainer>
        <TransitionGroup 
          tag="div" 
          name="fade"
          class="grid grid-cols-1 lg:grid-cols-3 border-x border-gray-200 dark:border-gray-800 relative"
        >
          <div 
            v-for="(pkg, index) in currentPackages" 
            :key="pkg.name + activeTab" 
            class="relative flex flex-col p-8 transition-all duration-500"
            :class="[
              // Grid Border Logic: Bawah untuk mobile, Kanan untuk desktop
              'border-b border-gray-200 dark:border-gray-800 lg:border-b-0',
              index !== currentPackages.length - 1 ? 'lg:border-r' : '',
              
              // Popular Highlight: Background lebih terang alih-alih di-scale
              pkg.isPopular 
                ? 'bg-white dark:bg-white/5' 
                : 'hover:bg-white/50 dark:hover:bg-white/[0.02]'
            ]"
          >
            <div class="min-h-[28px] mb-4">
              <span v-if="pkg.isPopular" class="inline-block bg-primary-500/10 text-primary-500 dark:text-primary-400 border border-primary-500/20 text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                Paling Diminati
              </span>
            </div>

            <div class="mb-8">
              <h3 class="text-2xl font-bold mb-2">{{ pkg.name }}</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400 min-h-[40px]">{{ pkg.target }}</p>
            </div>

            <div class="mb-8 flex items-baseline gap-1">
              <span v-if="pkg.price !== 'Custom'" class="text-gray-500 dark:text-gray-400 font-semibold">Rp</span>
              <span class="text-4xl lg:text-5xl font-black tracking-tight">{{ pkg.price }}</span>
              <span v-if="pkg.unit" class="text-2xl font-bold">{{ pkg.unit }}</span>
              <span class="text-gray-500 dark:text-gray-400 ml-1 font-medium">{{ pkg.period }}</span>
            </div>

            <p class="text-sm text-gray-600 dark:text-gray-300 mb-6 pb-6 border-b border-gray-200 dark:border-gray-800">
              {{ pkg.description }}
            </p>

            <ul class="flex-1 space-y-4 mb-8">
              <li v-for="feature in pkg.features" :key="feature" class="flex items-start gap-3">
                <Icon 
                  name="i-heroicons-check-circle-20-solid" 
                  class="w-5 h-5 shrink-0 mt-0.5"
                  :class="pkg.isPopular ? 'text-primary-500' : 'text-gray-400 dark:text-gray-600'" 
                />
                <span class="text-sm text-gray-700 dark:text-gray-300">{{ feature }}</span>
              </li>
            </ul>

            <UButton 
              block
              size="lg"
              :color="pkg.isPopular ? 'primary' : 'secondary'"
              :variant="pkg.isPopular ? 'solid' : 'outline'"
              icon="i-logos-whatsapp-icon"
              class="font-semibold justify-center transition-all rounded-lg"
            >
              Diskusi Paket Ini
            </UButton>

          </div>
        </TransitionGroup>
      </UContainer>
    </div>

    <div class="border-t border-gray-200 dark:border-gray-800 w-full h-20"></div>

  </div>
</template>

<style scoped>
/* Transisi disesuaikan agar tidak merusak border grid saat fade in/out */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  display: none; 
}
</style>