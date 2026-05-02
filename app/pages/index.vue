<script setup lang="ts">
const homepageFaqs = [
    {
        question: 'Bagaimana sistem pembayarannya?',
        answer: 'Pembayaran dibagi dalam dua tahap: DP 50% untuk memulai pengerjaan dan pelunasan 50% setelah hasil akhir ditinjau serta disetujui sebelum serah terima aset.',
    },
    {
        question: 'Saya sudah punya domain dan hosting sendiri, apakah harganya bisa dipotong?',
        answer: 'Bisa. Jika infrastruktur sudah tersedia, biaya paket akan disesuaikan secara proporsional dan proses deployment tetap dibantu sampai sistem berjalan optimal.',
    },
    {
        question: 'Apakah source code akan menjadi milik saya sepenuhnya?',
        answer: 'Ya. Setelah pelunasan, seluruh akses source code diberikan penuh dan kepemilikan sistem menjadi aset digital bisnis Anda.',
    },
    {
        question: 'Bagaimana jika saya butuh fitur yang tidak ada di paket harga?',
        answer: 'Cakupan fitur bisa disesuaikan. Kami akan menyiapkan penawaran kustom yang transparan berdasarkan prioritas dan skala kebutuhan bisnis Anda.',
    },
]

useDynamicHead({
    title: 'Jasa Pembuatan Website & Sistem Bisnis - Yudev',
    description: 'Yudev menyediakan jasa pembuatan website, landing page, web system, aplikasi Android, integrasi AI, dan otomasi bisnis untuk UMKM serta perusahaan di Indonesia.',
    url: '/',
    type: 'website',
    keywords: [
        'jasa pembuatan website',
        'jasa landing page',
        'jasa website bisnis',
        'jasa web system',
        'jasa pembuatan aplikasi android',
        'digitalisasi bisnis',
        'sistem terintegrasi',
        'otomasi bisnis',
        'AI integration',
        'system integration indonesia',
        'developer website indonesia',
        'yudev'
    ],
    breadcrumbs: [
        { name: 'Beranda', url: '/' }
    ],
    faqs: homepageFaqs
})
</script>

<template>
    <UPage>
        <section id="home">
            <LandingHero />
        </section>
        <section id="project">
            <LandingProject />
        </section>
        <section id="service">
            <LandingService />
        </section>
        <section id="about">
            <LandingAbout />
        </section>
        <section id="contact">
            <LandingCta />
        </section>
        <section id="faq">
            <LandingFqa />
        </section>
    </UPage>
</template>
