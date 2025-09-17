<script setup lang="ts">
defineProps<{
  left: { src: string; label: string; border?: string }[]
  right: { src: string; label: string; border?: string }
}>()
</script>

<template>
  <div class="mx-auto mt-6 w-[70vw] md:w-[430vw] max-w-md rounded-md bg-[#0A0A23]/30 px-4 py-3">
    <div :class="['grid gap-1 md:gap-2', (left?.length === 1 ? 'grid-cols-2' : 'grid-cols-3')]">
      
      <!-- 속성 아이콘 -->
      <div
        :class="[
          (left?.length === 1 ? 'col-span-1' : 'col-span-2'),
          'bg-black/50 rounded-xl p-3 md:p-4 text-white'
        ]"
      >
        <!-- 1개 -->
        <template v-if="left && left.length === 1">
          <div class="grid place-items-center">
            <div class="w-full aspect-square max-w-[64px] md:max-w-[87px]">
              <img
                :src="left[0].src"
                :alt="left[0].label"
                class="w-full h-full object-contain rounded-md border-2"
                :class="left[0].border || 'border-white/30'"
              />
            </div>
          </div>
          <div class="mt-2 text-center text-white/90 text-[10px] md:text-xs">
            <span>{{ left[0].label }}</span>
          </div>
        </template>

        <!-- 2개 이상 -->
        <template v-else>
          <div class="grid grid-cols-2 place-items-center">
            <div
              v-for="(it,i) in left.slice(0,2)"
              :key="i"
              class="w-full aspect-square max-w-[64px] md:max-w-[90px]"
            >
              <img
                :src="it.src"
                :alt="it.label"
                class="w-full h-full object-contain rounded-md border-2"
                :class="it.border || 'border-white/30'"
              />
            </div>
          </div>
          <div class="mt-2 grid grid-cols-2 text-white/90 text-center text-[10px] md:text-xs">
            <span>{{ left[0]?.label }}</span>
            <span>{{ left[1]?.label }}</span>
          </div>
        </template>
      </div>

      <!-- 직업 아이콘 -->
      <div class="col-span-1 bg-black/50 rounded-xl p-3 md:p-4 grid place-items-center text-white">
        <div class="w-full aspect-square max-w-[64px] md:max-w-[87px]">
          <img
            :src="right.src"
            :alt="right.label"
            class="w-full h-full object-contain rounded-md ring-2 ring-white p-1"
          />
        </div>
        <span class="mt-2 text-[10px] text-white/90 md:text-xs">{{ right.label }}</span>
      </div>
    </div>
  </div>
</template>
