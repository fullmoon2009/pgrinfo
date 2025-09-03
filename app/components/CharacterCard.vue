<script setup lang="ts">
defineProps<{
  name: string
  portrait: string
  types: string[]
}>()
</script>

<template>
  <div class="bg-black/50 rounded-md flex flex-col items-center p-2">
    <div class="flex">
      <img :src="portrait" alt="" class="w-[70px] h-[70px] md:w-20 md:h-20 object-contain rounded-md" />
      <div class="flex flex-col ml-2 gap-1">
        <img v-for="(t,i) in types" :key="i" :src="`/assets/types/${t}.png`" alt="" class="w-6 h-6 object-contain" />
      </div>
    </div>
    <span class="mt-2 text-sm text-white whitespace-nowrap overflow-hidden text-ellipsis max-w-[140px]">{{ name }}</span>
  </div>
</template>
