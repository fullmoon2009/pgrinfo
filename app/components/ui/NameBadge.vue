<script setup lang="ts">
defineProps<{ text:string }>()
</script>

<template>
  <div class="flex justify-center py-2">
    <span class="inline-block px-3 py-1 rounded-md border-2 border-white/40 font-bold text-white text-[20px]">
      {{ text }}
    </span>
  </div>
</template>
