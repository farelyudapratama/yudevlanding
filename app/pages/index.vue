<script setup lang="ts">
useDynamicHead({
    title: 'Yudev - Digitalisasi Bisnis Otomatis & Terintegrasi',
    description: 'Membantu transformasi bisnis Anda melalui pengembangan website, aplikasi Android, dan sinkronisasi sistem yang terpadu di era digital.',
    url: '/',
    type: 'website',
    keywords: [
        'digitalisasi bisnis',
        'jasa pembuatan website',
        'pengembangan aplikasi android',
        'sistem terintegrasi',
        'otomasi bisnis'
    ]
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