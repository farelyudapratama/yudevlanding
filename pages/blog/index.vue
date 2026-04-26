<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-list', () => {
  return queryCollection('blog')
    .order('date', 'DESC')
    .all()
})

useSeoMeta({
  title: 'Blog & Insight',
  description: 'Tulisan seputar web development, arsitektur backend, dan teknologi terbaru.'
})
</script>

<template>
  <main class="min-h-screen bg-[#0B132A] py-32 px-6">
    <UContainer>
      <div class="mb-16 text-center">
        <h1 class="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
          Latest <span class="text-primary">Insights</span>
        </h1>
        <p class="text-xl text-gray-400">
          Eksplorasi teknologi, tutorial, dan pengalaman membangun produk digital.
        </p>
      </div>

      <UBlogPosts v-if="posts && posts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <UBlogPost
          v-for="post in posts"
          :key="post.path"
          :to="post.path"
          :title="post.title"
          :description="post.description"
          :image="post.cover"
          :date="post.date"
          variant="subtle"
          class="bg-gray-900/50 border border-gray-800 hover:border-gray-600 transition-colors rounded-2xl overflow-hidden"
          :ui="{
            image: 'aspect-video object-cover',
            title: 'text-white font-bold text-xl mb-2',
            description: 'text-gray-400 line-clamp-3'
          }"
        />
        
      </UBlogPosts>

      <div v-else class="text-center py-20 text-gray-500">
        Belum ada artikel yang dipublikasikan.
      </div>

    </UContainer>
  </main>
</template>