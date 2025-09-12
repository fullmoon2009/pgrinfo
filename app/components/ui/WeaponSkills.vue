<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { weaponSkillDesc } from '@/data/weaponskilldata'
import { weaponData, type WeaponTooltip } from '~/data/weaponData'

type Fit = 'cover'|'contain'|'fill'|'none'|'scale-down'
type Corner = 'lt'|'rt'|'lb'|'rb'
type Badge = { text:string; cls?:string; pos?:Corner }
type Skill = { img:string; label:string; id?:string }

type MemberSlide = {
  img: string; label: string; borderClass?: string
  badgeText?: string; badgeClass?: string; badges?: Badge[]
}
type Column = { slides: MemberSlide[]; showNav?: boolean }

const props = defineProps<{
  weaponImg:string
  weaponName:string
  weaponId?: string            

  title?:string
  skills: Skill[]

  weaponBoxClass?: string
  weaponFit?: Fit
  weaponObjectPosition?: string
  weaponZoom?: number
  weaponTransformOrigin?: string
  weaponImgClass?: string

  typeIcon?: string
  typeKey?: string
  typeBorderClass?: string
  roleIcons?: string[]
  roleIconClasses?: string[]
  columns?: [Column, Column, Column]
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

/* 스킬 툴팁 상태 */
const hoverIdx = ref<number|null>(null)   
const openIdx  = ref<number|null>(null)   
const toggleRow = (i:number) => { openIdx.value = openIdx.value === i ? null : i }

/* 무기 툴팁 상태 */
const weaponHover = ref(false)
const weaponOpen  = ref(false)

/* 툴팁 닫기 옵션 */
const rootEl = ref<HTMLElement|null>(null)
const onDocPointerDown = (e: Event) => {
  const t = e.target as Node | null
  if (rootEl.value && t && !rootEl.value.contains(t)) {
    openIdx.value = null
    weaponOpen.value = false
  }
}
onMounted(() => document.addEventListener('pointerdown', onDocPointerDown, true))
onBeforeUnmount(() => document.removeEventListener('pointerdown', onDocPointerDown, true))

/* 스킬 데이터 */
const getDesc = (s: Skill) => weaponSkillDesc[s.id ?? s.label] ?? ''

/* 무기 툴팁 데이터 */
const weaponTip = computed<WeaponTooltip | undefined>(() => {
  const key = props.weaponId ?? props.weaponName
  return key ? weaponData[key] : undefined
})
</script>

<template>
  <div ref="rootEl" class="rounded-md bg-black/30 py-6 md:py-3 px-3 relative">
    <div
      v-if="openIdx !== null || weaponOpen"
      class="fixed inset-0 z-40 md:hidden"
      @click="openIdx = null; weaponOpen = false"
    />

    <div class="grid grid-cols-3 md:grid-cols-3 gap-4 items-center md:pt-5 px-2 md:px-3 md:pb-5 md:h-full">
      <!-- 무기 박스 -->
      <div class="md:col-span-1 flex flex-col items-center">
        <div
          class="relative"
          @mouseenter="weaponHover = true"
          @mouseleave="weaponHover = false"
          @click="weaponOpen = !weaponOpen"
        >
          <div :class="weaponBoxClass || 'w-[100px] h-[170px] md:w-[110px] md:h-[220px] overflow-hidden rounded-md border-2 border-orange-500'">
            <img :src="weaponImg" :class="['w-full h-full', fitClass, weaponImgClass]" :style="imgStyle" />
          </div>

          <!-- 무기 툴팁 -->
          <div
            v-if="weaponTip"
            class="pointer-events-none absolute left-full ml-2 top-1/2 -translate-y-1/2 z-50"
            :class="(weaponHover || weaponOpen) ? 'block' : 'hidden'"
          >
            <div
              class="pointer-events-auto relative rounded-md border border-white/20 bg-black/90 text-white/90
                     p-3 shadow-xl w-[260px] md:w-[300px]"
              @click.stop
            >
              <div class="font-bold text-[13px] md:text-[14px] mb-1">{{ weaponTip.title }}</div>
              <div class="text-[11px] md:text-[12px] leading-relaxed whitespace-pre-line">
                {{ weaponTip.description }}
              </div>
            </div>
          </div>
        </div>

        <span
          :class="[
            'mt-2 text-white/90 text-center',
            ((weaponName || '').trim().length >= 8) ? 'text-[13px] md:text-sm' : 'text-sm'
          ]"
        >{{ weaponName }}</span>
      </div>

      <!-- 무기 스킬 및 툴팁 -->
      <div class="col-span-2 rounded-md relative py-1 md:py-0">
        <div class="absolute -top-1 left-1/2 -translate-x-1/2">
          <span class="inline-flex items-center rounded-full px-3 py-1 text-xs md:text-[12px]
                       bg-white/10 text-white border border-white/20 backdrop-blur-[2px] shadow whitespace-nowrap">
            {{ title ?? '무기 공명 추천' }}
          </span>
        </div>

        <div class="divide-y divide-white/20 md:w-full pt-5 md:pt-7">
          <div
            v-for="(s, i) in skills"
            :key="i"
            class="relative grid grid-cols-10 gap-2 md:gap-6 py-2 px-6 group cursor-default"
            @mouseenter="hoverIdx = i"
            @mouseleave="hoverIdx = null"
            @click="toggleRow(i)"
            role="button"
            tabindex="0"
            @keyup.enter="toggleRow(i)"
            @keyup.space.prevent="toggleRow(i)"
            :aria-expanded="openIdx===i"
          >
            <!-- 아이콘 -->
            <div class="col-span-3 flex items-center -ml-4 md:-ml-0">
              <div class="relative w-[40px] md:w-14 aspect-square rounded-md border-2 border-white/30 shrink-0">
                <img :src="s.img" class="w-full h-full object-cover" />
                <span class="absolute -top-1 -left-1 px-1 rounded bg-white/90 text-black text-[10px] font-bold leading-none shadow">
                  {{ i + 1 }}
                </span>
              </div>
            </div>

            <!-- 라벨 -->
            <div class="col-span-7 flex items-center text-[12px] md:text-sm whitespace-nowrap">
              {{ s.label }}
            </div>

            <!-- 스킬 툴팁 -->
            <div
              v-if="getDesc(s)"
              class="pointer-events-none absolute left-4 right-4 md:left-auto md:right-0 md:translate-x-[calc(100%+8px)]
                     top-full md:top-1/2 md:-translate-y-1/2 z-50"
              :class="(hoverIdx===i || openIdx===i) ? 'block' : 'hidden'"
            >
              <div
                class="pointer-events-auto relative rounded-md border border-white/20 bg-black/90 text-white/90
                       text-[11px] md:text-[13px] leading-relaxed p-3 shadow-xl max-w-xs md:max-w-sm whitespace-pre-line"
                @click.stop
              >
                {{ getDesc(s) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
