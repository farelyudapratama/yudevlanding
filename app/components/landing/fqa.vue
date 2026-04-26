<script setup lang="ts">
const faqItems = [
  {
    label: "Bagaimana sistem pembayarannya?",
    content:
      "Pembayaran dibagi menjadi 2 termin untuk keamanan bersama. DP (Down Payment) sebesar 50% dibayarkan sebelum proyek dimulai, dan pelunasan 50% dilakukan setelah proyek selesai dan disetujui sebelum serah terima aset atau peluncuran.",
  },
  {
    label:
      "Saya sudah punya domain dan hosting sendiri, apakah harganya bisa dipotong?",
    content:
      "Bisa. Jika Anda sudah memiliki domain dan server/hosting sendiri, biaya paket akan disesuaikan (dikurangi). Saya akan membantu men-deploy (mengunggah) sistem ke server yang Anda miliki.",
  },
  {
    label:
      "Apakah source code (kode sumber) akan menjadi milik saya sepenuhnya?",
    content:
      "Ya, untuk proyek kustom (Web System & AI), Anda akan mendapatkan akses penuh ke source code setelah pelunasan selesai. Sistem tersebut 100% menjadi aset digital milik perusahaan Anda.",
  },
  {
    label: "Bagaimana jika saya butuh fitur yang tidak ada di paket harga?",
    content:
      "Paket harga di atas adalah baseline (garis besar). Saya sangat fleksibel. Kita bisa berdiskusi untuk menambah atau mengurangi fitur, dan saya akan membuatkan penawaran harga (quotation) kustom yang sesuai dengan kebutuhan persis bisnis Anda. Silahkan hubungi saya melalui kontak yang tersedia untuk konsultasi gratis.",
  },
];
</script>

<template>
  <section class="relative py-24 transition-colors duration-300 overflow-hidden">
    <!-- Decorative background glow -->
    <div class="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

    <UContainer class="w-full max-w-4xl relative z-10">
      <div class="text-center mb-16 relative">
        <h2
          class="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 transition-colors"
        >
          Pertanyaan yang Sering Diajukan
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 transition-colors">
          Punya keraguan sebelum memulai? Temukan jawabannya di sini.
        </p>
      </div>

      <div
        class="bg-white/40 dark:bg-gray-900/40 backdrop-blur-md p-4 md:p-8 rounded-[2rem] border border-gray-200 dark:border-white/10 transition-all duration-500 shadow-xl shadow-gray-200/50 dark:shadow-black/20 hover:shadow-2xl hover:shadow-primary-500/5"
      >
        <UAccordion
          :items="faqItems"
          size="xl"
          color="gray"
          variant="ghost"
          class="w-full"
          :ui="{
            wrapper: 'flex flex-col gap-4',
            item: 'leading-relaxed text-[15px] md:text-base pt-2 pb-6 px-6 text-gray-600 dark:text-gray-400',
            default: {
              class:
                'px-6 py-4 font-bold text-lg text-gray-900 dark:text-white bg-white/50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 rounded-2xl transition-all duration-300 text-left shadow-sm border border-transparent hover:border-gray-200 dark:hover:border-white/10',
            },
          }"
        />
      </div>
    </UContainer>
  </section>
</template>
