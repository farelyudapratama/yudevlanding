<script setup lang="ts">
// Data dummy portofolio
const items = [
  { id: 1, logo: 'i-heroicons-globe-alt', color: 'bg-blue-500/10 dark:bg-blue-500/20' },
  { id: 2, logo: 'i-heroicons-device-phone-mobile', color: 'bg-purple-500/10 dark:bg-purple-500/20' },
  { id: 3, logo: 'i-heroicons-computer-desktop', color: 'bg-emerald-500/10 dark:bg-emerald-500/20' },
  { id: 4, logo: 'i-heroicons-cpu-chip', color: 'bg-orange-500/10 dark:bg-orange-500/20' },
  { id: 5, logo: 'i-heroicons-cloud', color: 'bg-pink-500/10 dark:bg-pink-500/20' },
  { id: 6, logo: 'i-heroicons-beaker', color: 'bg-indigo-500/10 dark:bg-indigo-500/20' },
]

// Duplikasi data tepat 1x untuk infinite loop yang mulus (seamless)
const doubledProjects = [...items, ...items]
</script>

<template>
  <section class="relative h-screen lg:h-[calc(100vh-64px)] flex items-stretch overflow-hidden">
    
    <div class="flex flex-col lg:flex-row w-full items-stretch">
      
      <div class="flex-1 flex items-center justify-center lg:justify-end z-10 px-6 py-12 lg:pr-16">
        <div class="max-w-xl flex flex-col gap-8">
            <UBadge variant="subtle" color="primary" size="lg" class="w-fit flex items-center gap-2 rounded-full px-4 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <span class="font-bold">Siap bantu proyek kamu selanjutnya</span>
                <template #leading>
                    <span class="relative flex size-2">
                    <span class="absolute inline-flex size-full rounded-full opacity-75 bg-success animate-ping" />
                    <span class="relative inline-flex size-2 scale-90 rounded-full bg-success" />
                    </span>
                </template>
            </UBadge>

            <h1 class="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold tracking-tight leading-[1.15] text-gray-900 dark:text-white mb-6">
                Digitalisasi Bisnis <br class="hidden sm:block" />
                dengan Sistem <br />
                
                <div class="inline-flex flex-wrap items-center gap-x-3 gap-y-4 mt-2">
                    <span class="inline-block bg-[#FFD700] text-gray-950 px-4 py-1.5 rounded-xl border-[3px] border-white dark:border-gray-950 shadow-sm transform -rotate-1">
                    Otomatis
                    </span>
                    
                    <span class="text-4xl sm:text-5xl font-light text-gray-400 italic">&amp;</span>
                    
                    <span class="inline-block bg-[#FF2A5F] text-white px-4 py-1.5 rounded-xl border-[3px] border-white dark:border-gray-950 shadow-sm transform rotate-1 relative lg:-top-1">
                    Terintegrasi
                    </span>
                </div>
            </h1>

            <p class="text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed mt-6 italic border-l-4 border-gray-300 dark:border-gray-700 pl-4">
                Membantu transformasi bisnis Anda melalui pengembangan website, aplikasi Android, dan sinkronisasi sistem yang terpadu di era digital.
            </p>

            <div class="flex flex-wrap gap-4 mt-4">
                <UButton size="xl" color="primary" class="px-8 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
                    Yuk, diskusi tentang proyekmu!
                </UButton>

                <UButton size="xl" variant="ghost" class="px-8 rounded-full font-medium border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    Lihat Portofolio
                </UButton>
            </div>

        </div>
      </div>

      <div class="flex-1 relative h-full min-h-125 border-l border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/20">
        
        <div class="absolute top-0 inset-x-0 h-40 bg-linear-to-b from-white dark:from-gray-900 to-transparent z-20 pointer-events-none" />
        <div class="absolute bottom-0 inset-x-0 h-40 bg-linear-to-t from-white dark:from-gray-900 to-transparent z-20 pointer-events-none" />

        <div class="grid grid-cols-3 gap-4 px-4 h-full">
          <div class="relative h-full overflow-hidden">
            <div class="flex flex-col gap-4 py-2 animate-scroll-up will-change-transform">
              <div v-for="(p, i) in doubledProjects" :key="`up-${i}`" class="border border-gray-200 dark:border-gray-800 rounded-3xl flex items-center justify-center shrink-0 h-48 w-full" :class="p.color">
                <Icon :name="p.logo" class="w-12 h-12 text-gray-600/50 dark:text-white/40" />
              </div>
            </div>
          </div>

          <div class="relative h-full overflow-hidden">
            <div class="flex flex-col gap-4 py-2 animate-scroll-down will-change-transform">
              <div v-for="(p, i) in doubledProjects" :key="`down-${i}`" class="border border-gray-200 dark:border-gray-800 rounded-3xl flex items-center justify-center shrink-0 h-64 w-full" :class="p.color">
                <Icon :name="p.logo" class="w-16 h-16 text-gray-600/50 dark:text-white/40" />
              </div>
            </div>
          </div>

          <div class="relative h-full overflow-hidden">
            <div class="flex flex-col gap-4 py-2 animate-scroll-up-slow will-change-transform">
              <div v-for="(p, i) in doubledProjects" :key="`up-slow-${i}`" class="border border-gray-200 dark:border-gray-800 rounded-3xl flex items-center justify-center shrink-0 h-48 w-full" :class="p.color">
                <Icon :name="p.logo" class="w-12 h-12 text-gray-600/50 dark:text-white/40" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.animate-scroll-up {
  animation: scroll-up-frames 20s linear infinite;
}

.animate-scroll-up-slow {
  animation: scroll-up-frames 35s linear infinite;
}

.animate-scroll-down {
  animation: scroll-down-frames 25s linear infinite;
  transform: translateY(-50%); 
}

@keyframes scroll-up-frames {
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
}

@keyframes scroll-down-frames {
  0% { transform: translateY(-50%); }
  100% { transform: translateY(0); }
}
</style>