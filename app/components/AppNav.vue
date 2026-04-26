<script setup lang="ts">
const items = [
    { label: 'Home', href: '/' },
    { label: 'Service', href: '/#service' },
    { label: 'Contact', href: '/#contact' },
    { label: 'Blog', to: '/blog' },
];
</script>

<template>
    <UHeader>
        <template #title href="/">Yudev</template>
        
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