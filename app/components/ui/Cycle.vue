<script setup lang="ts">
import { ref, computed, watch, watchEffect, nextTick } from 'vue'
import { Carousel, Slide, Pagination } from 'vue3-carousel'

type SlideDef =
  | {
      kind: 'rows'
      rows: Array<
        Array<
          | { kind:'arrow' }
          | { kind:'icon'; src:string; label?:string; rounded?:boolean; bordered?:boolean; count?:number }
          | { kind:'duo'; left:string; right:string; label?:string; count?:number }
        >
      >
    }
  | { kind:'text'; lines:string[] }

type CycleContent = { video?: string; slides: SlideDef[] }
type CycleMode = 'first' | 'repeat'

const props = defineProps<{
  typeIcon: string
  typeBorderCls?: string
  pillText?: Partial<Record<CycleMode, string>>
  noticeHtml?: string | null
  content: Partial<Record<CycleMode, CycleContent>>
  sectionKey?: string
}>()


const hasFirst  = computed(() =>
  Boolean(props.content.first && (props.content.first.video || (props.content.first.slides?.length ?? 0) > 0))
)
const hasRepeat = computed(() =>
  Boolean(props.content.repeat && (props.content.repeat.video || (props.content.repeat.slides?.length ?? 0) > 0))
)


const mode = ref<CycleMode | null>(null)
const pickInitialMode = () => {
  if (hasFirst.value)       mode.value = 'first'
  else if (hasRepeat.value) mode.value = 'repeat'
  else                      mode.value = null
}

watch(() => props.content, pickInitialMode, { immediate: true, deep: true })

watch([hasFirst, hasRepeat], () => {
  if (
    !mode.value ||
    (mode.value === 'first'  && !hasFirst.value) ||
    (mode.value === 'repeat' && !hasRepeat.value)
  ) {
    pickInitialMode()
  }
}, { immediate: true })


const renderKey = ref(0)
watchEffect(async () => {
  const fVideo  = props.content.first?.video
  const fSlides = props.content.first?.slides?.length ?? 0
  const rVideo  = props.content.repeat?.video
  const rSlides = props.content.repeat?.slides?.length ?? 0
  void fVideo; void fSlides; void rVideo; void rSlides

  await nextTick()
  pickInitialMode()
  renderKey.value++ 
}, { flush: 'post' })

watch(() => props.sectionKey, async () => {
  await nextTick()
  pickInitialMode()
  renderKey.value++
})

const current = computed<CycleContent | undefined>(() =>
  mode.value ? props.content[mode.value] : undefined
)

const videoSrc = computed(() => current.value?.video || '')
const slides   = computed<SlideDef[]>(() => current.value?.slides ?? [])

function setMode(next: CycleMode) {
  if (mode.value !== next) {
    mode.value = next
    renderKey.value++
  }
}

/* 버튼 */
const pillClass = (active: boolean) =>
  active
    ? 'bg-white/12 text-white border-2 border-gray-300 ring-1 ring-gray-300/60'
    : 'bg-white/5 text-white/80 border border-white/10 hover:bg-white/8'

/* 제목 */
const headerText = computed(() => {
  if (!mode.value) return ''
  const first  = props.pillText?.first  ?? '첫 출전 사이클'
  const repeat = props.pillText?.repeat ?? '반복 사이클'
  return mode.value === 'first' ? first : repeat
})
</script>

<template>
  <div class="w-full">
    <div class="flex flex-col items-center mb-4">
      <img
        :src="typeIcon"
        class="w-10 h-10 object-cover rounded-md mb-3"
        :class="typeBorderCls ?? 'border-2 border-gray-400'"
        alt=""
      />

      <div class="flex gap-2" v-if="hasFirst || hasRepeat">
        <!-- 첫 출전 -->
        <button
          v-if="hasFirst"
          type="button"
          :aria-pressed="mode==='first'"
          @click="setMode('first')"
          :class="['px-3 py-1.5 rounded-full text-[11px] md:text-sm transition', pillClass(mode==='first')]"
        >
          {{ pillText?.first ?? '첫 출전 사이클' }}
        </button>

        <!-- 반복 -->
        <button
          v-if="hasRepeat"
          type="button"
          :aria-pressed="mode==='repeat'"
          @click="setMode('repeat')"
          :class="['px-3 py-1.5 rounded-full text-[11px] md:text-sm transition', pillClass(mode==='repeat')]"
        >
          {{ pillText?.repeat ?? '반복 사이클' }}
        </button>
      </div>
    </div>

    <!-- 주의사항 -->
    <div v-if="noticeHtml" class="w-full flex justify-center mb-4">
      <div class="inline-block text-center text-[11px] md:text-sm border border-white/30 rounded-md px-3 py-2">
        <div v-html="noticeHtml"></div>
      </div>
    </div>

    <!-- 비디오 -->
    <video
      v-if="videoSrc"
      :key="'video-'+renderKey"
      :src="videoSrc"
      controls
      muted
      preload="metadata"
      playsinline
      class="w-full h-auto rounded-md block mb-3"
    />

    <!-- 본문 -->
    <div v-if="slides.length" class="bg-black/50 md:p-4 rounded-md text-white md:w-full md:max-h-full">

      <div class="flex flex-col items-center mb-4 pb-3 border-b-2 border-white/50">
        <span class="mt-2 md:mb-2 md:font-semibold text-sm md:text-[17px]">{{ headerText }}</span>
      </div>

      <Carousel
        :key="'car-'+renderKey"
        :items-to-show="1"
        :wrap-around="false"
        :navigation-enabled="false"
        :pagination-enabled="true"
      >
        <Slide v-for="(sl, si) in slides" :key="si">
          <div v-if="sl.kind==='rows'">
            <div
              v-for="(row, ri) in sl.rows"
              :key="ri"
              class="w-full max-w-full flex justify-center overflow-x-auto mb-0 md:mb-5"
            >
              <div class="flex items-center flex-wrap md:flex-nowrap gap-2 md:gap-4 mb-3 md:mb-0 md:scale-100 scale-[0.77] origin-top min-w-max">
                <template v-for="(it, ii) in row" :key="ii">

                  <div v-if="it.kind==='arrow'" class="flex flex-col items-center">
                    <img src="/assets/skillball/arrow.png"
                         class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain" />
                  </div>

                  <div v-else-if="it.kind==='icon'" class="flex flex-col items-center">
                    <div class="relative inline-block"
                         :class="[ it.rounded ? 'rounded-md' : 'rounded', it.bordered ? 'border-2 border-white' : '' ]">
                      <img :src="it.src" class="block w-10 h-10 md:w-[50px] md:h-[50px] object-cover" />
                      <span v-if="it.count"
                            class="absolute bottom-0 right-0 -translate-y-1/2 translate-x-1/4 text-[8px] md:text-xs leading-none font-bold px-1.5 py-0.5 border border-white/70 bg-black/70 text-white backdrop-blur-sm">
                        ×{{ it.count }}
                      </span>
                    </div>
                    <span v-if="it.label" class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap">{{ it.label }}</span>
                  </div>

                  <div v-else-if="it.kind==='duo'" class="flex flex-col items-center">
                    <div class="relative inline-flex items-center gap-1 md:gap-1.5 rounded-md overflow-hidden border-b-2 border-white bg-black/30 px-1.5 py-1">
                      <img :src="it.left"  class="w-7 h-7 md:w-9 md:h-9 object-contain" alt="" />
                      <img :src="it.right" class="w-7 h-7 md:w-9 md:h-9 object-contain" alt="" />
                      <span v-if="it.count"
                            class="absolute bottom-0 right-0 -translate-y-[0] translate-x-[0] text-[8px] md:text-xs leading-none font-bold px-1.5 py-0.5 border border-white/70 bg-black/70 text-white backdrop-blur-sm">
                        ×{{ it.count }}
                      </span>
                    </div>
                    <span v-if="it.label" class="mt-3 text-[10px] md:text-[11px] whitespace-nowrap">{{ it.label }}</span>
                  </div>
                </template>
              </div>
            </div>
          </div>


          <div v-else class="space-y-4">
            <div v-for="(t, ti) in sl.lines" :key="ti" class="flex items-center justify-center">
              <p class="text-sm md:text-base text-white/80">{{ t }}</p>
            </div>
          </div>
        </Slide>

        <template #addons>
          <div class="absolute right-5"><Pagination /></div>
        </template>
      </Carousel>
    </div>
  </div>
</template>
