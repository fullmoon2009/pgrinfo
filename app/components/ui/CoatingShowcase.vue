<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from "vue";
import type { CoatingItem } from "@/data/coatingData";

type CoatingType = CoatingItem["type"] | "dorm";

const props = defineProps<{ items?: CoatingItem[] }>();
const data = computed(() => (props.items?.length ? props.items : []));

const zoomSrc = ref<string | null>(null);
const openZoom = (src: string) => (zoomSrc.value = src);
const closeZoom = () => (zoomSrc.value = null);
const onKey = (e: KeyboardEvent) => {
  if (e.key === "Escape") closeZoom();
};
onMounted(() => document.addEventListener("keydown", onKey));
onBeforeUnmount(() => document.removeEventListener("keydown", onKey));

const openLong = ref<Set<string>>(new Set());
const isOpen = (id: string) => openLong.value.has(id);
const toggleLong = (id: string) => {
  const s = new Set(openLong.value);
  s.has(id) ? s.delete(id) : s.add(id);
  openLong.value = s;
};

const typePillClass = (t: CoatingType | "normal") =>
  t === "special"
    ? "bg-rose-500/10 text-rose-200 border border-rose-400/30"
    : t === "gacha"
    ? "bg-sky-500/10 text-sky-200 border border-sky-400/30"
    : t === "dorm"
    ? "bg-[#E6B800]/10 text-[#E6B800] border border-[#E6B800]/30"
    : /* normal */
      "bg-white/8 text-white/70 border border-white/20";

const normalBadge = (i: number) =>
  ["기본", "초급 해방", "최종 해방"][i] ?? "기본";

const bannerOf = (c: CoatingItem) =>
  c.images.banner ||
  c.images.verticals?.[0] ||
  c.images.portraits?.[0] ||
  c.images.fullBody ||
  "";

const portrait0Of = (c: CoatingItem) =>
  c.images.portraits?.[0] ||
  c.images.verticals?.[0] ||
  c.images.fullBody ||
  c.images.banner ||
  "";

const portrait1Of = (c: CoatingItem) =>
  c.images.portraits?.[1] ||
  c.images.verticals?.[1] ||
  c.images.fullBody ||
  c.images.banner ||
  "";

const fullBodyOf = (c: CoatingItem) =>
  c.images.fullBody ||
  c.images.verticals?.[2] ||
  c.images.verticals?.[(c.images.verticals?.length ?? 1) - 1] ||
  c.images.banner ||
  "";
</script>

<template>
  <div class="py-3"></div>
  <div class="rounded-md max-w-4xl w-full mx-auto bg-[#0A0A23]/30 p-4">
    <div class="flex items-center justify-between mb-3">
      <h3 class="text-white/90 font-bold text-lg"></h3>
      <span class="text-[12px] text-white/60">프리뷰를 클릭하면 확대</span>
    </div>

    <div class="columns-1 md:columns-2 gap-4 text-left [column-fill:auto] md:[column-fill:balance]">
      <div
        v-for="c in data"
        :key="c.id"
        class="mb-4 rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04]"
      >
        <!-- ================== normal 레이아웃 ================== -->
        <div v-if="c.type === 'normal'" class="p-3 space-y-2">
          <!-- 배경 이미지 -->
          <div
            v-if="c.images.banner"
            class="rounded-lg overflow-hidden bg-black/30 border border-white/10"
          >
            <div class="aspect-[16/9] grid place-items-center">
              <img
                :src="c.images.banner"
                class="max-w-full max-h-full object-contain"
                alt=""
              />
            </div>
          </div>

          <!-- vertical 3개 -->
          <div class="grid grid-cols-3 gap-2">
            <div
              v-for="(img, i) in c.images.verticals || []"
              :key="i"
              class="relative rounded-lg overflow-hidden border border-white/10 bg-black/30"
            >
              <!-- vertical 이미지 -->
              <img
                :src="img"
                class="block w-full py-2 max-h-[210px] object-contain cursor-zoom-in"
                @click="openZoom(img)"
                :alt="`${c.name} - ${normalBadge(i)}`"
              />
              <span
                class="absolute left-2 top-2 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold bg-white/12 text-white/90 border border-white/25 backdrop-blur-[2px] shadow"
              >
                {{ normalBadge(i) }}
              </span>
            </div>
          </div>
        </div>

        <!-- ================== 공용 레이아웃 ================== -->
        <div v-else class="p-3 space-y-2">
          <!-- 1열 배경 -->
          <div class="rounded-lg overflow-hidden bg-black/30">
            <div class="aspect-[16/9] grid place-items-center">
              <img
                :src="bannerOf(c)"
                class="max-w-full max-h-full object-contain"
                alt=""
              />
            </div>
          </div>

          <!-- 2열 -->
          <div class="rounded-xl border border-white/10 p-2">
            <div class="grid grid-cols-3 gap-2 items-center">
              <!-- 코팅 -->
              <div
                class="rounded-lg overflow-hidden border border-white/10 bg-black/30"
              >
                <div class="aspect-[3/4] grid place-items-center">
                  <img
                    :src="portrait0Of(c)"
                    class="max-w-full max-h-full object-contain"
                    alt=""
                  />
                </div>
              </div>
              <!-- 무기 -->
              <div
                class="rounded-lg overflow-hidden border border-white/10 bg-black/30"
              >
                <div class="aspect-[3/4] grid place-items-center">
                  <img
                    :src="portrait1Of(c)"
                    class="max-w-full max-h-full object-contain"
                    alt=""
                  />
                </div>
              </div>
              <!-- 전신 -->
              <div
                class="rounded-lg overflow-hidden border border-white/10 bg-black/30"
              >
                <div class="aspect-[9/16] grid place-items-center">
                  <img
                    :src="fullBodyOf(c)"
                    class="max-w-full max-h-[210px] object-contain cursor-zoom-in"
                    @click="openZoom(fullBodyOf(c))"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="px-4 pb-3 pt-2 border-t border-white/10">
          <div class="flex items-center gap-2">
            <div class="text-white font-semibold truncate mb-2">
              {{ c.name }}
            </div>

            <span
              class="text-[10px] px-2 py-0.5 mb-1 rounded-full"
              :class="typePillClass((c.type as CoatingType) || 'normal')"
            >
              {{
                c.type === "special"
                  ? "특수 코팅"
                  : c.type === "gacha"
                  ? "가챠 코팅"
                  : c.type === "dorm"
                  ? "숙소 코팅"
                  : "일반 코팅"
              }}
            </span>

            <div class="ml-auto">
              <button
                v-if="c.images.long"
                type="button"
                class="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[8px] md:text-[11px] border border-white/20 bg-white/[0.06] hover:bg-white/[0.12] text-white/85 transition shadow-sm"
                @click="toggleLong(c.id)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-3.5 h-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M10 3c-4.418 0-8 5-8 7s3.582 7 8 7 8-5 8-7-3.582-7-8-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
                  />
                </svg>
                {{ isOpen(c.id) ? "소개 이미지 닫기" : "소개 이미지 보기" }}
              </button>
            </div>
          </div>

          <div class="mt-2 flex flex-wrap items-center gap-2">
            <template v-if="c.type === 'normal' || c.type === 'dorm'">
              <span class="text-[12px] text-white/70"
                >출시 {{ c.release }}</span
              >
              <span class="text-white/30">·</span>
              <span class="text-[12px] text-white/70">{{ c.price }}</span>
            </template>
            <template v-else>
              <span
                class="inline-flex items-center rounded-full px-2 py-0.5 text-[11px] bg-white/5 text-white/80 border border-white/15"
              >
                출시 {{ c.release }}
              </span>
              <span
                class="inline-flex items-center rounded-full px-2 py-0.5 text-[11px] bg-white/5 text-white/80 border border-white/15"
              >
                {{ c.price }}
              </span>
            </template>
          </div>
        </div>

        <transition name="fade">
          <div v-if="c.images.long && isOpen(c.id)" class="px-4 pb-4">
            <div
              class="rounded-lg overflow-hidden border border-white/10 bg-black/40"
            >
              <div class="w-full grid place-items-center">
                <img
                  :src="c.images.long"
                  class="max-w-full object-contain"
                  alt=""
                />
              </div>
            </div>

            <div class="mt-2 flex justify-end">
              <button
                type="button"
                class="inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-[12px] bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 text-white/90 transition"
                @click="toggleLong(c.id)"
                aria-label="소개 이미지 닫기"
              >
                ✕
              </button>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>


  <transition name="fade">
    <div
      v-if="zoomSrc"
      class="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm grid place-items-center p-4"
      @click.self="closeZoom"
      aria-modal="true"
      role="dialog"
    >
      <button
        class="absolute top-3 right-4 rounded-md px-2 py-1 text-white/80 hover:text-white hover:bg-white/10 border border-white/20"
        type="button"
        @click="closeZoom"
        aria-label="닫기"
      >
        ✕
      </button>
      <img
        :src="zoomSrc"
        class="max-h-[90vh] max-w-[92vw] object-contain shadow-2xl rounded-lg"
        alt=""
      />
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.18s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
