<script setup lang="ts">
type Row = { rank: string; recommend?: string; note?: string }
defineProps<{ rows: Row[] }>()
</script>

<template>
  <div class="divide-y divide-gray-500 text-[13px] md:text-[15px]">
    <!-- 헤더 -->
    <div class="grid grid-cols-[2fr_2fr_6fr] bg-[#383838] rounded-t-md">
      <div class="p-2 text-center">랭크</div>
      <div class="p-2 text-center">추천도</div>
      <div class="p-2 text-center">비고</div>
    </div>
    <!-- 바디 -->
    <div v-for="(r, i) in rows" :key="i" class="grid grid-cols-[2fr_2fr_6fr]">
      <div class="p-2 text-center">{{ r.rank }}</div>
      <div class="p-2 text-center">{{ r.recommend || '' }}</div>
      <div class="p-2 text-center">{{ r.note || '' }}</div>
    </div>
  </div>
</template>
