<script setup lang="ts">
const items = [
    { label: 'Home', href: '/' },
    { label: 'Service', href: '/#service' },
    { label: 'Contact', href: '/#contact' },
    { label: 'Blog', to: '/blog' },
];
</script>

<template>
    <UHeader class="border-b border-gray-200 dark:border-gray-800">
        <template #title href="/">
            <NuxtLink to="/" class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center">
                    <span class="text-white text-lg leading-none font-bold">Y</span>
                </div>
                <span class="font-black text-gray-900 dark:text-white">Yudev</span>
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