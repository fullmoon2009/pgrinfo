<script setup lang="ts">
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from "vue";
import { memoryData, type MemorySetData } from "@/data/memoryData";

type GridCard = { img: string; memId?: string };

const modalOpen = ref(false);
const activeMemId = ref<string | null>(null);
const activeMem = computed<MemorySetData | null>(() =>
  activeMemId.value ? memoryData[activeMemId.value] ?? null : null
);

const isSliding = ref(false);

const overlayShown = ref(true);

const waitFrames = (n = 2) =>
  new Promise<void>((resolve) => {
    const step = (i: number) =>
      i > 0 ? requestAnimationFrame(() => step(i - 1)) : resolve();
    step(n);
  });

const onSlideStart = () => {
  overlayShown.value = false;     
  isSliding.value = true;
  openTierFor.value = null;
};

const onSlideEnd = async () => {
  await nextTick();
  await waitFrames(2);
  updateTierBtnPos();             
  isSliding.value = false;
  overlayShown.value = true;      
};


const wrapEl = ref<HTMLElement | null>(null); 
const tierBtnPos = ref<{ top: number; left: number }>({ top: 0, left: 0 });
const activeIdx = ref<number>(0);

const BTN_OFF = { x: 100, y: -48 };

const updateTierBtnPos = () =>
  nextTick(() => {
    const wrap = wrapEl.value;
    if (!wrap) return;

    const anchor =
      (document.querySelector(
        ".memory .carousel__slide[aria-hidden='false'] [data-tier-anchor]"
      ) as HTMLElement | null) ||
      (document.querySelector(
        ".memory .carousel__slide--active [data-tier-anchor]"
      ) as HTMLElement | null);

    if (!anchor) return;

    const a = anchor.getBoundingClientRect();
    const w = wrap.getBoundingClientRect();

    const idxAttr = anchor.getAttribute("data-tier-idx");
    if (idxAttr != null) activeIdx.value = Number(idxAttr);

    tierBtnPos.value = {
      top: a.top - w.top + BTN_OFF.y,
      left: a.right - w.left + BTN_OFF.x,
    };
  });

let mo: MutationObserver | null = null;
let ro: ResizeObserver | null = null;

onMounted(() => {
  updateTierBtnPos();

  const track = document.querySelector(".memory .carousel__track");
  if (track) {
    mo = new MutationObserver(updateTierBtnPos);
    mo.observe(track, { subtree: true, attributes: true, attributeFilter: ["class"] });
  }

  ro = new ResizeObserver(updateTierBtnPos);
  if (wrapEl.value) ro.observe(wrapEl.value);
  ro.observe(document.documentElement);
  window.addEventListener("resize", updateTierBtnPos);
});

onBeforeUnmount(() => {
  mo?.disconnect();
  ro?.disconnect();
  window.removeEventListener("resize", updateTierBtnPos);
});

/* ===== 모달 ===== */
const openMem = (id?: string) => {
  if (!id) return;
  if (!memoryData[id]) return;
  activeMemId.value = id;
  modalOpen.value = true;
};
const closeMem = () => {
  modalOpen.value = false;
  activeMemId.value = null;
};

const zoomSrc = ref<string | null>(null);
const openZoom = (src?: string) => { if (src) zoomSrc.value = src; };
const closeZoom = () => { zoomSrc.value = null; };

const onKey = (e: KeyboardEvent) => {
  if (e.key !== "Escape") return;
  if (zoomSrc.value) return closeZoom();
  if (modalOpen.value) return closeMem();
};
onMounted(() => document.addEventListener("keydown", onKey));
onBeforeUnmount(() => document.removeEventListener("keydown", onKey));

/* ---------- Slides ---------- */
type SlideCfg = {
  typeIcon: string;
  typeName?: string;
  typeBorderCls?: string;
  grid: GridCard[];
  gridItemCls?: string;
  showIndex?: boolean;
  indexCls?: string;
  atkIcons: string[];
  atkLabel?: string;
  atkIconCls?: string;
  ultIcon: string;
  ultLabel?: string;
  ultIconCls?: string;
  dividerCls?: string;
  tierBadge: { text: string; cls: string };
  chipText: string;
  chipText2: string;
  chipText3: string;
  atkSepText?: string;
  atkSepCls?: string;
};

const props = defineProps<{ tabA: SlideCfg[]; tabB: SlideCfg[] }>();
const slidesLen = computed(() => props.tabA?.length ?? 0);

const carouselA = ref<any>(null);
const goToTier = (tierText: string) => {
  if (!props.tabA?.length || !carouselA.value) return;
  const targetIdx = props.tabA.findIndex(
    (s) => (s.tierBadge?.text ?? "").trim() === (tierText ?? "").trim()
  );
  if (targetIdx >= 0) {
    (carouselA.value.slideTo ?? carouselA.value.to)?.(targetIdx);
  }
};

const openTierFor = ref<number | null>(null);
const toggleTierList = (idx: number) => {
  openTierFor.value = openTierFor.value === idx ? null : idx;
};
const onDocClick = () => (openTierFor.value = null);
onMounted(() => document.addEventListener("click", onDocClick));
onBeforeUnmount(() => document.removeEventListener("click", onDocClick));

/* 라벨 */
const triggerLabel = (s: SlideCfg) => {
  const tier = (s.tierBadge?.text ?? "").trim();
  return s.typeName ? `${s.typeName} / ${tier}` : tier;
};

const tierOptions = computed(() => {
  const arr = (props.tabA ?? [])
    .map((s, index) => {
      const tier = (s.tierBadge?.text ?? "").trim();
      if (!tier) return null;
      const label = s.typeName ? `${s.typeName} / ${tier}` : tier;
      return { label, tier, index };
    })
    .filter(Boolean) as { label: string; tier: string; index: number }[];

  const map = new Map<string, { label: string; tier: string; index: number }>();
  for (const o of arr) if (!map.has(o.label)) map.set(o.label, o);
  return Array.from(map.values());
});

const sizeClass = (label: string) => {
  const len = label?.trim()?.length ?? 0;
  if (len > 20) return "text-[9px]";
  if (len > 13) return "text-[10px]";
  return "text-[11px]";
};
</script>

<template>
  <div ref="wrapEl" class="relative rounded-md bg-black/30 p-4">
    <div class="flex gap-2">
      <slot name="tabs"></slot>
    </div>

    <!-- 패널A -->
    <slot name="panelA">
      <Carousel
  ref="carouselA"
  :items-to-show="1"
  :wrap-around="true"
  :autoplay="0"
  :pause-autoplay-on-hover="false"
  :navigation-enabled="slidesLen > 1"
  class="memory"
  @slide-start="onSlideStart"
  @slide-end="onSlideEnd"
>
        <Slide v-for="(s, idx) in tabA" :key="'a' + idx">
          <div class="w-full flex flex-col items-center">
            <div class="mb-3 flex justify-center">
              <div class="relative inline-block">
                <img
                  :src="s.typeIcon"
                  :class="[
                    'w-10 h-10 rounded-md object-cover border-2',
                    s.typeBorderCls ?? 'border-purple-400',
                  ]"
                />
                <!-- 앵커 -->
                <span
                  data-tier-anchor
                  :data-tier-idx="idx"
                  class="absolute top-[40px] -translate-y-1/2 left-[calc(100%+57px)] md:left-[calc(100%+70px)] w-0 h-0"
                ></span>
              </div>
            </div>

            <!-- 본문 카드 -->
            <div
              class="w-full max-w-[310px] mx-auto bg[#1E1E2F] bg-[#1E1E2F] rounded-md border border-white/10 p-3"
            >
              <div class="grid grid-cols-3 gap-3">
                <div
                  v-for="(c, i) in s.grid"
                  :key="i"
                  :class="[
                    'relative rounded-md overflow-hidden border cursor-pointer',
                    'focus:outline-none focus:ring-2 focus:ring-white/30',
                    s.gridItemCls ?? 'border-white/20 bg-black/40',
                  ]"
                  role="button"
                  tabindex="0"
                  @click="openMem(c.memId)"
                  @keydown.enter.prevent="openMem(c.memId)"
                  @keydown.space.prevent="openMem(c.memId)"
                >
                  <span
                    v-if="s.showIndex !== false"
                    :class="[
                      'absolute top-1 left-1 text-[10px] font-semibold',
                      s.indexCls ?? 'text-white/80',
                    ]"
                    >{{ String(i + 1).padStart(2, '0') }}</span
                  >
                  <div class="aspect-[3/4]">
                    <img :src="c.img" class="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              <!-- 3:1 박스 -->
              <div class="mt-3 -mx-1 md:-mx-2">
                <div class="rounded-md px-2">
                  <div class="grid grid-cols-4 items-center gap-2">
                    <div class="col-span-3">
                      <div class="flex items-center justify-center gap-2">
                        <template v-for="(a, i) in s.atkIcons" :key="i">
                          <img :src="a" :class="['w-10 h-10 object-contain', s.atkIconCls]" />
                          <span
                            v-if="i < s.atkIcons.length - 1"
                            :class="s.atkSepCls ?? 'text-[10px] md:text-xs text-white/70 select-none'"
                          >{{ s.atkSepText ?? 'or' }}</span>
                        </template>
                      </div>
                      <div class="mt-1 text-center text-[11px] md:text-xs text-white/85">
                        {{ s.atkLabel ?? '공격력' }}
                      </div>
                    </div>
                    <div class="col-span-1 relative pl-3">
                      <span class="absolute left-0 top-1/2 -translate-y-1/2 h-[70%] w-px" :class="s.dividerCls ?? 'bg-white/20'"/>
                      <div class="flex flex-col items-center">
                        <img :src="s.ultIcon" :class="['w-10 h-10 object-contain', s.ultIconCls]" />
                        <div
                          class="mt-1 text-white/85"
                          :class="((s.ultLabel ?? '필살기').trim().length > 5) ? 'text-[9px]' : 'text-[10px] md:text-xs'"
                        >
                          {{ s.ultLabel ?? '필살기' }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-3 border-t border-white/10 pt-2 text-center text-xs whitespace-nowrap">
                <span
                  class="inline-flex items-center gap-1 rounded-full px-3 py-1 font-semibold bg-white/10 border border-white/20"
                  :class="s.tierBadge.cls"
                >{{ s.tierBadge.text }}</span>

                <span class="ml-2 text-[12px] text-pink-300 font-semibold">{{ s.chipText }}</span>
                <span class="text-white/60"> / </span>
                <span class="text-[12px] text-red-400 font-semibold">{{ s.chipText2 }}</span>

                <span v-if="s.chipText3 && s.chipText3.trim()" class="text-white/60"> / </span>
                <span v-if="s.chipText3 && s.chipText3.trim()" class="text-[12px] text-red-400 font-semibold">
                  {{ s.chipText3 }}
                </span>
              </div>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation v-if="slidesLen > 1" />
        </template>
      </Carousel>

      <transition name="fade">
  <div v-if="overlayShown" class="pointer-events-none absolute inset-0 z-[60]">
    <div
      class="pointer-events-auto absolute -translate-x-full"
      :style="{ top: tierBtnPos.top + 'px', left: tierBtnPos.left + 'px' }"
      @click.stop
    >
          <div class="relative">
            <button
              type="button"
              class="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5
                     bg-white/10 text-white/90 border border-white/20
                     hover:bg-white/15 hover:border-white/30 transition whitespace-nowrap"
              :class="sizeClass(triggerLabel(props.tabA?.[activeIdx] ?? ({} as any)))"
              :aria-expanded="openTierFor===activeIdx"
              @click.stop="toggleTierList(activeIdx)"
            >
              <svg viewBox="0 0 24 24" class="w-3.5 h-3.5" fill="currentColor" aria-hidden="true">
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
              <span class="font-semibold">
                {{ triggerLabel(props.tabA?.[activeIdx] ?? ({} as any)) }}
              </span>
            </button>

            <transition name="fade">
              <div
                v-if="openTierFor===activeIdx"
                class="absolute right-0 top-full mt-2 min-w-[200px] max-h-60 overflow-auto
                       rounded-md bg-[#1A1C24] border border-white/15 shadow-xl p-1 z-[1001]"
              >
                <button
                  v-for="opt in tierOptions"
                  :key="opt.label"
                  type="button"
                  class="w-full text-left px-2.5 py-1 rounded
                         text-[12px] text-white/85 hover:bg-white/10
                         flex items-center justify-between gap-2 whitespace-nowrap"
                  @click="(carouselA?.slideTo ?? carouselA?.to)?.(opt.index); openTierFor=null; updateTierBtnPos()"
                >
                  <span class="truncate max-w-[220px]">{{ opt.label }}</span>
                  <span v-if="opt.index === activeIdx" class="text-white/50"></span>
                </button>
              </div>
            </transition>
          </div>
        </div>
      </div>
      </transition>
    </slot>

    <!-- ===== 모달 / 라이트박스 ===== -->
    <transition name="fade">
      <div v-if="modalOpen" class="fixed inset-0 z-[95]" aria-modal="true" role="dialog">
        <div class="absolute inset-0 bg-black/70 backdrop-blur-[2px]" @click="closeMem"></div>

        <div class="absolute inset-0 grid place-items-center p-4" @click.self="closeMem">
          <div
            class="w-full max-w-2xl rounded-2xl overflow-hidden bg-[#111217] text-white border border-white/10 shadow-2xl"
            @click.stop
          >
            <div class="relative h-20 md:h-24 overflow-hidden mt-[-22px]">
              <img
                :src="activeMem?.banner || ''"
                class="block w-full h-full object-cover z-0 select-none"
                :style="{
                  objectPosition: activeMem?.bannerObjectPosition || '50% 50%',
                  transform:
                    (activeMem?.bannerScale ? `scale(${activeMem.bannerScale}) ` : '') +
                    (activeMem?.bannerShiftY ? `translateY(${activeMem.bannerShiftY})` : ''),
                  transformOrigin: activeMem?.bannerOrigin || '50% 50%',
                }"
                alt=""
              />
              <span
                class="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[2px] bg-gradient-to-r from-transparent via-white/45 to-transparent"
              ></span>

              <div class="absolute left-3 bottom-2 flex items-center gap-2">
                <div
                  class="px-2 py-1 rounded-md bg-black/40 backdrop-blur-[2px] border border-white/15"
                >
                  <span class="text-base md:text-lg font-bold leading-none">{{
                    activeMem?.name || ""
                  }}</span>
                </div>
                <div class="flex">
                  <svg
                    v-for="n in activeMem?.rarity || 0"
                    :key="n"
                    viewBox="0 0 24 24"
                    class="w-4 h-4 md:w-5 md:h-5 text-amber-300 drop-shadow"
                    fill="currentColor"
                  >
                    <path
                      d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"
                    />
                  </svg>
                </div>
              </div>

              <button
                class="absolute top-8 right-2 rounded-md px-2 py-1 bg-white/10 border border-white/20 hover:bg-white/15"
                @click="closeMem"
                aria-label="닫기"
              >
                ✕
              </button>
            </div>

            <div v-if="activeMem" class="px-4 md:px-5 py-4 space-y-5">
              <section>
                <div
                  class="mx-auto max-w-md rounded-xl border border-white/10 bg-white/[0.02] p-2 md:p-3"
                >
                  <div class="grid grid-cols-3 gap-2 mb-1">
                    <div
                      v-for="(slot, i) in activeMem.resonanceSlots || []"
                      :key="'label' + i"
                      class="text-center text-[11px] md:text-[12px] font-semibold text-white/75"
                    >
                      {{ slot.label }}
                    </div>
                  </div>
                  <div class="grid grid-cols-3 gap-2">
                    <div
                      v-for="(slot, i) in activeMem.resonanceSlots || []"
                      :key="'col' + i"
                      class="flex flex-col items-center gap-1.5 md:gap-2"
                    >
                      <button
                        type="button"
                        class="w-full rounded-lg overflow-hidden bg-black/30 border border-white/12 group"
                        @click="openZoom(slot.face)"
                        aria-label="face 확대"
                      >
                        <div class="aspect-[9/16]">
                          <img
                            :src="slot.face"
                            class="w-full h-full object-contain cursor-zoom-in group-active:scale-[.99] transition"
                            alt=""
                          />
                        </div>
                      </button>
                      <div class="w-full rounded-lg overflow-hidden bg-black/30 border border-white/12">
                        <div class="aspect-[4/5]">
                          <img :src="slot.full" class="w-full h-full object-contain" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div class="mx-auto max-w-md">
                  <div class="grid grid-cols-4 text-center rounded-lg overflow-hidden text-[12px]">
                    <div class="bg-rose-800/70 px-2 py-1.5 font-bold">HP</div>
                    <div class="bg-rose-800/70 px-2 py-1.5 font-bold">Crit</div>
                    <div class="bg-rose-800/70 px-2 py-1.5 font-bold">ATK</div>
                    <div class="bg-rose-800/70 px-2 py-1.5 font-bold">DEF</div>

                    <div class="bg-white/[0.04] px-2 py-2">{{ activeMem.stats.hp }}</div>
                    <div class="bg-white/[0.04] px-2 py-2">{{ activeMem.stats.crit }}</div>
                    <div class="bg-white/[0.04] px-2 py-2">{{ activeMem.stats.atk }}</div>
                    <div class="bg-white/[0.04] px-2 py-2">{{ activeMem.stats.def }}</div>
                  </div>
                </div>
              </section>

              <section>
                <h4 class="text-base font-bold mb-1.5">세트 효과</h4>
                <div class="space-y-2.5 text-[13px] leading-relaxed">
                  <div>
                    <div class="font-extrabold text-white/95">2세트</div>
                    <p class="mt-1 text-white/85" v-html="activeMem.effects.two"></p>
                  </div>
                  <div>
                    <div class="font-extrabold text-white/95">4세트</div>
                    <p class="mt-1 text-white/85" v-html="activeMem.effects.four"></p>
                  </div>
                </div>
              </section>
            </div>

            <div v-else class="p-6 text-center text-white/60 text-sm">불러오는 중…</div>
          </div>
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div
        v-if="zoomSrc"
        class="fixed inset-0 z-[100] bg-black/85 grid place-items-center p-4"
        @click.self="closeZoom"
        aria-modal="true"
        role="dialog"
      >
        <button
          class="absolute top-3 right-4 rounded-md px-2 py-1 text-white/85 hover:text-white hover:bg-white/10 border border-white/20"
          type="button"
          @click="closeZoom"
          aria-label="닫기"
        >
          ✕
        </button>
        <img
          :src="zoomSrc"
          class="max-h-[90vh] max-w-[92vw] object-contain rounded-lg shadow-2xl"
          alt=""
        />
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active { transition: opacity .12s ease }
.fade-enter-from,
.fade-leave-to { opacity: 0 }

.fade-enter-active, .fade-leave-active { transition: opacity .12s ease }
.fade-enter-from, .fade-leave-to { opacity: 0 }

</style>
