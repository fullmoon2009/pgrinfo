<script setup lang="ts">
import { computed } from 'vue'

type Fit = 'cover'|'contain'|'fill'|'none'|'scale-down'

const props = defineProps<{
  leftTop: string
  leftBottom: string
  rightTall: string

  /** 컨테이너 Tailwind 클래스(반응형 포함 가능). 기본: w-[125px] h-[256px] */
  rightContainerClass?: string
  /** 이미지 Tailwind 클래스 추가분(테두리 등). */
  rightImgClass?: string

  /** 숫자(px) 또는 문자열('160px','40%','10rem' 등) */
  rightW?: number|string
  rightH?: number|string

  /** object-fit */
  rightFit?: Fit

  /** CSS object-position (예: '55% 0%', 'center top') */
  rightObjectPosition?: string
}>()

const containerStyle = computed(() => {
  const s: Record<string,string> = {}
  if (props.rightW != null) s.width  = typeof props.rightW === 'number' ? `${props.rightW}px` : String(props.rightW)
  if (props.rightH != null) s.height = typeof props.rightH === 'number' ? `${props.rightH}px` : String(props.rightH)
  return s
})

const fitClass = computed(() => {
  switch (props.rightFit) {
    case 'contain':   return 'object-contain'
    case 'fill':      return 'object-fill'
    case 'none':      return 'object-none'
    case 'scale-down':return 'object-scale-down'
    default:          return 'object-cover'
  }
})

const imgStyle = computed(() => {
  return props.rightObjectPosition ? { objectPosition: props.rightObjectPosition } : {}
})
</script>

<template>
  <div class="grid grid-cols-2 sm:grid-cols-2 gap-3 max-w-xs mx-auto px-8 mb-7">
    <div class="grid grid-rows-2 gap-3">
      <div class="relative rounded-lg overflow-hidden border-2 border-gray-100">
        <div class="aspect-square">
          <img :src="leftTop" class="w-full h-full object-cover" />
        </div>
      </div>
      <div class="relative rounded-lg overflow-hidden border-2 border-gray-100">
        <div class="aspect-square">
          <img :src="leftBottom" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>

    <!-- 오른쪽 포스터 -->
    <div
      class="relative rounded-lg overflow-hidden border-2 border-gray-100"
      :class="rightContainerClass || 'w-[125px] h-[256px]'"
      :style="containerStyle"
    >
      <!-- h-[400px] 고정은 제거 → 컨테이너에 맞춰 채움 -->
      <img
        :src="rightTall"
        :class="['w-full h-full', fitClass, rightImgClass]"
        :style="imgStyle"
      />
    </div>
  </div>
</template>
