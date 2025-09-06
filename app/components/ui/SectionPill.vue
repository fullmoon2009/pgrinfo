<script setup lang="ts">
defineProps<{ text:string }>()
</script>

<template>
  <div class="col-span-2 md:col-span-4 flex justify-center mb-1 md:mb-4">
    <span class="inline-flex items-center gap-1 sm:gap-2 rounded-md md:px-3 md:py-1.5 px-3 py-1.5 text-[15px] font-bold
                 bg-[#0A0A23]/40 text-white border-2 border-black hover:bg-white/15 hover:border-white/30
                 focus:outline-none focus:ring-2 focus:ring-white/40 active:scale-[0.98] transition mt-3">
      {{ text }}
    </span>
  </div>
</template>
