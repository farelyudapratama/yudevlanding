<script setup lang="ts">
const values = [
  {
    icon: 'i-heroicons-arrow-trending-up',
    title: 'Selalu Belajar dan Beradaptasi',
    description: 'Setiap project adalah kesempatan untuk belajar hal baru. Saya aktif eksplorasi teknologi dan best practice terkini supaya hasil kerja saya terus meningkat.',
    color: 'text-purple-500 dark:text-purple-400',
    bg: 'bg-purple-500/10 dark:bg-purple-500/20',
    border: 'border-purple-200 dark:border-purple-500/20'
  },
  {
    icon: 'i-heroicons-chat-bubble-bottom-center-text',
    title: 'Komitmen',
    description: 'Saya mungkin belum punya pengalaman puluhan tahun, tapi saya berkomitmen untuk mengerjakan setiap project dengan serius. Kalau ada hal yang di luar kemampuan saya, saya akan jujur bilang bukan mengira-ngira dan mengharapkan yang terbaik.',
    color: 'text-emerald-500 dark:text-emerald-400',
    bg: 'bg-emerald-500/10 dark:bg-emerald-500/20',
    border: 'border-emerald-200 dark:border-emerald-500/20'
  }
]
</script>

<template>
  <section class="py-24 transition-colors duration-300">
    <UContainer class="w-full max-w-7xl">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        <div class="lg:col-span-5 lg:sticky lg:top-32">
          
          <UBadge variant="subtle" color="primary" size="lg" class="w-fit mb-6 flex items-center gap-2 rounded-full px-4 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <span class="font-bold">Tentang Saya</span>
          </UBadge>

          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight transition-colors">
            Developer yang Masih <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Terus Belajar</span>
          </h2>
          
          <div class="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed transition-colors">
            <p>
              Saya bukan developer senior yang sudah belasan tahun di industri. Saya developer muda yang baru memulai karir freelance tapi bukan berarti saya tidak serius.
            </p>
            <p>
              Saya sudah membangun beberapa project nyata: dari aplikasi yang terintegrasi AI, full-stack web app, sampai aplikasi android. Semuanya bisa dilihat dan dicoba langsung. Bagi saya, hasil kerja lebih berbicara dari klaim di bio.
            </p>
            <p class="font-medium text-gray-900 dark:text-gray-300">
              Yang membedakan saya? Saya tidak berpura-pura tahu segalanya. Tapi apa yang saya kerjakan, saya kerjakan dengan sungguh-sungguh.
            </p>
          </div>
        </div>

        <div class="lg:col-span-7 flex flex-col gap-6">
          <div 
            v-for="(item, index) in values" 
            :key="item.title"
            class="group p-8 rounded-3xl bg-gray-50 dark:bg-[#131E3A]/40 border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start"
            :class="{'sm:-ml-12 lg:ml-12': index === 1}" 
          >
            <div 
              class="w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center transition-colors duration-300"
              :class="item.bg"
            >
              <Icon :name="item.icon" class="w-7 h-7" :class="item.color" />
            </div>

            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">
                {{ item.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>

      </div>

    </UContainer>
  </section>
</template>