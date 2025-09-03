<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <main class="flex-1">
    <div :class="route.name" class="min-h-dvh">
      <NuxtPage />
    </div>
  </main>
</template>