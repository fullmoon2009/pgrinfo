<script setup lang="ts">
defineProps<{
  left: { src:string; label:string; border?:string }[]  // 길이 2 예상
  right: { src:string; label:string; border?:string }
}>()
</script>

<template>
  <div class="mx-auto mt-6 w-[70vw] md:w-full max-w-md rounded-md bg-[#0A0A23]/30 px-4 py-3">
    <div class="grid grid-cols-3 gap-1 md:gap-2">
      <!-- 좌 2칸 -->
      <div class="col-span-2 bg-black/50 rounded-xl p-3 md:p-4 text-white">
        <div class="grid grid-cols-2 place-items-center">
          <div v-for="(it,i) in left" :key="i" class="w-full aspect-square max-w-[64px] md:max-w-[90px]">
            <img :src="it.src" :alt="it.label"
                 class="w-full h-full object-contain rounded-md border-2"
                 :class="it.border || 'border-white/30'" />
          </div>
        </div>
        <div class="mt-2 grid grid-cols-2 text-white/90 text-center text-[10px] md:text-xs">
          <span>{{ left[0]?.label }}</span>
          <span>{{ left[1]?.label }}</span>
        </div>
      </div>

      <!-- 우 1칸 -->
      <div class="col-span-1 bg-black/50 rounded-xl p-3 md:p-4 grid place-items-center text-white">
        <div class="w-full aspect-square max-w-[64px] md:max-w-[87px]">
          <img :src="right.src" :alt="right.label"
               class="w-full h-full object-contain rounded-md ring-2 ring-white p-1" />
        </div>
        <span class="mt-2 text-[10px] text-white/90 md:text-xs">{{ right.label }}</span>
      </div>
    </div>
  </div>
</template>
