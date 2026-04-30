<script setup lang="ts">
export interface BreadcrumbItem {
  name: string
  url: string
  active?: boolean
}

defineProps<{
  items: BreadcrumbItem[]
}>()
</script>

<template>
  <nav aria-label="Breadcrumb" class="flex mb-4">
    <ol class="flex items-center space-x-2 text-sm">
      <li v-for="(item, index) in items" :key="item.url" class="flex items-center">
        <!-- Separator -->
        <svg
          v-if="index > 0"
          class="w-4 h-4 text-gray-400 mx-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
        
        <!-- Item -->
        <NuxtLink
          v-if="!item.active"
          :to="item.url"
          class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors"
        >
          {{ item.name }}
        </NuxtLink>
        <span v-else class="text-gray-900 dark:text-white font-medium" aria-current="page">
          {{ item.name }}
        </span>
      </li>
    </ol>
  </nav>
</template>
