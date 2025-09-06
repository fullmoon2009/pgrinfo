<script setup lang="ts">
import { Carousel, Slide, Navigation } from 'vue3-carousel'

type GridCard = { img: string }

type SlideCfg = {
  /** 상단 타입 아이콘 */
  typeIcon: string
  /** 타입 아이콘 외곽선 클래스 (ex. 'border-pink-500') */
  typeBorderCls?: string

  /** 6칸 메모리 카드 */
  grid: GridCard[]
  /** 그리드 아이템 보더/배경 클래스 (ex. 'border-white/10 bg-black/20') */
  gridItemCls?: string

  /** 카드 넘버 표시/스타일 */
  showIndex?: boolean
  indexCls?: string

  /** 중앙 공격력/필살기 라인 */
  atkIcons: string[]
  atkLabel?: string
  atkIconCls?: string

  ultIcon: string
  ultLabel?: string
  ultIconCls?: string

  /** 가운데 세로 구분선 클래스 */
  dividerCls?: string

  /** 하단 배지/칩 텍스트 */
  tierBadge: { text: string; cls: string }
  chipText: string
  chipText2: string
  chipText3: string

  // <script setup>의 SlideCfg에 아래 2개 추가
  atkSepText?: string        // 기본값 'or'
  atkSepCls?: string
}



const props = defineProps<{
  tabA: SlideCfg[]
  tabB: SlideCfg[]
}>()

const slidesLen = computed(() => props.tabA?.length ?? 0)
</script>

<template>
  <div class="rounded-md bg-black/30 p-3">
    <!-- 상단 탭 영역은 부모가 넣음 -->
    <div class="flex gap-2">
      <slot name="tabs"></slot>
    </div>

    <!-- 기본: panelA -->
    <slot name="panelA">
      <Carousel
        :items-to-show="1"
        :wrap-around="true"
        :autoplay="0"
        :pause-autoplay-on-hover="false"
        :navigation-enabled="slidesLen > 1"
        class="memory"
      >
        <Slide v-for="(s, idx) in tabA" :key="'a' + idx">
          <div class="w-full flex flex-col items-center">
            <!-- 타입 아이콘 -->
            <div class="mb-3 flex flex-col items-center">
              <img
                :src="s.typeIcon"
                :class="[
                  'w-10 h-10 rounded-md object-cover border-2',
                  s.typeBorderCls ?? 'border-purple-400'
                ]"
              />
            </div>

            <!-- 본문 카드 -->
            <div class="w-full max-w-[310px] mx-auto bg-[#1E1E2F] rounded-md border border-white/10 p-3">
              <div class="grid grid-cols-3 gap-3">
                <div
                  v-for="(c, i) in s.grid"
                  :key="i"
                  :class="[
                    'relative rounded-md overflow-hidden border',
                    s.gridItemCls ?? 'border-white/20 bg-black/40'
                  ]"
                >
                  <span
                    v-if="s.showIndex !== false"
                    :class="[
                      'absolute top-1 left-1 text-[10px] font-semibold',
                      s.indexCls ?? 'text-white/80'
                    ]"
                  >
                    {{ String(i + 1).padStart(2, '0') }}
                  </span>
                  <div class="aspect-[3/4]">
                    <img :src="c.img" class="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              <!-- 3:1 라벨 -->
              <div class="mt-3 -mx-1 md:-mx-2">
                <div class="rounded-md px-2">
                  <div class="grid grid-cols-4 items-center gap-2">
                    <div class="col-span-3">
                      <div class="flex items-center justify-center gap-2">
                        <template v-for="(a, i) in s.atkIcons" :key="i">
                          <img
                            :src="a"
                            :class="['w-10 h-10 object-contain', s.atkIconCls]"
                          />
                          <!-- 마지막 아이콘 뒤에는 'or'를 넣지 않음 -->
                          <span
                            v-if="i < s.atkIcons.length - 1"
                            :class="s.atkSepCls ?? 'text-[11px] md:text-xs text-white/70 select-none'"
                          >
                            {{ s.atkSepText ?? 'or' }}
                          </span>
                        </template>
                      </div>
                      <div class="mt-1 text-center text-[11px] md:text-xs text-white/85">
                        {{ s.atkLabel ?? '공격력' }}
                      </div>
                    </div>
                    <div class="col-span-1 relative pl-3">
                      <span
                        class="absolute left-0 top-1/2 -translate-y-1/2 h-[70%] w-px"
                        :class="s.dividerCls ?? 'bg-white/20'"
                      ></span>
                      <div class="flex flex-col items-center">
                        <img
                          :src="s.ultIcon"
                          :class="['w-10 h-10 object-contain', s.ultIconCls]"
                        />
                        <div class="mt-1 text-[11px] md:text-xs text-white/85">
                          {{ s.ultLabel ?? '필살기' }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 하단 라벨 -->
              <div class="mt-3 border-t border-white/10 pt-2 text-center text-xs whitespace-nowrap">
                <span
                  class="inline-flex items-center gap-1 rounded-full px-3 py-1 font-semibold bg-white/10 border border-white/20"
                  :class="s.tierBadge.cls"
                >
                  {{ s.tierBadge.text }}
                </span>
                <span class="ml-2 text-pink-300 font-semibold">{{ s.chipText }}</span>
                <span class="text-white/60"> / </span>
                <span class=" text-red-400 font-semibold">{{ s.chipText2 }}</span>
                <span class="text-white/60"> / </span>
                <span class=" text-red-400 font-semibold">{{ s.chipText3 }}</span>
                
              </div>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation v-if="slidesLen > 1" />
        </template>
      </Carousel>
    </slot>

    <!-- 우측 패널은 부모가 꽂아넣음 -->
    <slot name="panelB"></slot>
  </div>
</template>
