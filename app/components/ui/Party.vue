<script setup lang="ts">
import { computed } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

type Corner = 'lt' | 'rt' | 'lb' | 'rb'
type Badge = {
  text: string
  cls?: string
  pos?: Corner
}

type MemberSlide = {
  img: string
  label: string
  borderClass?: string
  // 단일/다중 배지
  badgeText?: string
  badgeClass?: string
  badges?: Badge[]

  // 🔹 이동 관련(선택)
  /** 내부 라우트 경로 (NuxtLink로 이동) 예: '/characters/dante' */
  to?: string
  /** 외부 링크 (a태그로 이동) 예: 'https://example.com' */
  href?: string
  /** 외부 링크 target (기본 '_self') */
  target?: '_self' | '_blank' | '_parent' | '_top'
  /** rel 속성 (보안상 _blank면 'noopener noreferrer' 권장) */
  rel?: string
}

type Column = { slides: MemberSlide[]; showNav?: boolean }

const props = defineProps<{
  typeIcon: string
  typeKey?: string
  typeBorderClass?: string
  roleIcons?: string[]
  roleIconClasses?: string[]
  columns: [Column, Column, Column]
}>()

const roleIcons = computed<string[]>(
  () =>
    props.roleIcons ?? [
      '/assets/roleIcons/amp.png',
      '/assets/roleIcons/arm.png',
      '/assets/roleIcons/atk.png',
    ]
)
const roleIconClasses = computed<string[]>(
  () => props.roleIconClasses ?? ['', '', '']
)

const TYPE_BORDER: Record<string, string> = {
  dark: 'border-purple-400',
  abyss: 'border-purple-950',
  lightnoise: 'border-yellow-200',
  fire: 'border-red-500',
  burn: 'border-[#5a0f0f]',
  ice: 'border-cyan-300',
  freeze: 'border-amber-300',
  lightning: 'border-amber-300',
  ultima: 'border-emerald-300',
  physics: 'border-gray-300',
  nihil: 'border-[#C00088]',
  fuzz: 'border-gray-300',
}

const inferredTypeKey = computed(() => {
  if (props.typeKey) return props.typeKey
  const lower = (props.typeIcon || '').toLowerCase()
  return Object.keys(TYPE_BORDER).find((k) => lower.includes(k))
})

const typeIconBorderClass = computed(
  () =>
    props.typeBorderClass ??
    (inferredTypeKey.value ? TYPE_BORDER[inferredTypeKey.value] : 'border-white/40')
)

/** 배지 위치별 컨테이너 클래스 */
const CORNER_CLASS: Record<Corner, string> = {
  lt: 'left-1 top-1 items-start',
  rt: 'right-1 top-1 items-end',
  lb: 'left-1 bottom-1 items-start',
  rb: 'right-1 bottom-1 items-end',
}
const CORNERS: Corner[] = ['lt', 'rt', 'lb', 'rb']
</script>

<template>
  <div class="bg-black/50 rounded-md p-4 text-white max-w-md">
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
            v-for="(src, i) in roleIcons"
            :key="src + '|' + i"
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
      <div v-for="(col, ci) in columns" :key="'col-' + ci">
        <Carousel
          :key="'carousel-' + ci"
          :items-to-show="1"
          :wrap-around="true"
          :navigation-enabled="false"
          :pagination-enabled="false"
          class="w-full"
        >
          <Slide v-for="s in col.slides" :key="s.img + '|' + s.label">
            <div class="flex flex-col items-center">
              <!-- 🔹 링크 우선순위: NuxtLink(to) → a(href) → div -->
              <NuxtLink
                v-if="s.to"
                :to="s.to"
                class="relative group rounded-md focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                <!-- 카드 -->
                <img
                  :src="s.img"
                  class="h-20 w-20 md:h-[100px] md:w-[100px] object-cover rounded-md border-2 cursor-pointer group-hover:brightness-105 transition"
                  :class="s.borderClass || 'border-white/20'"
                  :alt="s.label"
                />
                <!-- 배지(단일/다중) -->
                <span
                  v-if="!s.badges?.length && s.badgeText && s.badgeText.trim()"
                  class="absolute left-1 top-1 z-10 rounded px-1.5 py-0.5 text-[9px] md:text-[10px] font-semibold
                         bg-white/15 text-white border border-white/30 backdrop-blur-[2px]"
                  :class="s.badgeClass"
                >
                  {{ s.badgeText }}
                </span>
                <template v-if="s.badges?.length">
                  <div
                    v-for="corner in CORNERS"
                    :key="corner"
                    v-show="s.badges.some(b => (b.pos || 'lt') === corner)"
                    class="absolute z-10 flex flex-col gap-1"
                    :class="CORNER_CLASS[corner]"
                  >
                    <span
                      v-for="(b, bi) in s.badges.filter(b => (b.pos || 'lt') === corner)"
                      :key="bi"
                      class="rounded px-1.5 py-0.5 text-[9px] md:text-[10px] font-semibold
                             bg-white/15 text-white border border-white/30 backdrop-blur-[2px]"
                      :class="b.cls"
                    >
                      {{ b.text }}
                    </span>
                  </div>
                </template>
              </NuxtLink>

              <a
                v-else-if="s.href"
                :href="s.href"
                :target="s.target || '_self'"
                :rel="s.rel || (s.target === '_blank' ? 'noopener noreferrer' : undefined)"
                class="relative group rounded-md focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                <!-- 카드 -->
                <img
                  :src="s.img"
                  class="h-20 w-20 md:h-[100px] md:w-[100px] object-cover rounded-md border-2 cursor-pointer group-hover:brightness-105 transition"
                  :class="s.borderClass || 'border-white/20'"
                  :alt="s.label"
                />
                <!-- 배지 동일 로직 -->
                <span
                  v-if="!s.badges?.length && s.badgeText && s.badgeText.trim()"
                  class="absolute left-1 top-1 z-10 rounded px-1.5 py-0.5 text-[9px] md:text-[10px] font-semibold
                         bg-white/15 text-white border border-white/30 backdrop-blur-[2px]"
                  :class="s.badgeClass"
                >
                  {{ s.badgeText }}
                </span>
                <template v-if="s.badges?.length">
                  <div
                    v-for="corner in CORNERS"
                    :key="corner"
                    v-show="s.badges.some(b => (b.pos || 'lt') === corner)"
                    class="absolute z-10 flex flex-col gap-1"
                    :class="CORNER_CLASS[corner]"
                  >
                    <span
                      v-for="(b, bi) in s.badges.filter(b => (b.pos || 'lt') === corner)"
                      :key="bi"
                      class="rounded px-1.5 py-0.5 text-[9px] md:text-[10px] font-semibold
                             bg-white/15 text-white border border-white/30 backdrop-blur-[2px]"
                      :class="b.cls"
                    >
                      {{ b.text }}
                    </span>
                  </div>
                </template>
              </a>

              <!-- 링크가 없을 때 기본 div -->
              <div v-else class="relative">
                <img
                  :src="s.img"
                  class="h-20 w-20 md:h-[100px] md:w-[100px] object-cover rounded-md border-2"
                  :class="s.borderClass || 'border-white/20'"
                  :alt="s.label"
                />
                <span
                  v-if="!s.badges?.length && s.badgeText && s.badgeText.trim()"
                  class="absolute left-1 top-1 z-10 rounded px-1.5 py-0.5 text-[9px] md:text-[10px] font-semibold
                         bg-white/15 text-white border border-white/30 backdrop-blur-[2px]"
                  :class="s.badgeClass"
                >
                  {{ s.badgeText }}
                </span>
                <template v-if="s.badges?.length">
                  <div
                    v-for="corner in CORNERS"
                    :key="corner"
                    v-show="s.badges.some(b => (b.pos || 'lt') === corner)"
                    class="absolute z-10 flex flex-col gap-1"
                    :class="CORNER_CLASS[corner]"
                  >
                    <span
                      v-for="(b, bi) in s.badges.filter(b => (b.pos || 'lt') === corner)"
                      :key="bi"
                      class="rounded px-1.5 py-0.5 text-[9px] md:text-[10px] font-semibold
                             bg-white/15 text-white border border-white/30 backdrop-blur-[2px]"
                      :class="b.cls"
                    >
                      {{ b.text }}
                    </span>
                  </div>
                </template>
              </div>

              <span class="mt-2 text-[11px] md:text-xs whitespace-nowrap">{{ s.label }}</span>
            </div>
          </Slide>

          <template #addons v-if="col.showNav && col.slides && col.slides.length > 1">
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>
