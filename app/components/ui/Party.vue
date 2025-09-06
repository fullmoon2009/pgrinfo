<script setup lang="ts">
import { Carousel, Slide, Navigation } from 'vue3-carousel'

type MemberSlide = { img: string; label: string; borderClass?: string }
type Column = { slides: MemberSlide[]; showNav?: boolean }

const props = defineProps<{
  typeIcon: string

  typeKey?: string

  typeBorderClass?: string

  roleIcons?: string[]              
  roleIconClasses?: string[]        
  columns: [Column, Column, Column] 
}>()

const roleIcons = props.roleIcons ?? [
  '/assets/roleIcons/amp.png',
  '/assets/roleIcons/arm.png',
  '/assets/roleIcons/atk.png'
]
const roleIconClasses = props.roleIconClasses ?? ['', '', '']

// 1) 타입별 보더 컬러 매핑
const TYPE_BORDER: Record<string, string> = {
  dark: 'border-purple-400',
  abyss: 'border-yellow-200',
  lightnoise: 'border-yellow-200',
  fire: 'border-red-400',
  burn: 'border-blue-400',
  ice: 'border-cyan-300',
  freeze: 'border-amber-300',
  lightning: 'border-amber-300',
  ultima: 'border-emerald-300',
  physics: 'border-gray-300',
  nihil: 'border-gray-300',
  fuzz: 'border-gray-300',
}


const inferredTypeKey = computed(() => {
  if (props.typeKey) return props.typeKey
  const lower = (props.typeIcon || '').toLowerCase()
  return Object.keys(TYPE_BORDER).find(k => lower.includes(k))
})

// 3) 최종 보더 클래스 결정 (명시 오버라이드 > 매핑 > 기본값)
const typeIconBorderClass = computed(() =>
  props.typeBorderClass ?? (inferredTypeKey.value ? TYPE_BORDER[inferredTypeKey.value] : 'border-white/40')
)
</script>

<template>
  <div class="bg-black/50 rounded-md p-3 text-white">
    <!-- 상단: 속성 아이콘 -->
    <div class="flex flex-col items-center mb-4 pb-3 border-b-2 border-white/50">
      <img
        :src="typeIcon"
        class="h-12 w-12 md:w-20 md:h-20 rounded-md object-cover border-2"
        :class="typeIconBorderClass"
        alt="type"
      />
    </div>

    <!-- 역할 아이콘 줄 -->
    <div class="grid grid-cols-3 gap-2 md:gap-2 mb-2">
      <div class="col-span-3">
        <div class="grid grid-cols-3 place-items-center">
          <img
            v-for="(src,i) in roleIcons" :key="i"
            :src="src"
            class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md"
            :class="roleIconClasses[i] || ''"
            alt="role"
          />
        </div>
      </div>
    </div>

    <!-- 캐러셀 3개 -->
    <div class="grid grid-cols-3 gap-2 md:gap-2">
      <div v-for="(col,ci) in columns" :key="ci">
        <Carousel :items-to-show="1" :wrap-around="true"
                  :navigation-enabled="false" :pagination-enabled="false"
                  class="w-full">
          <Slide v-for="(s,si) in col.slides" :key="si">
            <div class="flex flex-col items-center">
              <img
                :src="s.img"
                class="h-20 w-20 md:h-[100px] md:w-[100px] object-cover rounded-md border-2"
                :class="s.borderClass || 'border-white/20'"
                :alt="s.label"
              />
              <span class="mt-2 text-[11px] md:text-xs whitespace-nowrap">{{ s.label }}</span>
            </div>
          </Slide>
          <template #addons v-if="col.showNav"><Navigation /></template>
        </Carousel>
      </div>
    </div>
  </div>
</template>
