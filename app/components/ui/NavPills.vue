<script setup lang="ts">
const props = defineProps<{ items:{label:string; target:string}[] }>()
function go(id:string){
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior:'smooth', block:'start' })
}
</script>

<template>
  <div class="max-w-lg mx-auto flex flex-wrap justify-center gap-2 sm:gap-3 mt-7">
    <button v-for="it in items" :key="it.target" @click="go(it.target)"
      class="inline-flex items-center gap-1 sm:gap-2 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium
             bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30
             focus:outline-none focus:ring-2 focus:ring-white/40 active:scale-[0.98] transition">
      {{ it.label }}
    </button>
  </div>
</template>
