<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { getProjectBySlug, projectCta, projects } from '~/data/projects'

const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))
const project = computed(() => getProjectBySlug(slug.value))

if (!project.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Project not found',
    })
}

const relatedProjects = computed(() => {
    return projects.filter(item => item.slug !== project.value?.slug).slice(0, 3)
})

const zoomedImage = ref<string | null>(null)

function openImageZoom(image: string) {
    zoomedImage.value = image
}

function closeImageZoom() {
    zoomedImage.value = null
}

function handleEsc(event: KeyboardEvent) {
    if (event.key === 'Escape') {
        closeImageZoom()
    }
}

onMounted(() => {
    window.addEventListener('keydown', handleEsc)
})

onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleEsc)
})

useSeoMeta({
    title: () => `${project.value?.name ?? 'Project'} — YuDev`,
    description: () => project.value?.summary ?? 'Detail proyek digital.'
})
</script>

<template>
    <main class="min-h-screen overflow-hidden text-gray-900 dark:text-white transition-colors duration-300">
        <div class="border-t border-gray-200 dark:border-gray-800 w-full h-20 relative overflow-hidden">
            <div
                class="absolute top-1/2 left-1/4 w-96 h-96 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none">
            </div>
        </div>

        <div v-if="project" class="border-t border-gray-200 dark:border-gray-800 w-full relative z-10">
            <UContainer>
                <div
                    class="border-x border-gray-200 dark:border-gray-800 px-5 py-10 sm:px-8 md:px-12 md:py-16 bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm">
                    <div class="max-w-4xl">
                        <UBadge variant="subtle" color="primary" size="lg"
                            class="w-fit mb-6 flex items-center gap-2 rounded-full px-4 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                            <span class="font-bold">Project Detail</span>
                        </UBadge>

                        <h1
                            class="max-w-3xl text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
                            {{ project.name }}
                        </h1>
                        <p
                            class="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-200/80">
                            {{ project.description }}
                        </p>
                    </div>
                </div>
            </UContainer>
        </div>

        <div v-if="project" class="border-t border-gray-200 dark:border-gray-800 w-full relative z-10">
            <UContainer>
                <div
                    class="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden border border-gray-200 dark:border-gray-700/70 bg-white/75 dark:bg-gray-900/65">
                    <div class="lg:col-span-7 p-4 sm:p-6 md:p-8">
                        <button type="button"
                            class="group relative block w-full overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 aspect-16/10"
                            @click="openImageZoom(project.cover)">
                            <img :src="project.cover" :alt="project.name"
                                class="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                            <span
                                class="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full border border-white/30 bg-black/45 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                                <Icon name="i-heroicons-magnifying-glass-plus" class="h-4 w-4" />
                                Zoom
                            </span>
                        </button>
                    </div>

                    <div
                        class="lg:col-span-5 md:border-l border-gray-200 dark:border-gray-800 p-5 sm:p-6 md:p-8 flex flex-col gap-6">
                        <div>
                            <p
                                class="text-xs font-bold uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400 mb-2">
                                {{ project.category }}
                            </p>
                            <h2
                                class="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-3">
                                Ringkasan Proyek
                            </h2>
                            <p class="text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-300">
                                {{ project.summary }}
                            </p>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div v-for="metric in project.metrics" :key="metric.label"
                                class="rounded-2xl border border-gray-200 dark:border-gray-700/70 bg-white/70 dark:bg-white/5 p-4">
                                <p
                                    class="text-[10px] uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 font-bold mb-2">
                                    {{ metric.label }}</p>
                                <p class="text-sm font-semibold text-gray-900 dark:text-white">{{ metric.value }}</p>
                            </div>
                        </div>

                        <div class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                            <p><span class="font-semibold text-gray-900 dark:text-white">Tahun:</span> {{ project.year
                            }}</p>
                            <p><span class="font-semibold text-gray-900 dark:text-white">Status:</span> {{
                                project.status }}</p>
                            <p><span class="font-semibold text-gray-900 dark:text-white">Peran:</span> {{ project.role
                            }}</p>
                        </div>
                    </div>
                </div>
            </UContainer>
        </div>

        <div v-if="project" class="border-t border-gray-200 dark:border-gray-800 w-full relative z-10">
            <UContainer>
                <div
                    class="border-x border-gray-200 dark:border-gray-800 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm px-4 py-4 sm:px-6 md:p-6">

                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div class="lg:col-span-7">
                            <h3 class="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white mb-4">
                                Apa yang dibangun
                            </h3>
                            <p
                                class="text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-300 mb-6 max-w-3xl">
                                {{ project.description }}
                            </p>

                            <ul class="space-y-4">
                                <li v-for="point in project.highlights" :key="point" class="flex items-start gap-3">
                                    <div
                                        class="mt-1 flex size-5 items-center justify-center rounded-full bg-primary-500/10 text-primary-500">
                                        <Icon name="i-heroicons-check" class="w-4 h-4" />
                                    </div>
                                    <span
                                        class="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">{{
                                            point }}</span>
                                </li>
                            </ul>
                        </div>

                        <div class="lg:col-span-5 ">
                            <h3 class="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white mb-4">
                                Teknologi
                            </h3>
                            <div class="flex flex-wrap gap-2 mb-8">
                                <span v-for="stack in project.techStack" :key="stack"
                                    class="inline-flex items-center justify-center text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 px-3 py-1.5 rounded-full border border-gray-200 dark:border-white/10">
                                    {{ stack }}
                                </span>
                            </div>

                            <h3 class="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white mb-4">
                                Galeri
                            </h3>
                            <div class="grid grid-cols-2 gap-3">
                                <button v-for="image in project.gallery" :key="image" type="button"
                                    class="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 aspect-4/3"
                                    @click="openImageZoom(image)">
                                    <img :src="image" :alt="project.name"
                                        class="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                                    <span
                                        class="absolute bottom-2 right-2 inline-flex items-center justify-center rounded-full border border-white/30 bg-black/45 p-1.5 text-white backdrop-blur-sm">
                                        <Icon name="i-heroicons-magnifying-glass-plus" class="h-4 w-4" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </UContainer>
        </div>

        <div v-if="relatedProjects.length > 0"
            class="border-t border-gray-200 dark:border-gray-800 w-full relative z-10">
            <UContainer>
                <div
                    class="border-x border-gray-200 dark:border-gray-800 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm px-4 py-4 sm:px-6 md:p-6">
                    <div class="mb-6">
                        <h3 class="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">Proyek Lainnya
                        </h3>
                        <p class="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">Beberapa proyek lain yang
                            bisa kamu buka setelah ini.</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <NuxtLink v-for="item in relatedProjects" :key="item.slug" :to="`/projects/${item.slug}`"
                            class="group rounded-2xl border border-gray-200 dark:border-gray-700/70 bg-white/75 dark:bg-gray-900/65 overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-gray-300 dark:hover:border-gray-600">
                            <div class="relative aspect-4/3 overflow-hidden bg-gray-100 dark:bg-gray-800">
                                <img :src="item.cover" :alt="item.name"
                                    class="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                            </div>
                            <div class="p-5">
                                <p
                                    class="text-[10px] uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400 font-bold">
                                    {{ item.category }}</p>
                                <h4
                                    class="mt-2 text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors">
                                    {{ item.name }}</h4>
                                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ item.summary }}</p>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </UContainer>
        </div>

        <div class="border-t border-gray-200 dark:border-gray-800 w-full relative z-10">
            <UContainer>
                <div
                    class="border-x border-gray-200 dark:border-gray-800 px-5 py-8 sm:px-8 sm:py-10 md:px-12 bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm">
                    <div
                        class="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700/70 bg-linear-to-r from-white/80 via-gray-50/70 to-white/75 dark:from-gray-900/80 dark:via-gray-900/70 dark:to-gray-900/75 px-5 py-6 sm:px-8 sm:py-8 md:px-10">
                        <div
                            class="pointer-events-none absolute -top-16 -right-10 h-36 w-36 rounded-full bg-primary-500/10 blur-2xl">
                        </div>
                        <div
                            class="pointer-events-none absolute -bottom-16 -left-8 h-32 w-32 rounded-full bg-sky-500/10 blur-2xl">
                        </div>

                        <div class="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                            <div class="max-w-xl">
                                <h3
                                    class="text-xl sm:text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-2">
                                    {{ projectCta.headline }}
                                </h3>
                                <p class="text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-200/80">
                                    {{ projectCta.description }}
                                </p>
                            </div>

                            <div class="self-start sm:self-auto shrink-0">
                                <UButton size="lg" color="primary" icon="i-heroicons-chat-bubble-left-right"
                                    class="rounded-xl px-6 py-3 font-bold tracking-wide whitespace-nowrap shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5 transition-all duration-300">
                                    {{ projectCta.buttonLabel }}
                                </UButton>
                            </div>
                        </div>
                    </div>
                </div>
            </UContainer>
        </div>

        <div class="border-t border-gray-200 dark:border-gray-800 w-full"></div>

        <Transition enter-active-class="transition-opacity duration-200" enter-from-class="opacity-0"
            enter-to-class="opacity-100" leave-active-class="transition-opacity duration-150"
            leave-from-class="opacity-100" leave-to-class="opacity-0">
            <div v-if="zoomedImage" class="fixed inset-0 z-80 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 md:p-8"
                @click.self="closeImageZoom">
                <div class="relative w-full max-w-3xl border-x border-gray-200 dark:border-gray-700/70 bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-2xl flex flex-col items-center justify-center p-0 md:p-6">
                    <button type="button"
                        class="absolute top-4 right-4 z-10 inline-flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 bg-black/40 p-2 text-white hover:bg-black/60 transition"
                        @click="closeImageZoom" aria-label="Tutup zoom gambar">
                        <Icon name="i-heroicons-x-mark" class="h-5 w-5" />
                    </button>
                    <img :src="zoomedImage" alt="Project zoom"
                        class="max-h-[70vh] w-full object-contain rounded-xl border border-gray-200 dark:border-gray-700/70 bg-white/80 dark:bg-gray-900/80 shadow-lg transition" />
                </div>
            </div>
        </Transition>
    </main>
</template>
