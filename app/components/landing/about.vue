<script setup lang="ts">
const values = [
  {
    icon: 'i-heroicons-bolt', // Ganti icon agar lebih melambangkan adaptabilitas dan kecepatan sistem
    title: 'Adaptif & Standar Industri Tinggi',
    description: 'Saya terus beradaptasi dengan arsitektur teknis dan framework modern (termasuk integrasi AI), memastikan setiap solusi yang dikembangkan relevan untuk memecahkan masalah bisnis nyata, bukan sekadar mengikuti tren.',
    color: 'text-primary-500 dark:text-primary-400',
    bg: 'bg-primary-500/10 dark:bg-primary-500/20',
    border: 'border-primary-200 dark:border-primary-500/20'
  },
  {
    icon: 'i-heroicons-chat-bubble-bottom-center-text',
    title: 'Transparan dalam Proses',
    description: 'Saya tidak menjual janji berlebihan. Jika ada batasan pada scope, timeline, atau integrasi teknis, semuanya disampaikan sejak awal agar keputusan proyek tetap sehat dan terukur.',
    color: 'text-emerald-500 dark:text-emerald-400',
    bg: 'bg-emerald-500/10 dark:bg-emerald-500/20',
    border: 'border-emerald-200 dark:border-emerald-500/20'
  }
]
</script>

<template>
  <section class="transition-colors duration-300">
    <div class="border-t border-gray-200 dark:border-gray-800 w-full"></div>

    <div class="border-t border-gray-200 dark:border-gray-800 w-full relative z-10">
      <UContainer>
        <div class="md:border-x border-gray-200 dark:border-gray-800 px-5 py-8 sm:px-6 md:p-12 bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm">
          <UBadge variant="subtle" color="primary" size="lg" class="w-fit mb-6 flex items-center gap-2 rounded-full px-4 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <span class="font-bold">Tentang Saya</span>
          </UBadge>

          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight transition-colors">
            Eksekusi yang Tegas, <span class="text-transparent bg-clip-text bg-linear-to-r from-primary-600 to-emerald-500 dark:from-primary-400 dark:to-emerald-400">Komunikasi yang Jujur</span>
          </h2>

          <div class="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed transition-colors max-w-4xl">
            <p>
              Saya membantu bisnis membangun produk digital dengan proses yang rapi: tujuan jelas, prioritas fitur terukur, dan timeline yang realistis.
            </p>
            <p>
              Pengalaman saya bertumbuh dari arsitektur sistem nyata, mulai dari web app fungsional hingga integrasi kecerdasan buatan (AI). Fokus saya sederhana: hasil yang dapat diandalkan operasionalnya, bukan sekadar terlihat menarik di layar.
            </p>
            <p class="font-medium text-gray-900 dark:text-gray-300 border-l-4 border-primary-500 pl-4 mt-6">
              Saya percaya pada ekspektasi yang realistis. Jika ada batasan teknis atau fitur yang berada di luar ruang lingkup, akan saya sampaikan sejak awal beserta solusi alternatifnya. Kepercayaan bisnis dibangun dari transparansi, bukan janji kosong.
            </p>
          </div>
        </div>
      </UContainer>
    </div>

    <div class="border-t border-gray-200 dark:border-gray-800 w-full relative z-10">
      <UContainer>
        <div class="grid grid-cols-1 lg:grid-cols-12 md:border-x border-gray-200 dark:border-gray-800 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
          <div class="lg:col-span-5 p-5 sm:p-8 md:p-10 lg:border-r border-gray-200 dark:border-gray-800">
            <p class="text-sm uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400 font-bold mb-4">Prinsip Kerja</p>
            <h3 class="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
              Pendekatan yang tenang, terukur, dan dapat dipertanggungjawabkan.
            </h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              Setiap keputusan teknis dibuat untuk menjaga stabilitas produk hari ini, sekaligus membuka ruang pertumbuhan kapasitas sistem di tahap berikutnya.
            </p>
          </div>

          <div class="lg:col-span-7 flex flex-col">
            <div
              v-for="(item, index) in values"
              :key="item.title"
              class="group p-5 sm:p-8 md:p-10 flex flex-col sm:flex-row gap-6 items-start transition-all duration-300 hover:bg-white dark:hover:bg-gray-900"
              :class="index !== 0 ? 'border-t border-gray-200 dark:border-gray-800' : ''"
            >
              <div
                class="w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center border border-gray-200 dark:border-gray-700/80 transition-colors duration-300"
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
    </div>

    <div class="border-t border-gray-200 dark:border-gray-800 w-full"></div>
  </section>
</template>