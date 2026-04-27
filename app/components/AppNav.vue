<script setup lang="ts">
const items = [
    { label: 'Beranda', href: '/' },
    { label: 'Portofolio', href: '/#project' },
    { label: 'Layanan', href: '/#service' },
    { label: 'Kontak', href: '/#contact' },
    { label: 'Blog', to: '/blog' },
];
</script>

<template>
    <UHeader v-reveal="{ origin: 'top', distance: 18, duration: 0.55 }" class="border-b border-gray-200 dark:border-gray-800">
        <template #title href="/">
            <NuxtLink to="/" class="flex items-center gap-2">
                <span class="font-black text-gray-900 dark:text-white text-3xl">Yudev <span class="text-primary-500">.</span></span>
            </NuxtLink>
        </template>
        
        <UNavigationMenu 
          :items="items"
          :ui="{
            link: 'before:hidden !text-gray-500 dark:!text-gray-400 hover:!text-gray-900 dark:hover:!text-white',
          }"
        />
        
        <template #right>
            <UColorModeButton />
        </template>
    </UHeader>
</template>