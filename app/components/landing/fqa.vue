<script setup lang="ts">
import { ref } from 'vue';

const faqItems = [
  {
    label: "Bagaimana sistem pembayarannya?",
    content:
      "Pembayaran dibagi dalam dua tahap untuk menjaga keamanan dan kejelasan proyek: DP 50% sebagai tanda jadi untuk memulai pengerjaan, dan pelunasan 50% dilakukan setelah hasil akhir ditinjau serta disetujui sebelum serah terima aset.",
  },
  {
    label: "Saya sudah punya domain dan hosting sendiri, apakah harganya bisa dipotong?",
    content:
      "Tentu bisa. Jika infrastruktur sudah tersedia, biaya paket akan kami sesuaikan secara proporsional. Kami juga akan membantu seluruh proses deployment hingga sistem berjalan optimal di server Anda.",
  },
  {
    label: "Apakah source code (kode sumber) akan menjadi milik saya sepenuhnya?",
    content:
      "Ya. Setelah pelunasan, seluruh akses source code diberikan penuh kepada Anda. Kepemilikan sistem menjadi aset digital bisnis Anda tanpa biaya langganan tambahan kepada kami.",
  },
  {
    label: "Bagaimana jika saya butuh fitur yang tidak ada di paket harga?",
    content:
      "Daftar paket kami adalah acuan dasar. Kami sangat terbuka untuk kebutuhan khusus cakupan fitur dapat disesuaikan dan kami akan menyiapkan penawaran kustom yang transparan sesuai dengan skala prioritas bisnis Anda.",
  },
];

const activeFaq = ref<number | null>(0);

const toggleFaq = (index: number) => {
  activeFaq.value = activeFaq.value === index ? null : index;
};
</script>

<template>
  <section v-reveal="{ distance: 22, duration: 0.7 }" class="transition-colors duration-300 overflow-hidden">
    <div class="border-t border-gray-200 dark:border-gray-800 w-full"></div>

    <div class="border-t border-gray-200 dark:border-gray-800 w-full relative z-10">
      <UContainer class="w-full max-w-7xl">
        <div v-reveal="{ distance: 16, duration: 0.66, delay: 0.05 }" class="border-x border-gray-200 dark:border-gray-800 px-5 py-8 sm:px-6 md:p-12 bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm text-center">
          <div class="flex justify-center">
            <UBadge variant="subtle" color="primary" size="lg" class="w-fit mb-6 flex items-center gap-2 rounded-full px-4 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
              <span class="font-bold">FAQ</span>
            </UBadge>
          </div>

          <h2 class="text-4xl md:text-5xl font-extrabold mb-5 text-gray-900 dark:text-white transition-colors">
            Pertanyaan yang Sering Muncul
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 transition-colors max-w-2xl mx-auto leading-relaxed">
            Informasi inti sebelum memulai kerja sama, disampaikan singkat, jelas, dan transparan.
          </p>
        </div>
      </UContainer>
    </div>

    <div class="border-t border-gray-200 dark:border-gray-800 w-full relative z-10">
      <UContainer class="w-full max-w-7xl">
        <div class="border-x border-gray-200 dark:border-gray-800 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm px-4 py-4 sm:px-6 md:p-6">
          <div class="mx-auto w-full max-w-5xl overflow-hidden border border-gray-200 dark:border-gray-700/70 bg-white/75 dark:bg-gray-900/65 shadow-sm">
            <div
              v-for="(item, index) in faqItems"
              :key="item.label"
              v-reveal="{ distance: 12, duration: 0.55, delay: index * 0.06 + 0.08 }"
              class="border-b border-gray-200 dark:border-gray-700/70 last:border-b-0"
            >
              <button
                type="button"
                class="group flex w-full items-center justify-between gap-4 px-5 md:px-6 py-4 md:py-5 text-left transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                @click="toggleFaq(index)"
                :aria-expanded="activeFaq === index"
              >
                <span class="text-base md:text-lg font-bold text-gray-900 dark:text-white leading-snug">
                  {{ item.label }}
                </span>
                <Icon
                  name="i-heroicons-chevron-down"
                  class="w-5 h-5 shrink-0 text-gray-500 dark:text-gray-400 transition-transform duration-300"
                  :class="activeFaq === index ? 'rotate-180' : ''"
                />
              </button>

              <Transition
                enter-active-class="transition-[grid-template-rows,opacity] duration-350 ease-out"
                enter-from-class="grid-rows-[0fr] opacity-0"
                enter-to-class="grid-rows-[1fr] opacity-100"
                leave-active-class="transition-[grid-template-rows,opacity] duration-250 ease-in"
                leave-from-class="grid-rows-[1fr] opacity-100"
                leave-to-class="grid-rows-[0fr] opacity-0"
              >
                <div
                  v-if="activeFaq === index"
                  class="grid overflow-hidden px-5 md:px-6"
                >
                  <div class="min-h-0 overflow-hidden pb-5 text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    {{ item.content }}
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </UContainer>
    </div>

    <div class="border-t border-gray-200 dark:border-gray-800 w-full"></div>
  </section>
</template>
