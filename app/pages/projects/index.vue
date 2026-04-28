<script setup lang="ts">
import { projectCta, projects } from '~/data/projects'

useSeoMeta({
  title: 'Projects — YuDev',
  description: 'Kumpulan proyek digital, studi kasus, dan implementasi yang sudah dikerjakan.'
})
</script>

<template>
  <main class="min-h-screen overflow-hidden text-gray-900 dark:text-white transition-colors duration-300">
    <div class="border-t border-gray-200 dark:border-gray-800 w-full h-20 relative overflow-hidden">
      <div class="absolute top-1/2 left-1/4 w-96 h-96 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
    </div>

    <div class="border-t border-gray-200 dark:border-gray-800 w-full relative z-10">
      <UContainer>
        <div class="border-x border-gray-200 dark:border-gray-800 px-5 py-10 sm:px-8 md:px-12 md:py-16 bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm">
          <UBadge variant="subtle" color="primary" size="lg" class="w-fit mb-6 flex items-center gap-2 rounded-full px-4 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <span class="font-bold">Showcase Projects</span>
          </UBadge>

          <h1 class="max-w-3xl text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
            Daftar proyek yang dibangun untuk <span class="text-transparent bg-clip-text bg-linear-to-r from-primary-600 to-emerald-500 dark:from-primary-400 dark:to-emerald-400">berbagai kebutuhan</span>.
          </h1>
          <p class="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-200/80">
            Kumpulan implementasi teknis dan studi kasus. Saya fokus pada pembuatan sistem yang menjawab masalah spesifik, mulai dari struktur data hingga pengalaman pengguna.
          </p>
        </div>
      </UContainer>
    </div>

    <div class="border-t border-gray-200 dark:border-gray-800 w-full relative z-10">
      <UContainer>
        <div class="border-x border-gray-200 dark:border-gray-800 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm ">
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-0 overflow-hidden border border-gray-200 dark:border-gray-700/70 bg-white/75 dark:bg-gray-900/65">
            <NuxtLink
              v-for="project in projects"
              :key="project.slug"
              :to="`/projects/${project.slug}`"
              class="group relative flex flex-col border border-gray-200 dark:border-gray-700/70 md:border-b-0 md:odd:border-r bg-white/80 dark:bg-gray-900/70 hover:bg-white dark:hover:bg-gray-900 transition-all duration-500 overflow-hidden"
            >
              <div class="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-black/5 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div class="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" :class="project.accent"></div>

              <div class="p-5 sm:p-6 md:p-7 flex-1 flex flex-col relative z-10">
                <div class="relative mb-5 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 aspect-16/10">
                  <img :src="project.cover" :alt="project.name" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>

                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="inline-flex items-center justify-center text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 px-3 py-1.5 rounded-full border border-gray-200 dark:border-white/10">
                    {{ project.category }}
                  </span>
                  <span class="inline-flex items-center justify-center text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 px-3 py-1.5 rounded-full border border-gray-200 dark:border-white/10">
                    {{ project.year }}
                  </span>
                </div>

                <h2 class="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {{ project.name }}
                </h2>
                <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                  {{ project.summary }}
                </p>

                <div class="mt-auto flex items-center justify-between gap-3 pt-5 border-t border-gray-100 dark:border-gray-800/70">
                  <span class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
                    Buka detail
                  </span>
                  <span class="inline-flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-200 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300">
                    Lihat Proyek
                    <Icon name="i-heroicons-arrow-right" class="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </span>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </UContainer>
    </div>

    <div class="border-t border-gray-200 dark:border-gray-800 w-full relative z-10">
      <UContainer>
        <div class="border-x border-gray-200 dark:border-gray-800 px-5 py-8 sm:px-8 sm:py-10 md:px-12 bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm">
          <div class="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700/70 bg-linear-to-r from-white/80 via-gray-50/70 to-white/75 dark:from-gray-900/80 dark:via-gray-900/70 dark:to-gray-900/75 px-5 py-6 sm:px-8 sm:py-8 md:px-10">
            <div class="pointer-events-none absolute -top-16 -right-10 h-36 w-36 rounded-full bg-primary-500/10 blur-2xl"></div>
            <div class="pointer-events-none absolute -bottom-16 -left-8 h-32 w-32 rounded-full bg-sky-500/10 blur-2xl"></div>

            <div class="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div class="max-w-xl">
                <h3 class="text-xl sm:text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-2">
                  {{ projectCta.headline }}
                </h3>
                <p class="text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-200/80">
                  {{ projectCta.description }}
                </p>
              </div>

              <div class="self-start sm:self-auto shrink-0">
                <UButton
                  size="lg"
                  color="primary"
                  icon="i-heroicons-chat-bubble-left-right"
                  class="rounded-xl px-6 py-3 font-bold tracking-wide whitespace-nowrap shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  {{ projectCta.buttonLabel }}
                </UButton>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </div>

    <div class="border-t border-gray-200 dark:border-gray-800 w-full"></div>
  </main>
</template>
