<script setup lang="ts">
import { computed } from 'vue'

type Skill = { img:string; label:string }
type Fit = 'cover'|'contain'|'fill'|'none'|'scale-down'

const props = defineProps<{
  weaponImg:string
  weaponName:string
  title?:string
  skills: Skill[]                 // 3개 예상

  /* === 추가: 무기 이미지 사이즈/확대/크롭 제어 === */
  weaponBoxClass?: string         // 무기 이미지 컨테이너 클래스(기본 크기 덮어쓰기)
  weaponFit?: Fit                 // object-fit (기본: cover)
  weaponObjectPosition?: string   // '50% 10%' 같은 center 조정
  weaponZoom?: number             // 1.2 처럼 확대
  weaponTransformOrigin?: string  // '50% 10%' 확대 기준점
  weaponImgClass?: string         // 이미지에 임의 Tailwind 클래스 추가(선택)
}>()

const fitClass = computed(() => {
  switch (props.weaponFit) {
    case 'contain': return 'object-contain'
    case 'fill': return 'object-fill'
    case 'none': return 'object-none'
    case 'scale-down': return 'object-scale-down'
    default: return 'object-cover'
  }
})

const imgStyle = computed(() => {
  const s: Record<string,string> = {}
  if (props.weaponObjectPosition) s.objectPosition = props.weaponObjectPosition
  if (props.weaponZoom && props.weaponZoom !== 1) s.transform = `scale(${props.weaponZoom})`
  if (props.weaponTransformOrigin) s.transformOrigin = props.weaponTransformOrigin
  return s
})
</script>

<template>
  <div class="rounded-md bg-black/30 p-3">
    <div class="grid grid-cols-3 md:grid-cols-3 gap-4 items-center md:pt-5 md:pb-5 md:h-full">
      <div class="md:col-span-1 flex flex-col items-center">
        <div :class="weaponBoxClass || 'w-[100px] h-[170px] md:w-[110px] md:h-[220px] overflow-hidden rounded-md border-2 border-orange-500'">
          <img
            :src="weaponImg"
            :class="['w-full h-full', fitClass, weaponImgClass]"
            :style="imgStyle"
          />
        </div>
        <span
          :class="[
            'mt-2',
            ((weaponName || '').trim().length >= 8)
              ? 'text-[13px] md:text-sm text-white/90'  
              : 'text-sm text-white/9 text-white/90'
          ]"
        >
          {{ weaponName }}
        </span>
      </div>

      <div class="col-span-2 rounded-md relative">
        <div class="absolute -top-1 left-1/2 -translate-x-1/2">
          <span class="inline-flex items-center rounded-full px-3 py-1 text-xs md:text-[12px]
                       bg-white/10 text-white border border-white/20 backdrop-blur-[2px] shadow whitespace-nowrap">
            {{ title ?? '무기 공명 추천' }}
          </span>
        </div>

        <div class="divide-y divide-white/20 md:w-full pt-5 md:pt-7">
          <div v-for="(s, i) in skills" :key="i" class="grid grid-cols-10 gap-2 md:gap-6 py-2 px-6">
            <div class="col-span-3 flex items-center -ml-4 md:-ml-0">
              <div class="relative w-[40px] md:w-14 aspect-square rounded-md border-2 border-white/30 shrink-0">
                <img :src="s.img" class="w-full h-full object-cover" />
                <span class="absolute -top-1 -left-1 px-1 rounded bg-white/90 text-black text-[10px] font-bold leading-none shadow">
                  {{ i+1 }}
                </span>
              </div>
            </div>
            <div class="col-span-7 flex items-center text-[12px] md:text-sm whitespace-nowrap">
              {{ s.label }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
