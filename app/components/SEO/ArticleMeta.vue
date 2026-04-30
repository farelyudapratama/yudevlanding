<script setup lang="ts">
export interface ArticleMeta {
  date: string
  readingTime?: string
  author?: string
  category?: string
  tags?: string[]
}

defineProps<{
  meta: ArticleMeta
}>()

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<template>
  <div class="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
    <!-- Date -->
    <div v-if="meta.date" class="flex items-center gap-1.5">
      <Icon name="i-heroicons-calendar" class="w-4 h-4" />
      <time :datetime="meta.date">{{ formatDate(meta.date) }}</time>
    </div>
    
    <!-- Reading Time -->
    <div v-if="meta.readingTime" class="flex items-center gap-1.5">
      <Icon name="i-heroicons-clock" class="w-4 h-4" />
      <span>{{ meta.readingTime }}</span>
    </div>
    
    <!-- Author -->
    <div v-if="meta.author" class="flex items-center gap-1.5">
      <Icon name="i-heroicons-user" class="w-4 h-4" />
      <span>{{ meta.author }}</span>
    </div>
    
    <!-- Category -->
    <div v-if="meta.category" class="flex items-center gap-1.5">
      <Icon name="i-heroicons-tag" class="w-4 h-4" />
      <span class="capitalize">{{ meta.category }}</span>
    </div>
  </div>
  
  <!-- Tags -->
  <div v-if="meta.tags && meta.tags.length > 0" class="flex flex-wrap gap-2 mt-4">
    <span
      v-for="tag in meta.tags"
      :key="tag"
      class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
    >
      #{{ tag }}
    </span>
  </div>
</template>
