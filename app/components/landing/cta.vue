<script setup lang="ts">
const { openWhatsApp, openEmail } = useContactLinks()

const handleWhatsApp = () => {
  openWhatsApp('Halo, saya ingin berdiskusi tentang proyek digital.')
}

const handleEmail = () => {
  openEmail('Pertanyaan Tentang Proyek Digital')
}
</script>

<template>
  <section v-reveal="{ distance: 22, duration: 0.7 }" class="transition-colors duration-300">
    <div class="border-t border-gray-200 dark:border-gray-800 w-full"></div>

    <div class="border-t border-gray-200 dark:border-gray-800 w-full relative z-10">
      <UContainer>
        <div v-reveal="{ distance: 18, duration: 0.66, delay: 0.05 }" class="border-x border-gray-200 dark:border-gray-800 px-5 py-8 sm:px-6 md:p-12 bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm">
          <div class="max-w-3xl">
            <UBadge variant="subtle" color="primary" size="lg" class="w-fit mb-6 flex items-center gap-2 rounded-full px-4 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
              <span class="font-bold">Diskusi Proyek</span>
            </UBadge>

            <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-5 leading-tight">
              Saatnya Menyusun Langkah Digital Berikutnya.
            </h2>

            <p class="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
              Ceritakan konteks bisnis Anda, lalu kami petakan prioritas fitur yang paling relevan. Jika ada batasan waktu atau anggaran, kami bahas secara terbuka sejak awal agar keputusan tetap realistis.
            </p>
          </div>
        </div>
      </UContainer>
    </div>

    <div class="border-t border-gray-200 dark:border-gray-800 w-full relative z-10">
      <UContainer>
        <div v-reveal="{ distance: 14, duration: 0.62, delay: 0.1 }" class="border-x border-gray-200 dark:border-gray-800 px-5 py-6 sm:px-6 md:p-10 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
          <div class="rounded-2xl border border-gray-200 dark:border-gray-700/70 bg-linear-to-r from-white/80 via-gray-50/70 to-white/80 dark:from-gray-900/80 dark:via-gray-900/70 dark:to-gray-900/80 p-5 sm:p-6 md:p-7">
            <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-5">
              <div>
                <p class="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                  Konsultasi awal tanpa tekanan. Fokus kami adalah merancang scope kerja yang masuk akal dan benar-benar bisa dieksekusi.
                </p>
                <p class="mt-3 text-xs font-semibold tracking-[0.14em] uppercase text-gray-500 dark:text-gray-400">
                  Respons cepat di jam kerja
                </p>
              </div>

              <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <UButton
                  v-reveal="{ origin: 'left', distance: 10, duration: 0.5, delay: 0.12 }"
                  size="lg"
                  color="primary"
                  class="px-6 font-bold justify-center cursor-pointer"
                  @click="handleWhatsApp"
                >
                  <template #leading>
                    <Icon name="i-logos-whatsapp-icon" class="w-5 h-5" />
                  </template>
                  Mulai Diskusi via WA
                </UButton>

                <UButton
                  v-reveal="{ origin: 'right', distance: 10, duration: 0.5, delay: 0.16 }"
                  size="lg"
                  variant="ghost"
                  icon="i-heroicons-envelope"
                  class="px-6 font-bold justify-center ring-1 ring-inset ring-gray-200 dark:ring-gray-700 hover:bg-gray-100 dark:hover:bg-white/10 cursor-pointer"
                  @click="handleEmail"
                >
                  Kirim Email
                </UButton>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </div>

    <div class="border-t border-gray-200 dark:border-gray-800 w-full"></div>
  </section>
</template>