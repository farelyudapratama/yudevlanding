<script setup lang="ts">
const items = [
    { label: 'Beranda', to: '/' },
    { label: 'Portofolio', to: '/#project' },
    { label: 'Layanan', to: '/#service' },
    { label: 'Kontak', to: '/#contact' },
    { label: 'Blog', to: '/blog' },
];

const mobileMenuOpen = ref(false);

function toggleMobileMenu() {
    mobileMenuOpen.value = !mobileMenuOpen.value;
}

function closeMobileMenu() {
    mobileMenuOpen.value = false;
}
</script>

<template>
    <UHeader v-reveal="{ origin: 'top', distance: 18, duration: 0.55 }" class="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 backdrop-blur-md" :toggle="false">
        <template #title>
            <NuxtLink to="/" class="flex items-center gap-2" @click="closeMobileMenu">
                <span class="font-black text-gray-900 dark:text-white text-2xl sm:text-3xl">Yudev <span class="text-primary-500">.</span></span>
            </NuxtLink>
        </template>
        
        <!-- Desktop Navigation -->
        <UNavigationMenu 
          :items="items"
          :ui="{
            link: 'before:hidden !text-gray-500 dark:!text-gray-400 hover:!text-gray-900 dark:hover:!text-white',
          }"
          class="hidden md:flex"
        />
        
        <template #right>
            <!-- <UColorModeButton /> -->
            
            <!-- Mobile Menu Button -->
            <UButton
                color="primary"
                variant="ghost"
                class="md:hidden ml-2"
                @click="toggleMobileMenu"
                :aria-label="mobileMenuOpen ? 'Tutup menu' : 'Buka menu'"
            >
                <Icon :name="mobileMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'" class="w-6 h-6" />
            </UButton>
        </template>
    </UHeader>
    
    <!-- Mobile Menu Overlay -->
    <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
    >
        <div v-if="mobileMenuOpen" class="md:hidden fixed inset-x-0 top- z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-lg">
            <nav class="flex flex-col py-4 px-6 space-y-1">
                <NuxtLink
                    v-for="item in items"
                    :key="item.label"
                    :to="item.to"
                    @click="closeMobileMenu"
                    class="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                    {{ item.label }}
                </NuxtLink>
            </nav>
        </div>
    </Transition>
    
    <!-- Backdrop -->
    <div
        v-if="mobileMenuOpen"
        class="md:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
        @click="closeMobileMenu"
    />
</template>