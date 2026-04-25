<script setup lang="ts">
const faqItems = [
  {
    label: 'Bagaimana sistem pembayarannya?',
    content: 'Pembayaran dibagi menjadi 2 termin untuk keamanan bersama. DP (Down Payment) sebesar 50% dibayarkan sebelum proyek dimulai, dan pelunasan 50% dilakukan setelah proyek selesai dan disetujui sebelum serah terima aset atau peluncuran.'
  },
  {
    label: 'Saya sudah punya domain dan hosting sendiri, apakah harganya bisa dipotong?',
    content: 'Bisa. Jika Anda sudah memiliki domain dan server/hosting sendiri, biaya paket akan disesuaikan (dikurangi). Saya akan membantu men-deploy (mengunggah) sistem ke server yang Anda miliki.'
  },
  {
    label: 'Apakah source code (kode sumber) akan menjadi milik saya sepenuhnya?',
    content: 'Ya, untuk proyek kustom (Web System & AI), Anda akan mendapatkan akses penuh ke source code setelah pelunasan selesai. Sistem tersebut 100% menjadi aset digital milik perusahaan Anda.'
  },
  {
    label: 'Bagaimana jika saya butuh fitur yang tidak ada di paket harga?',
    content: 'Paket harga di atas adalah baseline (garis besar). Saya sangat fleksibel. Kita bisa berdiskusi untuk menambah atau mengurangi fitur, dan saya akan membuatkan penawaran harga (quotation) kustom yang sesuai dengan kebutuhan persis bisnis Anda. Silahkan hubungi saya melalui kontak yang tersedia untuk konsultasi gratis.'
  }
]
</script>

<template>
  <section class="py-24 transition-colors duration-300">
    <UContainer class="w-full max-w-4xl">
      
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
          Pertanyaan yang Sering Diajukan
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 transition-colors">
          Punya keraguan sebelum memulai? Temukan jawabannya di sini.
        </p>
      </div>

      <div class="bg-gray-50 dark:bg-[#131E3A]/30 p-2 md:p-6 rounded-3xl border border-gray-100 dark:border-white/5 transition-colors duration-300">
        <UAccordion 
          :items="faqItems" 
          size="xl"
          color="gray"
          variant="ghost"
          class="w-full"
          :ui="{
            item: { padding: 'pt-2 pb-6 px-4', color: 'text-gray-600 dark:text-gray-400' },
            default: { class: 'mb-2 font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-xl transition-colors' }
          }"
        >
          <template #item="{ item }">
            <p class="text-[15px] leading-relaxed text-gray-600 dark:text-gray-400">
              {{ item.content }}
            </p>
          </template>
        </UAccordion>
      </div>

    </UContainer>
  </section>
</template>