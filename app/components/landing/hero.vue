<script setup lang="ts">
const projects = [
  {
    name: 'Aturdana',
    image: '/projects/aturdana/turdan1.png',
    tone: 'from-sky-500/20 to-cyan-500/10',
  },
  {
    name: 'SnapCal',
    image: '/projects/snapcal/s6.png',
    tone: 'from-violet-500/20 to-fuchsia-500/10',
  },
  {
    name: 'Media CMS',
    image: '/projects/media-cms/dashboard.png',
    tone: 'from-emerald-500/20 to-lime-500/10',
  },
  {
    name: 'Stockup',
    image: '/projects/stockup/stockup-1.png',
    tone: 'from-amber-500/20 to-orange-500/10',
  },
]

// Duplikasi data tepat 1x untuk infinite loop yang mulus (seamless)
const doubledProjects = [...projects, ...projects]
</script>

<template>
  <section v-reveal="{ distance: 24, duration: 0.72, threshold: 0.05 }" class="relative h-screen lg:h-[calc(100vh-64px)] flex items-stretch overflow-hidden">
    
    <div class="flex flex-col lg:flex-row w-full items-stretch">
      
      <div v-reveal="{ origin: 'left', distance: 28, duration: 0.78, delay: 0.05 }" class="flex-1 flex items-center justify-center lg:justify-end z-10 px-6 py-12 lg:pr-16">
        <div class="max-w-xl flex flex-col gap-8">
        <UBadge v-reveal="{ origin: 'top', distance: 12, duration: 0.6, delay: 0.12 }" variant="subtle" color="primary" size="lg" class="w-fit flex items-center gap-2 rounded-full px-4 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <span class="font-bold">Siap bantu proyek kamu selanjutnya</span>
                <template #leading>
                    <span class="relative flex size-2">
                    <span class="absolute inline-flex size-full rounded-full opacity-75 bg-success animate-ping" />
                    <span class="relative inline-flex size-2 scale-90 rounded-full bg-success" />
                    </span>
                </template>
            </UBadge>

            <h1 v-reveal="{ distance: 22, duration: 0.72, delay: 0.16 }" class="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold tracking-tight leading-[1.15] text-gray-900 dark:text-white mb-6">
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

            <p v-reveal="{ distance: 18, duration: 0.68, delay: 0.22 }" class="text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed mt-6 italic border-l-4 border-gray-300 dark:border-gray-700 pl-4">
                Membantu transformasi bisnis Anda melalui pengembangan website, aplikasi Android, dan sinkronisasi sistem yang terpadu di era digital.
            </p>

            <div v-reveal="{ distance: 14, duration: 0.62, delay: 0.28 }" class="flex flex-wrap gap-4 mt-4">
                <UButton size="xl" color="primary" class="px-8 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
                    Yuk, diskusi tentang proyekmu!
                </UButton>

                <UButton size="xl" variant="ghost" class="px-8 rounded-full font-medium border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    Lihat Portofolio
                </UButton>
            </div>

        </div>
      </div>

      <div v-reveal="{ origin: 'right', distance: 24, duration: 0.8, delay: 0.1 }" class="flex-1 relative h-full min-h-125 border-l border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/20">
        
        <div class="absolute top-0 inset-x-0 h-40 bg-linear-to-b from-white dark:from-gray-900 to-transparent z-20 pointer-events-none" />
        <div class="absolute bottom-0 inset-x-0 h-40 bg-linear-to-t from-white dark:from-gray-900 to-transparent z-20 pointer-events-none" />

        <div class="grid grid-cols-3 gap-4 px-4 h-full">
          <div class="relative h-full overflow-hidden">
            <div class="flex flex-col gap-4 py-2 animate-scroll-up will-change-transform">
              <div v-for="(p, i) in doubledProjects" :key="`up-${i}`" v-reveal="{ distance: 14, duration: 0.48, delay: i * 0.03 }" class="group relative overflow-hidden border border-gray-200 dark:border-gray-800 rounded-3xl shrink-0 h-48 w-full bg-gray-100 dark:bg-gray-900 shadow-sm">
                <img
                  :src="p.image"
                  :alt="p.name"
                  width="640"
                  height="480"
                  loading="lazy"
                  quality="80"
                  class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                <div class="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between gap-3 text-white">
                  <div>
                    <p class="text-xs uppercase tracking-[0.3em] text-white/70">Project</p>
                    <h3 class="text-lg font-semibold leading-tight">{{ p.name }}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="relative h-full overflow-hidden">
            <div class="flex flex-col gap-4 py-2 animate-scroll-down will-change-transform">
              <div v-for="(p, i) in doubledProjects" :key="`down-${i}`" v-reveal="{ distance: 14, duration: 0.48, delay: i * 0.03 + 0.04 }" class="group relative overflow-hidden border border-gray-200 dark:border-gray-800 rounded-3xl shrink-0 h-64 w-full bg-gray-100 dark:bg-gray-900 shadow-sm" :class="`bg-linear-to-br ${p.tone}`">
                <img
                  :src="p.image"
                  :alt="p.name"
                  width="640"
                  height="480"
                  loading="lazy"
                  quality="80"
                  class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/15 to-transparent" />
                <div class="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between gap-3 text-white">
                  <div>
                    <p class="text-xs uppercase tracking-[0.3em] text-white/70">Project</p>
                    <h3 class="text-xl font-semibold leading-tight">{{ p.name }}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="relative h-full overflow-hidden">
            <div class="flex flex-col gap-4 py-2 animate-scroll-up-slow will-change-transform">
              <div v-for="(p, i) in doubledProjects" :key="`up-slow-${i}`" v-reveal="{ distance: 14, duration: 0.48, delay: i * 0.03 + 0.08 }" class="group relative overflow-hidden border border-gray-200 dark:border-gray-800 rounded-3xl shrink-0 h-48 w-full bg-gray-100 dark:bg-gray-900 shadow-sm">
                <img
                  :src="p.image"
                  :alt="p.name"
                  width="640"
                  height="480"
                  loading="lazy"
                  quality="80"
                  class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                <div class="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between gap-3 text-white">
                  <div>
                    <p class="text-xs uppercase tracking-[0.3em] text-white/70">Project</p>
                    <h3 class="text-lg font-semibold leading-tight">{{ p.name }}</h3>
                  </div>
                </div>
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