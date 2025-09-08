<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { charSkillData, type SkillSection, type SkillItem } from '@/data/charskillData'

const props = defineProps<{
  charKey: string
  title?: string
}>()

const sections = computed<SkillSection[]>(() => charSkillData[props.charKey] ?? [])

/* 모달 */
const openSkill = ref<SkillItem | null>(null)
const isOpen = computed(() => !!openSkill.value)
const open = (s: SkillItem) => (openSkill.value = s)
const close = () => (openSkill.value = null)

/* 모달 닫기(esc 가능) */
const root = ref<HTMLElement | null>(null)
const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
const onPointerDown = (e: Event) => {
  const t = e.target as Node | null
  if (isOpen.value && root.value && t && !root.value.contains(t)) close()
}
onMounted(() => {
  document.addEventListener('keydown', onKey)
  document.addEventListener('pointerdown', onPointerDown, true)
})
onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKey)
  document.removeEventListener('pointerdown', onPointerDown, true)
})

const tierBadge: Record<string, string> = {
  orb: 'bg-white/5 text-sky-200 border border-sky-400/30',
  active: 'bg-white/5 text-rose-200 border border-rose-400/30',
  passive: 'bg-white/5 text-emerald-200 border border-emerald-400/30',
}

/* === 패널 펼치기/접기 === */
const detailsOpen = ref(true)
const detailsToggleText = computed(() =>
  detailsOpen.value ? '스킬 정보 접기' : '스킬 정보 펼치기'
)
const toggleDetails = () => {
  detailsOpen.value = !detailsOpen.value
  if (!detailsOpen.value) close()
}
</script>

<template>
  <div class="space-y-4 max-w-4xl w-full mx-auto mb-8 mt-2">
    <div class="flex items-center gap-2">
      <h2 class="text-xl md:text-2xl font-bold text-white/90">
        {{ title ?? 'Skills' }}
      </h2>
      <span class="h-px flex-1 bg-white/10"></span>
      <button
        type="button"
        class="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] md:text-xs
               bg-white/10 text-white/90 border border-white/20 hover:bg-white/15 transition"
        :aria-expanded="detailsOpen"
        @click="toggleDetails"
      >
        {{ detailsToggleText }}
      </button>
    </div>

    <Transition name="slide-fade">
      <div v-if="detailsOpen" class="space-y-5">
        <div v-for="sec in sections" :key="sec.label" class="space-y-3">
          <div class="text-sm md:text-base font-semibold text-white/80">
            {{ sec.label }}
          </div>

          <!-- 카드 -->
          <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
            <button
              v-for="s in sec.items"
              :key="s.id"
              type="button"
              class="group text-left rounded-xl bg-white/[0.04] hover:bg-white/[0.06] transition
                     border border-white/10 shadow-sm px-3 py-3 md:px-4 md:py-3
                     focus:outline-none focus:ring-2 focus:ring-white/30"
              @click="open(s)"
            >
              <div
                class="flex items-center gap-3 md:gap-4 rounded-lg p-2 ring-inset"
                :class="s.accent || 'ring-1 ring-white/10'"
              >
                <div class="h-11 w-11 md:h-12 md:w-12 rounded-md bg-white/[0.06] border border-white/15 grid place-items-center">
                  <img :src="s.icon" class="w-10 h-10 md:w-10 md:h-10 object-contain opacity-90" alt="" />
                </div>
                <div class="flex-1 overflow-hidden">
                  <div class="flex items-center gap-2">
                    <div class="font-semibold text-white/90 truncate">{{ s.name }}</div>
                    <span
                      class="hidden md:inline-flex items-center rounded-full px-2 py-0.5 text-[11px]"
                      :class="tierBadge[s.tier]"
                    >
                      {{ s.tier }}
                    </span>
                  </div>
                  <div class="text-[12px] text-white/60 mt-0.5 truncate">{{ s.subText }}</div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- === 모달 === -->
    <transition name="fade">
      <div v-if="isOpen" class="fixed inset-0 z-[70]">
        <div class="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

        <div class="absolute inset-0 grid place-items-center px-4">
          <div
            ref="root"
            class="w-full max-w-2xl rounded-xl bg-[#161620] text-white shadow-2xl border border-white/15
                   animate-[fadeIn_200ms_ease-out]"
          >

            <div class="flex items-start gap-3 p-4 border-b border-white/10">
              <div class="h-11 w-11 rounded-md bg-white/[0.06] border border-white/15 grid place-items-center">
                <img :src="openSkill!.icon" class="w-10 h-10 object-contain opacity-90" alt="" />
              </div>
              <div class="flex-1">
                <div class="text-[17px] md:text-lg font-bold text-white/95">
                  {{ openSkill!.detail.title }}
                </div>
                <div class="flex flex-wrap gap-1 mt-1">
                  <span
                    v-if="openSkill!.detail.levelText"
                    class="inline-flex items-center rounded-md px-2 py-0.5 text-[11px] bg-white/10 border border-white/20"
                  >
                    {{ openSkill!.detail.levelText }}
                  </span>
                  <span
                    v-for="(b, i) in (openSkill!.detail.badges || [])"
                    :key="i"
                    class="inline-flex items-center rounded-md px-2 py-0.5 text-[11px] border"
                    :class="b.cls || 'bg-white/10 border-white/20'"
                  >
                    {{ b.text }}
                  </span>
                </div>
              </div>
              <button
                class="ml-2 text-white/70 hover:text-white rounded-md p-1.5 hover:bg-white/10 transition"
                @click="close"
                aria-label="close"
              >
                ✕
              </button>
            </div>

            <div class="no-scrollbar p-4 md:p-5 space-y-3 max-h-[70vh] overflow-y-auto">
              <p
                v-for="(p, i) in openSkill!.detail.body"
                :key="i"
                class="text-[13px] md:text-[14px] leading-relaxed text-white/85"
                v-html="p"
              />
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,.fade-leave-active{ transition: opacity .18s ease }
.fade-enter-from,.fade-leave-to{ opacity: 0 }

.slide-fade-enter-active,
.slide-fade-leave-active { transition: all .18s ease; }
.slide-fade-enter-from { opacity: 0; transform: translateY(-4px); }
.slide-fade-leave-to   { opacity: 0; transform: translateY(-4px); }

.no-scrollbar::-webkit-scrollbar {
  display: none; 
}
.no-scrollbar {
  -ms-overflow-style: none;  
  scrollbar-width: none;     
}

@keyframes fadeIn { from{ opacity:.0; transform: translateY(4px) } to{ opacity:1; transform: translateY(0) } }
</style>
