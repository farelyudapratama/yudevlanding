<script setup lang="ts">
</script>

<template>
  <section class="py-24 pb-32 transition-colors duration-300">
    <UContainer class="w-full max-w-5xl">
      
      <div class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-gray-900 to-gray-800 dark:from-[#131E3A] dark:to-[#0A101D] border border-gray-800 dark:border-white/10 shadow-2xl p-10 md:p-16 text-center group">
          
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[600px] bg-gradient-to-b from-blue-500/20 to-purple-500/20 blur-[100px] pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-80" />
          
        <div class="absolute inset-0 opacity-[0.03] dark:opacity-10 pointer-events-none" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 24px 24px;"></div>

        <div class="relative z-10 flex flex-col items-center">
            
          <UBadge variant="subtle" color="primary" size="lg" class="w-fit mb-6 flex items-center gap-2 rounded-full px-4 border border-white/20 bg-white/10 text-white">
            <span class="font-bold">Lets Talk</span>
            <template #leading>
                <span class="relative flex size-2">
                <span class="absolute inline-flex size-full rounded-full opacity-75 bg-green-400 animate-ping" />
                <span class="relative inline-flex size-2 scale-90 rounded-full bg-green-400" />
                </span>
            </template>
          </UBadge>
          
          <h2 class="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            Punya Ide Proyek Digital? <br class="hidden md:block" />
            Mari Jadikan <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Nyata.</span>
          </h2>

          <p class="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Ceritakan tantangan bisnis Anda. Mari jadwalkan sesi diskusi ringan untuk menemukan solusi teknologi yang paling efisien dan tepat sasaran. Tanpa komitmen, murni konsultasi.
          </p>

          <div class="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <UButton 
              size="xl"
              color="primary"
              class="w-full sm:w-auto px-8 font-bold justify-center shadow-lg shadow-primary-500/30 hover:scale-105 transition-transform duration-300"
            >
              <template #leading>
                <Icon name="i-logos-whatsapp-icon" class="w-5 h-5" />
              </template>
              Mulai Diskusi via WA
            </UButton>

            <UButton 
              size="xl"
              variant="outline"
              color="secondary"
              icon="i-heroicons-envelope"
              class="w-full sm:w-auto px-8 font-bold justify-center text-white border-white/20 hover:bg-white/10 transition-colors"
            >
              Kirim Email
            </UButton>
          </div>
          
          <p class="mt-6 text-sm text-gray-400 flex items-center justify-center gap-2">
            <Icon name="i-heroicons-bolt" class="w-4 h-4 text-yellow-400" />
            Usually membalas dalam waktu kurang dari 2 jam.
          </p>

        </div>
      </div>

    </UContainer>
  </section>
</template>