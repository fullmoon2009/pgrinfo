<!-- /components/ui/SupportPet.vue -->
<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'

type Fit = 'cover'|'contain'|'fill'|'none'|'scale-down'
type PetSkill = {
  img: string
  label: string
  /** 선택: 스킬 레벨 뱃지 표기 (예: 5, 'Lv.5') */
  level?: number | string
  /** 선택: 스킬 설명 HTML/텍스트 */
  desc?: string
}

const props = defineProps<{
  petImg: string
  petName: string
  title?: string
  /** 모달 상단의 레벨 표기 (예: 30) */
  petLevel?: number | string
  skills: PetSkill[]

  /* 컨테이너/이미지 제어 */
  petBoxClass?: string
  petFit?: Fit
  petObjectPosition?: string
  petZoom?: number
  petTransformOrigin?: string
  petImgClass?: string
  petNameClass?: string
}>()

/* === 이미지 fit 클래스/스타일 === */
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
  const s: Record<string, string> = {}
  if (props.petObjectPosition) s.objectPosition = props.petObjectPosition
  if (props.petZoom && props.petZoom !== 1) s.transform = `scale(${props.petZoom})`
  if (props.petTransformOrigin) s.transformOrigin = props.petTransformOrigin
  return s
})

/* === 모달 상태 === */
const modalOpen = ref(false)
const openModal = () => (modalOpen.value = true)
const closeModal = () => (modalOpen.value = false)

const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal() }
onMounted(() => document.addEventListener('keydown', onKey))
onBeforeUnmount(() => document.removeEventListener('keydown', onKey))

/* 모달에 뿌릴 스킬 블록 (레벨/설명 기본값 처리) */
const skillBlocks = computed(() =>
  (props.skills || []).map(s => ({
    icon: s.img,
    name: s.label,
    levelText: s.level != null ? String(s.level) : undefined,
    desc: s.desc ?? '<span class="text-white/50">설명이 준비 중입니다.</span>',
  }))
)
</script>

<template>
  <div class="rounded-md bg-black/30 p-3">
    <div class="grid grid-cols-3 gap-3 py-[13px]">
      <!-- 보조기 이미지 (클릭 → 모달) -->
      <div class="col-span-1 flex flex-col items-center">
        <button
          type="button"
          class="group w-full"
          @click="openModal"
          aria-label="보조기 상세 열기"
        >
          <div
            :class="petBoxClass || 'w-full max-w-[120px] aspect-square overflow-hidden rounded-md border-2 border-red-500'"
            class="relative"
          >
            <img
              :src="petImg"
              :class="['w-full h-full', fitClass, petImgClass]"
              :style="imgStyle"
            />
            <!-- 미묘한 액션 힌트 -->
            <span
              class="absolute bottom-1.5 right-1.5 text-[10px] px-1.5 py-0.5 rounded bg-black/60 text-white/85 border border-white/20 opacity-0 group-hover:opacity-100 transition"
            >
              상세 보기
            </span>
          </div>
        </button>

        <span
          :class="[
            'mt-2 text-white/90 text-center',
            ((petName || '').trim().length > 6)
              ? 'text-sm md:text-[12px]'
              : (petNameClass || 'text-sm md:text-sm')
          ]"
        >
          {{ petName }}
        </span>
      </div>

      <!-- 보조기 스킬 썸네일 -->
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

  <!-- === 모달 === -->
  <transition name="pet-fade">
    <div
      v-if="modalOpen"
      class="fixed inset-0 z-[90]"
      aria-modal="true"
      role="dialog"
    >
      <!-- backdrop -->
      <div class="absolute inset-0 bg-black/70 backdrop-blur-[2px]" @click="closeModal"></div>

      <div class="absolute inset-0 grid place-items-center p-4">
        <div
          class="w-full max-w-2xl rounded-xl bg-[#14141C] text-white shadow-2xl border border-white/10
                 animate-[petIn_200ms_ease-out]"
        >
          <!-- 헤더 -->
          <div class="flex items-center gap-3 p-4 border-b border-white/10">
            <div class="h-10 w-10 rounded-md overflow-hidden border border-white/15">
              <img :src="petImg" class="w-full h-full object-cover" />
            </div>
            <div class="flex-1">
              <div class="text-[17px] md:text-lg font-bold text-white/95">
                {{ petName }}
              </div>
              <div class="mt-1 flex flex-wrap gap-1">
                <span
                  v-if="petLevel !== undefined"
                  class="inline-flex items-center rounded-md px-2 py-0.5 text-[11px]
                         bg-white/10 border border-white/20"
                >
                  Level {{ petLevel }}
                </span>
              </div>
            </div>
            <button
              class="ml-2 text-white/80 hover:text-white rounded-md p-1.5 hover:bg-white/10 transition"
              @click="closeModal"
              aria-label="닫기"
            >
              ✕
            </button>
          </div>

          <!-- 본문 -->
          <div class="p-4 md:p-5 space-y-3 max-h-[70vh] overflow-y-auto">
            <div
              v-for="(b, i) in skillBlocks"
              :key="i"
              class="flex gap-3 p-3 rounded-lg bg-white/[0.04] border border-white/10"
            >
              <div class="h-11 w-11 shrink-0 rounded-md bg-white/[0.06] border border-white/15 grid place-items-center">
                <img :src="b.icon" class="w-7 h-7 object-contain opacity-90" alt="" />
              </div>

              <div class="flex-1">
                <div class="flex items-center gap-2">
                  <div class="font-semibold text-white/95">{{ b.name }}</div>
                  <span
                    v-if="b.levelText"
                    class="inline-flex items-center rounded-md px-2 py-0.5 text-[11px] bg-white/10 border border-white/20"
                  >
                    Level {{ b.levelText }}
                  </span>
                </div>
                <div class="mt-1 text-[13px] md:text-[14px] leading-relaxed text-white/85" v-html="b.desc"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
/* 모달 트랜지션 */
.pet-fade-enter-active,.pet-fade-leave-active{ transition: opacity .18s ease }
.pet-fade-enter-from,.pet-fade-leave-to{ opacity: 0 }
/* 살짝 위에서 등장 */
@keyframes petIn { from{ opacity:.0; transform: translateY(6px) } to{ opacity:1; transform: translateY(0) } }
/* 스크롤바 미니멀 */
:global(.pet-modal)::-webkit-scrollbar{ width:8px }
:global(.pet-modal)::-webkit-scrollbar-thumb{ background:rgba(255,255,255,.12); border-radius:6px }
</style>
