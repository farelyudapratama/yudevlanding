<script setup lang="ts">
import { ref, computed } from "vue";

// Tab categories
const categories = ["Landing Page", "Web System"] as const;
type Category = (typeof categories)[number];

type PricingPackage = {
  name: string;
  target: string;
  price: string;
  unit: string;
  period: string;
  description: string;
  features: string[];
  isPopular: boolean;
};

const activeTab = ref<Category>(categories[0]);

// Struktur Data Terpusat (Berdasarkan Tab)
const pricingData: Record<Category, PricingPackage[]> = {
  "Landing Page": [
    {
      name: "Starter",
      target: "Validasi Ide & Kampanye Singkat",
      price: "1.5",
      unit: "jt",
      period: "/ project",
      description:
        "Fondasi digital yang kuat untuk meluncurkan produk atau layanan Anda dengan cepat dan profesional.",
      features: [
        "Single Page Application (SPA)",
        "Maksimal 6 Section Inti",
        "100% Mobile Responsive",
        "Integrasi Tombol WhatsApp",
        "Cloud Hosting & Domain (.com) 6 Bulan",
        "Revisi Sepuasnya (Selama Sebelum Hosting Aktif)",
      ],
      isPopular: false,
    },
    {
      name: "Growth",
      target: "Fokus Akuisisi Leads & Konversi",
      price: "3",
      unit: "jt",
      period: "/ project",
      description:
        "Landing page yang dirancang untuk memaksimalkan konversi dengan elemen interaktif dan optimasi performa untuk kampanye pemasaran yang lebih efektif.",
      features: [
        "Multi-Page System",
        "Desain UI/UX Interaktif (Animasi Scroll)",
        "Integrasi Email Bisnis & SSL",
        "Cloud Hosting 1 Tahun",
        "Revisi Sepuasnya (Selama Sebelum Hosting Aktif)",
      ],
      isPopular: true,
    },
    {
      name: "Custom",
      target: "Kebutuhan Arsitektur Khusus",
      price: "Custom",
      unit: "",
      period: "by discussion",
      description:
        "Pengembangan platform landing page kustom dengan integrasi API pihak ketiga atau arsitektur database spesifik.",
      features: [
        "Konsultasi Arsitektur Sistem",
        "Integrasi API (Payment/CRM/Analytics)",
        "SLA Support Kustom",
      ],
      isPopular: false,
    },
  ],
  "Web System": [
    {
      name: "System Standard",
      target: "Operasional Bisnis Skala Kecil",
      price: "4.5",
      unit: "jt",
      period: "/ project",
      description:
        "Digitalisasi alur kerja dasar dengan sistem manajemen konten (CMS) yang aman dan terpusat.",
      features: [
        "Dashboard Admin Fundamental",
        "Manajemen Konten (Blog/Portofolio)",
        "Sistem Manajemen Pengguna Dasar",
        "Database Setup & Konfigurasi",
        "Hosting Standar 1 Tahun",
      ],
      isPopular: false,
    },
    {
      name: "System Expert",
      target: "Digitalisasi Proses Bisnis Menengah",
      price: "15",
      unit: "jt",
      period: "/ project",
      description:
        "Arsitektur backend kustom (Express.js/Laravel) untuk menangani logika bisnis kompleks dan integrasi data.",
      features: [
        "Arsitektur Database Terukur (Scalable)",
        "Dashboard Analitik & Pelaporan",
        "Integrasi Layanan Pihak Ketiga (API)",
        "Optimasi Keamanan Server Dasar",
        "Dokumentasi API Terstruktur",
        "Maintenance Support 3 Bulan",
      ],
      isPopular: true,
    },
    {
      name: "Enterprise Custom",
      target: "Solusi Skala Penuh & Integrasi AI",
      price: "Custom",
      unit: "",
      period: "by discussion",
      description:
        "Sistem web yang sepenuhnya disesuaikan dengan kebutuhan bisnis Anda.",
      features: [
        "Disesuaikan berdasarkan kebutuhan spesifik Anda",
      ],
      isPopular: false,
    },
  ],
};

const currentPackages = computed(() => pricingData[activeTab.value]);
</script>

<template>
  <div
    v-reveal="{ distance: 24, duration: 0.72 }"
    class="relative min-h-screen text-gray-900 dark:text-white transition-colors duration-300 overflow-hidden"
  >
    <div
      class="border-t border-gray-200 dark:border-gray-800 w-full"
    ></div>

    <div
      class="border-t border-gray-200 dark:border-gray-800 w-full relative z-10"
    >
      <UContainer>
        <div
          v-reveal="{ distance: 16, duration: 0.68, delay: 0.05 }"
          class="border-x border-gray-200 dark:border-gray-800 p-8 md:p-12 flex flex-col items-center text-center relative bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm"
        >
          <UBadge variant="subtle" color="primary" size="lg" class="w-fit mb-6 flex items-center gap-2 rounded-full px-4 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <span class="font-bold">Layanan & Harga</span>
          </UBadge>

          <h2
            class="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-gray-900 dark:text-white"
          >
            Pilih Solusi Sesuai Skala Bisnis Anda
          </h2>
          <p
            class="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl leading-relaxed"
          >
            Harga transparan, tanpa biaya tersembunyi. Mulai dari landing page
            sederhana hingga sistem terintegrasi AI.
          </p>

          <div
            v-reveal="{ origin: 'top', distance: 12, duration: 0.55, delay: 0.12 }"
            class="inline-flex p-1.5 bg-gray-100 dark:bg-white/5 rounded-2xl backdrop-blur-md border border-gray-200 dark:border-white/10 transition-all shadow-sm"
          >
            <button
              v-for="tab in categories"
              :key="tab"
              @click="activeTab = tab"
              class="relative px-8 py-3 rounded-xl text-sm font-bold tracking-wide transition-all duration-500 overflow-hidden"
              :class="
                activeTab === tab
                  ? 'text-gray-900 dark:text-white'
                  : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
              "
            >
              <div
                v-if="activeTab === tab"
                class="absolute inset-0 bg-white dark:bg-white/10 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.05)] dark:shadow-[0_0_15px_rgba(255,255,255,0.05)] pointer-events-none border border-gray-200 dark:border-white/10"
              ></div>
              <span class="relative z-10">{{ tab }}</span>
            </button>
          </div>
        </div>
      </UContainer>
    </div>

    <div
      class="border-t border-gray-200 dark:border-gray-800 w-full relative z-10"
    >
      <UContainer>
        <TransitionGroup
          tag="div"
          name="fade"
          class="grid grid-cols-1 lg:grid-cols-3 border-x border-gray-200 dark:border-gray-800 relative bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm"
        >
          <div
            v-for="(pkg, index) in currentPackages"
            :key="pkg.name + activeTab"
            v-reveal="{ distance: 20, duration: 0.64, delay: index * 0.08 + 0.1 }"
            class="group relative flex flex-col p-8 md:p-10 transition-all duration-500 overflow-hidden"
            :class="[
              'border-b border-gray-200 dark:border-gray-800 lg:border-b-0 hover:z-20',
              index !== currentPackages.length - 1 ? 'lg:border-r' : '',
              pkg.isPopular
                ? 'bg-white/80 dark:bg-white/3'
                : 'hover:bg-white dark:hover:bg-gray-900',
              'hover:shadow-[0_0_40px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.02)]',
            ]"
          >
            <div
              class="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-black/5 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            ></div>

            <div
              class="absolute -top-32 -right-32 w-64 h-64 rounded-full blur-[80px] pointer-events-none transition-all duration-700"
              :class="
                pkg.isPopular
                  ? 'bg-primary-500/20 opacity-100'
                  : 'bg-primary-500/10 opacity-0 group-hover:opacity-100'
              "
            ></div>

            <div class="min-h-8 mb-6 relative z-10">
              <span
                v-if="pkg.isPopular"
                class="inline-flex items-center justify-center bg-primary-500 text-white shadow-lg shadow-slate-500/25 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] relative top-0 group-hover:-translate-y-0.5 transition-transform duration-300"
              >
                Disarankan
              </span>
            </div>

            <div class="mb-8 relative z-10">
              <h3
                class="text-3xl font-extrabold mb-3 text-gray-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300"
              >
                {{ pkg.name }}
              </h3>
              <p
                class="text-sm text-gray-500 dark:text-gray-400 min-h-10 leading-relaxed group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300"
              >
                {{ pkg.target }}
              </p>
            </div>

            <div class="mb-8 flex items-baseline gap-1 relative z-10">
              <span
                v-if="pkg.price !== 'Custom'"
                class="text-gray-500 dark:text-gray-400 font-bold text-xl"
                >Rp</span
              >
              <span
                class="text-5xl lg:text-6xl font-black tracking-tighter"
                :class="pkg.price === 'Custom' ? 'text-4xl lg:text-5xl' : ''"
                >{{ pkg.price }}</span
              >
              <span
                v-if="pkg.unit"
                class="text-2xl font-bold text-gray-700 dark:text-gray-300"
                >{{ pkg.unit }}</span
              >
              <span
                class="text-gray-500 dark:text-gray-400 ml-2 font-medium tracking-wide"
                >{{ pkg.period }}</span
              >
            </div>

            <p
              class="text-sm text-gray-600 dark:text-gray-300 mb-8 pb-8 border-b border-gray-200 dark:border-gray-800 relative z-10 leading-relaxed group-hover:border-gray-300 dark:group-hover:border-gray-700 transition-colors duration-300"
            >
              {{ pkg.description }}
            </p>

            <ul class="flex-1 space-y-5 mb-10 relative z-10">
              <li
                v-for="feature in pkg.features"
                :key="feature"
                class="flex items-start gap-3 group/item"
              >
                <div
                  class="mt-0.5 relative flex items-center justify-center w-5 h-5 rounded-full bg-primary-500/10 dark:bg-primary-500/20 group-hover/item:scale-110 group-hover/item:bg-primary-500/20 dark:group-hover/item:bg-primary-500/30 transition-all duration-300"
                >
                  <Icon
                    name="i-heroicons-check"
                    class="text-primary-500 dark:text-primary-500 w-4 h-4"
                  />
                </div>
                <span
                  class="text-sm text-gray-700 dark:text-gray-300 group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-300 leading-snug"
                  >{{ feature }}</span
                >
              </li>
            </ul>

            <UButton
              block
              size="lg"
              :variant="pkg.isPopular ? 'solid' : 'ghost'"
              icon="i-logos-whatsapp-icon"
              class="font-bold tracking-wide justify-center transition-all duration-300 rounded-xl relative z-10 group/btn overflow-hidden py-3"
              :class="
                !pkg.isPopular
                  ? 'hover:bg-gray-100 dark:hover:bg-white/10 ring-1 ring-inset ring-gray-200 dark:ring-gray-700 hover:ring-gray-300 dark:hover:ring-gray-600'
                  : 'shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-1'
              "
            >
              Diskusi Paket Ini
            </UButton>
          </div>
        </TransitionGroup>

        <div v-reveal="{ distance: 14, duration: 0.6, delay: 0.08 }" class="border-x border-t border-gray-200 dark:border-gray-800 px-6 py-6 md:px-8 md:py-7 bg-white/40 dark:bg-gray-900/35 backdrop-blur-sm">
          <div class="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700/70 bg-linear-to-r from-white/80 via-gray-50/70 to-white/75 dark:from-gray-900/80 dark:via-gray-900/70 dark:to-gray-900/75 px-5 py-5 md:px-6 md:py-6">
            <div class="pointer-events-none absolute -top-16 -right-10 h-36 w-36 rounded-full bg-primary-500/10 blur-2xl"></div>
            <div class="pointer-events-none absolute -bottom-16 -left-8 h-32 w-32 rounded-full bg-sky-500/10 blur-2xl"></div>

            <div class="relative z-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div class="max-w-3xl">
                <h3 class="text-xl md:text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-2">
                  Skala Proyek atau Anggaran Berbeda?
                </h3>
                <p class="text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-300">
                  Kami sangat mendukung pertumbuhan bisnis lokal. Jangan ragu untuk berdiskusi dengan tim kami guna menyesuaikan cakupan fitur agar pengembangan sistem dapat berjalan optimal sesuai dengan anggaran yang Anda miliki saat ini.
                </p>
              </div>

              <UButton
                size="lg"
                color="primary"
                class="self-start md:self-auto rounded-xl px-5 py-3 font-bold tracking-wide whitespace-nowrap"
              >
                Konsultasi Penyesuaian Anggaran
              </UButton>
            </div>
          </div>
        </div>
      </UContainer>
    </div>

    <div
      class="border-t border-gray-200 dark:border-gray-800 w-full"
    ></div>
  </div>
</template>

<style scoped>
/* Transisi disesuaikan agar tidak merusak border grid saat fade in/out */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  display: none;
}
</style>
