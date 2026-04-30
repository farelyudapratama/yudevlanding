<script setup lang="ts">
const colorMode = useColorMode()
colorMode.preference = 'dark'
colorMode.value = 'dark'
</script>

<template>
  <UApp>
    <AppNav />
    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>
    <AppFooter />
  </UApp>
</template>
