<script setup lang="ts">
const projects = [
  {
    id: "snapcal",
    tags: ["Android", "Computer Vision", "YOLO11"],
    title: "SnapCal Vision AI",
    imageUrl: "/images/mockup-snapcal.png", 
    description: "Otomatisasi ekstraksi data nutrisi via AI, memangkas waktu input manual secara drastis untuk analisis kalori harian.",
    techStack: "Express.js • FastAPI • Gemini AI",
    impact: "Efisiensi Data Entry",
    iconColor: "text-purple-500 dark:text-purple-400",
    bgColor: "bg-purple-500/10 dark:bg-purple-400/10",
    borderColor: "border-purple-200 dark:border-purple-500/20",
  },
  {
    id: "apotek",
    tags: ["Web/Mobile", "Healthcare", "Laravel"],
    title: "Apothecary System",
    imageUrl: "/images/mockup-apotek.png",
    description: "Digitalisasi manajemen inventaris dan transaksi apotek terpusat dengan dukungan kecerdasan buatan untuk rekomendasi farmasi.",
    techStack: "Flutter • Laravel • Firebase",
    impact: "Integrasi Operasional",
    iconColor: "text-emerald-500 dark:text-emerald-400",
    bgColor: "bg-emerald-500/10 dark:bg-emerald-400/10",
    borderColor: "border-emerald-200 dark:border-emerald-500/20",
  },
  {
    id: "stockup",
    tags: ["Web App", "Inventory", "Vue.js"],
    title: "Stockup Inventory",
    imageUrl: "/images/mockup-stockup.png",
    description: "Sistem manajemen stok modern dengan pelacakan real-time untuk meminimalisir human-error pada operasional gudang dan retail.",
    techStack: "Vue.js • Express.js • MongoDB",
    impact: "Akurasi Data 99%",
    iconColor: "text-blue-500 dark:text-blue-400",
    bgColor: "bg-blue-500/10 dark:bg-blue-400/10",
    borderColor: "border-blue-200 dark:border-blue-500/20",
  },
];
</script>

<template>
  <div class="relative">
    <div class="border-t border-gray-200 dark:border-gray-800 w-full h-20 relative overflow-hidden">
      <div class="absolute top-1/2 left-1/4 w-96 h-96 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
    </div>

    <div class="border-t border-gray-200 dark:border-gray-800 w-full relative">
      <UContainer class="grid grid-cols-1 md:grid-cols-12 relative z-10">
        <div class="md:col-span-9 border-x border-gray-200 dark:border-gray-800 flex flex-col relative overflow-hidden bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
          <div class="p-8 md:px-12 border-b border-gray-200 dark:border-gray-800 flex-1 flex items-center">
            <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight">
              Karya & Rekam Jejak
            </h2>
          </div>
          <div class="p-8 md:px-12 md:py-8">
            <p class="text-gray-600 dark:text-gray-400 text-lg max-w-2xl leading-relaxed">
              Kumpulan implementasi sistem digital yang dirancang untuk mengoptimalkan efisiensi dan pertumbuhan skala bisnis.
            </p>
          </div>
        </div>

        <div class="md:col-span-3 border-r border-gray-200 dark:border-gray-800 flex">
          <UButton
            variant="ghost"
            class="group w-full h-full min-h-30 rounded-none flex flex-col items-center justify-center gap-2 font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-500 overflow-hidden relative"
          >
            <div class="relative z-10 flex items-center gap-2 text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
              <Icon name="i-mdi-github" class="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              <span class="font-semibold tracking-wide">Lihat Repositori</span>
            </div>
            <Icon name="i-heroicons-arrow-right" class="w-4 h-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-primary-500 absolute bottom-6" />
            <div class="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-primary-500 via-purple-500 to-primary-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </UButton>
        </div>
      </UContainer>
    </div>

    <div class="w-full relative">
      <UContainer class="grid grid-cols-1 md:grid-cols-3 relative z-10">
        <div
          v-for="(item, index) in projects"
          :key="item.id"
          class="group flex flex-col border-x border-t border-b border-gray-200 dark:border-gray-800 md:border-b-0 md:last:border-r last:border-r border-l-0 first:border-l bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-900 transition-all duration-500 relative overflow-hidden"
          :class="{
            'hover:shadow-[0_0_40px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.02)] hover:z-20 md:-ml-px': true,
          }"
        >
          <div class="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-black/5 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <div
            class="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            :class="item.bgColor"
          ></div>

          <div class="p-8 md:p-10 h-full min-h-105 flex flex-col border-b border-gray-100 dark:border-white/5 relative z-10">
            
            <div class="w-full aspect-4/3 mb-8 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 relative group-hover:shadow-lg transition-all duration-500">
               <img 
                 :src="item.imageUrl" 
                 :alt="item.title" 
                 class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" 
               />
               <div class="absolute inset-0 flex flex-col items-center justify-center text-gray-400 dark:text-gray-600" style="display: none;">
                  <Icon name="i-heroicons-photo" class="w-8 h-8 mb-2 opacity-50" />
                  <span class="text-xs font-medium uppercase tracking-wider">Mockup Diperlukan</span>
               </div>
            </div>

            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="tag in item.tags"
                :key="tag"
                class="inline-flex items-center justify-center text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 px-3 py-1.5 rounded-full border border-gray-200 dark:border-white/10 group-hover:border-gray-300 dark:group-hover:border-white/20 transition-all duration-300 backdrop-blur-md"
              >
                {{ tag }}
              </span>
            </div>

            <h3 class="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300">
              {{ item.title }}
            </h3>

            <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-auto group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
              {{ item.description }}
            </p>
          </div>

          <div class="p-8 md:px-10 md:py-6 bg-gray-50/50 dark:bg-white/2 group-hover:bg-gray-50 dark:group-hover:bg-white/5 transition-colors duration-500 mt-auto relative z-10 border-t border-transparent group-hover:border-gray-100 dark:group-hover:border-white/5">
            <div class="flex flex-col gap-1.5 relative">
              <span class="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 dark:text-gray-500">
                Nilai Solusi: <span :class="item.iconColor">{{ item.impact }}</span>
              </span>
              <span class="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1">
                Teknologi: {{ item.techStack }}
              </span>
            </div>
          </div>
        </div>
      </UContainer>
    </div>

    <div class="border-t border-gray-200 dark:border-gray-800 w-full relative">
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] translate-y-1/2 pointer-events-none"></div>
    </div>
  </div>
</template>