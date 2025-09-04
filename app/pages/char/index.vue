<script setup lang="ts">
import { ref, computed } from 'vue'
import CharacterCard from '~/components/CharacterCard.vue'
import { characters } from "~/data/charaters"

const selected = ref<string | null>(null)

const query = ref('')

function toggle(name: string) {
  selected.value = selected.value === name ? null : name
}

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  return characters
    .filter(c => !selected.value || c.types.includes(selected.value))  // 아이콘 필터
    .filter(c => !q || c.name.toLowerCase().includes(q))              // 검색 필터
})

</script>

<template>
  <nav class="bg-gray-800 text-white p-4 flex justify-between items-center">
    <div class="font-bold"></div>
    <div class="space-x-4">
      <NuxtLink to="/" class="hover:underline">홈</NuxtLink>
      <NuxtLink to="/char" class="hover:underline">캐릭터</NuxtLink>
      <NuxtLink to="/events" class="hover:underline">이벤트</NuxtLink>
    </div>
  </nav>

  <div class="flex justify-center px-4 py-4 md:py-10 ">
  <input
    :value="query"
    @input="query = $event.target.value"                 
    @compositionupdate="query = $event.target.value"
    type="text"
    placeholder="검색"
    class="w-1/2 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
  </div>
  
<div class="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto px-5 gap-3">
  <section class="grid grid-cols-6 md:grid-cols-6 py-2 md:px-2 px-10 bg-black/50 rounded-md border-2 border-ghostwhite">
  <img
    v-for="type in ['physics','fire','lightning','ice','dark','nihil']"
    :key="type"
    :src="`assets/types/${type}.png`"
    :alt="type"
    @click="toggle(type)"
    class="w-10 h-10 md:w-16 md:h-16 mx-auto rounded-md cursor-pointer transform transition-transform duration-200"
      :class="[
        selected === type ? 'scale-110 ring-2 ring-blue-500' : 'scale-100','hover:scale-110'
      ]"
  />
 </section>

  <section class="grid grid-cols-6 md:grid-cols-6 py-3 md:px-2 px-10 bg-black/50 rounded-md border-2 border-ghostwhite">
    <img
    v-for="type in ['ultima','burn','plazma','freeze','abyss', 'lightnoise']"
    :key="type"
    :src="`assets/types/${type}.png`"
    :alt="type"
    @click="toggle(type)"
    class="w-10 h-10 md:w-[55px] md:h-[55px] mx-auto rounded-md cursor-pointer transform transition-transform duration-200"
      :class="[
        selected === type ? 'scale-110 ring-2 ring-blue-500' : 'scale-100','hover:scale-110'
      ]"
  />
  </section>
</div>

<div class="px-5 py-5 md:py-10 max-w-6xl mx-auto">
    <div class="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
        <CharacterCard
            v-for="c in filtered"
            :key="c.slug"
            :slug="c.slug"
            :name="c.name"
            :portrait="c.portrait"
            :types="c.types"
        />
    </div>
</div>   


</template>