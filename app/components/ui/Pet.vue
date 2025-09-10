<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from "vue";
import { petSkillData, type PetModalSkill } from "@/data/petskillData";

type Fit = "cover" | "contain" | "fill" | "none" | "scale-down";
type ThumbSkill = { img: string; label: string };

const props = defineProps<{
  petImg: string;
  petName: string;
  title?: string;
  skills: ThumbSkill[];
  modalKey?: string;
  petBoxClass?: string;
  petFit?: Fit;
  petObjectPosition?: string;
  petZoom?: number;
  petTransformOrigin?: string;
  petImgClass?: string;
  petNameClass?: string;
}>();

const fitClass = computed(() => {
  switch (props.petFit) {
    case "contain":
      return "object-contain";
    case "fill":
      return "object-fill";
    case "none":
      return "object-none";
    case "scale-down":
      return "object-scale-down";
    default:
      return "object-cover";
  }
});

const thumbNameSize = (t?: string) => {
  const len = (t?.trim() ?? "").length;
  if (len > 12) return "text-[9px] md:text-[10px]";
  if (len > 6) return "text-[10px] md:text-[11px]";
  return "text-[11px] md:text-[11px]";
};

const imgStyle = computed(() => {
  const s: Record<string, string> = {};
  if (props.petObjectPosition) s.objectPosition = props.petObjectPosition;
  if (props.petZoom && props.petZoom !== 1)
    s.transform = `scale(${props.petZoom})`;
  if (props.petTransformOrigin) s.transformOrigin = props.petTransformOrigin;
  return s;
});

/* 모달 스테이터스 */
const modalOpen = ref(false);
const openModal = () => (modalOpen.value = true);
const closeModal = () => (modalOpen.value = false);
const onKey = (e: KeyboardEvent) => {
  if (e.key === "Escape") closeModal();
};
onMounted(() => document.addEventListener("keydown", onKey));
onBeforeUnmount(() => document.removeEventListener("keydown", onKey));

const modalSource = computed(() =>
  props.modalKey ? petSkillData[props.modalKey] : undefined
);

/* 모달 헤더 */
const modalLevel = computed(() => modalSource.value?.level);

/* 모달 스킬 */
const modalBlocks = computed(() => {
  if (modalSource.value?.skills?.length) return modalSource.value.skills;
  return (props.skills || []).map((s, i) => ({
    img: s.img,
    label: s.label,
    kind: i === 0 ? "active" : "passive",
    desc: '<span class="text-white/60">설명이 준비 중입니다.</span>',
    level: undefined,
  }));
});

const pillClass = (kind: "active" | "passive") =>
  kind === "active"
    ? "bg-rose-500/15 text-rose-200 border border-rose-400/30"
    : "bg-emerald-500/15 text-emerald-200 border border-emerald-400/30";
</script>

<template>
  <div class="rounded-md bg-black/30 p-3">
    <div class="grid grid-cols-3 gap-3 py-[13px]">
      <div class="col-span-1 flex flex-col items-center">
        <button
          type="button"
          class="group w-full"
          @click="openModal"
          aria-label="보조기 상세 열기"
        >
          <div
            :class="
              petBoxClass ||
              'w-full max-w-[120px] aspect-square overflow-hidden rounded-md border-2 border-red-500'
            "
            class="relative"
          >
            <img
              :src="petImg"
              :class="['w-full h-full', fitClass, petImgClass]"
              :style="imgStyle"
            />
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
            (petName || '').trim().length > 6
              ? 'text-sm md:text-[12px]'
              : petNameClass || 'text-sm md:text-sm',
          ]"
          >{{ petName }}</span
        >
      </div>

      <div class="col-span-2 flex flex-col justify-center">
        <div
          class="text-center text-xs md:text-[12px] text-white/90 mb-2 md:mb-3"
        >
          <span
            class="inline-flex items-center rounded-full px-3 py-1 text-xs md:text-[12px] bg-white/10 text-white border border-white/20 backdrop-blur-[2px] shadow"
          >
            {{ title ?? "보조기 스킬 추천" }}
          </span>
        </div>

        <div class="grid grid-cols-3 gap-3 place-items-center">
          <div
            v-for="(s, i) in skills"
            :key="i"
            class="flex flex-col items-center"
          >
            <div
              class="relative w-full max-w-[90px] md:max-w-[100px] aspect-square rounded-md overflow-hidden border border-white/20"
            >
              <span
                class="absolute top-1 left-1 px-1 rounded bg-white/90 text-black text-[10px] font-bold leading-none"
                >{{ i + 1 }}</span
              >
              <img
                :src="s.img"
                class="w-full h-full object-cover object-center"
              />
            </div>
            <span
              :class="[
                'block mt-1 h-4 md:h-5 leading-tight text-white/90 text-center',
                'overflow-hidden text-ellipsis whitespace-nowrap',

                thumbNameSize(s.label),
              ]"
            >
              {{ s.label }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 모달  -->
  <teleport to="body">
    <transition name="pet-fade">
      <div
        v-if="modalOpen"
        class="fixed inset-0 z-[90]"
        aria-modal="true"
        role="dialog"
      >
        <div
          class="absolute inset-0 bg-black/70 backdrop-blur-[2px]"
          @click="closeModal"
        ></div>

        <div class="absolute inset-0 grid place-items-center p-4">
          <div
            class="w-full max-w-2xl rounded-xl bg-[#14141C] text-white shadow-2xl border border-white/10 animate-[petIn_200ms_ease-out]"
          >
            <!-- 헤더 -->
            <div class="flex items-center gap-3 p-4 border-b border-white/10">
              <div
                class="h-[60px] w-[60px] rounded-md overflow-hidden border border-white/15"
              >
                <img :src="petImg" class="w-full h-full object-cover" />
              </div>
              <div class="flex-1">
                <div class="text-[17px] md:text-lg font-bold text-white/95">
                  {{ petName }}
                </div>
                <div class="mt-1 flex flex-wrap gap-1">
                  <span
                    v-if="modalLevel !== undefined"
                    class="inline-flex items-center rounded-md px-2 py-0.5 text-[11px] bg-white/10 border border-white/20"
                  >
                    Level {{ modalLevel }}
                  </span>
                </div>
              </div>
              <button
                class="ml-2 mb-6 text-white/80 hover:text-white rounded-md p-1.5 hover:bg-white/10 transition"
                @click="closeModal"
                aria-label="닫기"
              >
                ✕
              </button>
            </div>

            <!-- 본문 -->
            <div
              class="p-4 md:p-5 space-y-3 max-h-[70vh] overflow-y-auto no-scrollbar"
            >
              <div
                v-for="(b, i) in modalBlocks"
                :key="i"
                class="flex gap-3 p-3 rounded-lg bg-white/[0.04] border border-white/10"
              >
                <div
                  class="h-[60px] w-[60px] shrink-0 rounded-md bg-white/[0.06] border border-white/15 grid place-items-center"
                >
                  <img
                    :src="b.img"
                    class="w-[50px] h-[50px] object-contain opacity-90"
                    alt=""
                  />
                </div>

                <div class="flex-1">
                  <div class="flex items-center gap-2 flex-wrap">
                    <div class="font-semibold text-white/95">{{ b.label }}</div>
                    <!-- 뱃지 -->
                    <span
                      class="inline-flex items-center rounded-full px-2 py-0.5 text-[11px]"
                      :class="pillClass(b.kind)"
                    >
                      {{ b.kind === "active" ? "액티브" : "패시브" }}
                    </span>
                    <span
                      v-if="b.level !== undefined"
                      class="inline-flex items-center rounded-full px-2 py-0.5 text-[11px] bg-white/10 border border-white/20 text-white/85"
                    >
                      Level {{ b.level }}
                    </span>
                  </div>
                  <div
                    class="mt-1 text-[13px] md:text-[14px] leading-relaxed text-white/85"
                    v-html="b.desc"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style scoped>
.pet-fade-enter-active,
.pet-fade-leave-active {
  transition: opacity 0.18s ease;
}
.pet-fade-enter-from,
.pet-fade-leave-to {
  opacity: 0;
}
@keyframes petIn {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
:global(.pet-modal)::-webkit-scrollbar {
  width: 8px;
}
:global(.pet-modal)::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 6px;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
