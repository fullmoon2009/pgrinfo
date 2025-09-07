<script setup lang="ts">
import { computed } from 'vue'

type PetSkill = { img:string; label:string }
type Fit = 'cover'|'contain'|'fill'|'none'|'scale-down'

const props = defineProps<{
  petImg:string
  petName:string
  title?:string
  skills: PetSkill[]           // 길이 3

  /* --- 추가: 컨테이너/이미지 제어 --- */
  petBoxClass?: string         // 컨테이너 크기/보더 커스텀
  petFit?: Fit                 // object-fit (기본 cover)
  petObjectPosition?: string   // '50% 20%' 등
  petZoom?: number             // 1.25처럼 확대
  petTransformOrigin?: string  // 확대 기준점 '50% 20%'
  petImgClass?: string         // 추가 Tailwind 클래스(선택)
  petNameClass?: string
}>()

const fitClass = computed(() => {
  switch (props.petFit) {
    case 'contain': return 'object-contain'
    case 'fill': return 'object-fill'
    case 'none': return 'object-none'
    case 'scale-down': return 'object-scale-down'
    default: return 'object-cover'
  }
})

const imgStyle = computed(() => {
  const s: Record<string,string> = {}
  if (props.petObjectPosition) s.objectPosition = props.petObjectPosition
  if (props.petZoom && props.petZoom !== 1) s.transform = `scale(${props.petZoom})`
  if (props.petTransformOrigin) s.transformOrigin = props.petTransformOrigin
  return s
})
</script>

<template>
  <div class="rounded-md bg-black/30 p-3">
    <div class="grid grid-cols-3 gap-3 py-[12px]">
      <div class="col-span-1 flex flex-col items-center">
        <div :class="petBoxClass || 'w-full max-w-[120px] aspect-square overflow-hidden rounded-md border-2 border-red-500'">
          <img
            :src="petImg"
            :class="['w-full h-full', (petFit ?? 'cover')==='cover' ? 'object-cover' : '', petImgClass]"
            :style="{
              objectPosition: petObjectPosition,
              transform: petZoom ? `scale(${petZoom})` : undefined,
              transformOrigin: petTransformOrigin
            }"
          />
        </div>
        <!-- 기본 크기: text-xs md:text-sm, 필요시 petNameClass로 덮어쓰기 -->
        <span
          :class="[
            'mt-2 text-white/90 text-center',            
            ((petName || '').trim().length > 6)           
              ? 'text-[11px] md:text-[12px]'
              : (petNameClass || 'text-sm md:text-sm')    
          ]"
        >
          {{ petName }}
        </span>
      </div>

      <!-- 오른쪽(2) -->
      <div class="col-span-2 flex flex-col justify-center">
        <div class="text-center text-xs md:text-[12px] text-white/90 mb-2 md:mb-3">
          <span class="inline-flex items-center rounded-full px-3 py-1 text-xs md:text-[12px]
                       bg-white/10 text-white border border-white/20 backdrop-blur-[2px] shadow">
            {{ title ?? '보조기 스킬 추천' }}
          </span>
        </div>

        <div class="grid grid-cols-3 gap-3 place-items-center">
          <div v-for="(s,i) in skills" :key="i" class="flex flex-col items-center">
            <div class="relative w-full max-w-[90px] md:max-w-[100px] aspect-square rounded-md overflow-hidden border border-white/20">
              <span class="absolute top-1 left-1 px-1 rounded bg-white/90 text-black text-[10px] font-bold leading-none">{{ i+1 }}</span>
              <img :src="s.img" class="w-full h-full object-cover object-center" />
            </div>
            <span class="mt-1 text-[11px] md:text-xs text-white/90 text-center">{{ s.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
