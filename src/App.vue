<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
</script>

<template>
  <NConfigProvider>
    <NaiveProvider>
      <TheHeader />
      <RouterView pt-16 />
    </NaiveProvider>
  </NConfigProvider>
</template>
