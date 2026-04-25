<script setup lang="ts">
const projects = [
  {
    id: 'snapcal',
    tags: ['Android', 'AI/ML', 'YOLO11'],
    logoName: 'SnapCal',
    logoIcon: 'i-heroicons-camera', 
    description: 'Aplikasi cerdas untuk menganalisis makanan dan menghitung kalori harian. Ditenagai oleh Gemini AI, LLaMA Groq, dan model kustom YOLO11.',
    techStack: 'Express.js • MongoDB • FastAPI',
    role: 'FULL-STACK DEVELOPER',
    iconColor: 'text-[#8E2DE2]',
  },
  {
    id: 'bantutugas',
    tags: ['Web Dev', 'IT Service', 'Design'],
    logoName: 'bantutugas.id',
    logoIcon: 'i-heroicons-code-bracket-square',
    description: 'Layanan profesional penyelesaian tugas dan proyek IT terpadu. Dilengkapi dengan SOP produksi dan strategi branding yang terstruktur.',
    techStack: 'Nuxt 3 • WebOps • UI/UX',
    role: 'FOUNDER & TECH LEAD',
    iconColor: 'text-[#1D976C]',
  },
  {
    id: 'godot-horror',
    tags: ['Game Dev', 'GDScript', 'Horror'],
    logoName: 'Project Null',
    logoIcon: 'i-heroicons-play',
    description: 'Eksplorasi game horor psikologis dengan mekanik pergerakan pemain yang dikustomisasi dan implementasi efek visual "ghost" yang imersif.',
    techStack: 'Godot Engine • GDScript',
    role: 'GAME DEVELOPER',
    iconColor: 'text-[#FF416C]',
  }
]
</script>

<template>
  <div>
    <div class="border-t border-gray-200 dark:border-gray-800 w-full h-20"></div>

    <div class="border-t border-gray-200 dark:border-gray-800 w-full">
      <UContainer class="grid grid-cols-1 md:grid-cols-12">
        
        <div class="md:col-span-9 border-x border-gray-200 dark:border-gray-800 flex flex-col">
          <div class="p-8 md:px-12 border-b border-gray-200 dark:border-gray-800 flex-1 flex items-center">
            <h2 class="text-4xl md:text-5xl font-bold tracking-tight">
              Ideated. Developed. Deployed.
            </h2>
          </div>
          <div class="p-8 md:px-12 md:py-6">
            <p class="text-gray-400 text-lg">
              Kumpulan proyek pilihan yang dibangun dari nol hingga siap digunakan.
            </p>
          </div>
        </div>

        <div class="md:col-span-3 border-r border-gray-200 dark:border-gray-800 flex">
          <UButton 
            variant="ghost" 
            color="secondary" 
            trailing-icon="i-heroicons-arrow-right-20-solid"
            class="w-full h-full min-h-25 rounded-none flex items-center justify-center font-medium hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
          >
            View Github
          </UButton>
        </div>

      </UContainer>
    </div>

    <div class="w-full">
      <UContainer class="grid grid-cols-1 md:grid-cols-3">
        
        <div 
          v-for="item in projects" 
          :key="item.id"
          class="flex flex-col border-x border-t border-b border-gray-200 dark:border-gray-800 md:border-b-0 md:last:border-r last:border-r border-l-0 first:border-l"
        >
          <div class="p-8 h-full min-h-50 border-b border-gray-200 dark:border-gray-800">
             <div class="flex flex-wrap gap-2 mb-8">
              <span v-for="tag in item.tags" :key="tag" class="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-gray-400">
                {{ tag }}
              </span>
            </div>
            <Icon :name="item.logoIcon" class="w-8 h-8 mb-4" :class="item.iconColor" />
            <h3 class="text-2xl font-bold mb-4">{{ item.logoName }}</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              {{ item.description }}
            </p>
          </div>

          <div class="p-8 bg-white/5 group hover:bg-white/10 transition-colors">
            <span class="text-xs font-bold tracking-wider block mb-1 uppercase">{{ item.role }}</span>
            <span class="text-xs text-gray-500">{{ item.techStack }}</span>
          </div>
        </div>

      </UContainer>
    </div>

    <div class="border-t border-gray-200 dark:border-gray-800 w-full"></div>
  </div>
</template>
