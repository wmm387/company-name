<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
</script>

<template>
  <NConfigProvider>
    <NaiveProvider>
      <TheHeader />
      <RouterView pt-12 />
    </NaiveProvider>
  </NConfigProvider>
</template>
