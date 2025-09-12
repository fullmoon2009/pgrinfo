<script setup lang="ts">
import HeroMosaic from "@/components/ui/Profile.vue";
import NameBadge from "@/components/ui/NameBadge.vue";
import QuickNavPills from "@/components/ui/NavPills.vue";
import AttrRoleCards from "@/components/ui/TypeRoleCards.vue";
import SectionPill from "@/components/ui/SectionPill.vue";
import WeaponSkills from "@/components/ui/WeaponSkills.vue";
import SupportPet from "@/components/ui/Pet.vue";
import MemoryCarousel from "@/components/ui/Memory.vue";
import RankTable from "@/components/ui/Rank.vue";
import PartyBox from "@/components/ui/Party.vue";
import CharacterSkills from "@/components/ui/CharacterSkills.vue";
import { coatingData } from "@/data/coatingData";
import CoatingShowcase from "@/components/ui/CoatingShowcase.vue";
import Navbar from "@/components/ui/Navbar.vue";
import CycleSection from "@/components/ui/Cycle.vue";
import pianissimoCycles from "~/data/cycles/pianissimo";

const viewMode = ref<"guide" | "coating">("guide");
const segClass = (m: "guide" | "coating") =>
  viewMode.value === m
    ? "bg-white/15 text-white border-white/40"
    : "bg-white/10 text-white/70 hover:text-white border-white/20";

const cycleTab = ref<"tabA" | "tabB">("tabA");

const cyclerankTab = ref<"sswx" | "ss03ult" | "ss33ult" | "ss34ult" >("sswx");

const currentSection = computed(() => {
  const key = `${cycleTab.value}:${cyclerankTab.value}` as const;
  return (pianissimoCycles.sections as any)[key];
});

const mode = ref<"first" | "repeat">("first");

const allowedRanksByTab = {
  tabA: ["sswx", "ss03ult", "ss33ult", "ss34ult"] as const,
  tabB: [""] as const,
} as const;

const lastRankByTab: Record<"tabA" | "tabB", typeof cyclerankTab.value> = {
  tabA: "sswx",
  //tabB: "2ult25",
};

function isRankValidForTab(tab: "tabA" | "tabB", rank: string) {
  return (allowedRanksByTab[tab] as readonly string[]).includes(rank);
}

watch(cycleTab, (newTab) => {
  const remembered = lastRankByTab[newTab];
  const fallback = newTab === "tabA" ? "2ult25" : "2ult15";
  cyclerankTab.value = isRankValidForTab(newTab, remembered)
    ? remembered
    : fallback;
});

watch(cyclerankTab, (newRank) => {
  const tab = cycleTab.value;
  if (isRankValidForTab(tab, newRank)) {
    lastRankByTab[tab] = newRank;
  }
});

const forceReload = false;

const pillClass = (name) =>
  [
    "inline-flex items-center rounded-full px-3 py-1 font-semibold border transition",
    mode.value === name
      ? "bg-white/20 text-white border-white/40"
      : "bg-white/10 text-white/70 hover:text-white hover:bg-white/15 border-white/20",
    "focus:outline-none focus:ring-2 focus:ring-white/40 active:scale-[0.98]",
  ].join(" ");

const pills = [
  { label: "장비 & 의식 세팅", target: "equip" },
  { label: "랭크 추천", target: "rank" },
  { label: "파티 구성", target: "party" },
  { label: "사이클 가이드", target: "cycle" },
];

// 장비 박스

const weaponSkills = [
  { id: "count", img: "/assets/wskills/count.png", label: "죽음의 카운트다운" },
  { id: "shield", img: "/assets/wskills/shield.webp", label: "범역 해체" },
  { id: "light", img: "/assets/wskills/light.png", label: "광휘의 파편" },
];

const MID = {
  so: "sothoth",
  he: "heisen",
  dv: "davinci",
  ji: "jiyuan",
  gu: "guinevere",
  sh: "shakespeare",
  ba: "bathlon",
  ad: "adolf"
} as const;

const slidesA = [
  {
    typeIcon: "/assets/types/nihil.png",
    typeBorderCls: "border-2 border-[#C00088]",
    grid: [
      { img: "/assets/memory/sothoth1.png", memId: MID.so },
      { img: "/assets/memory/sothoth2.png", memId: MID.so },
      { img: "/assets/memory/sothoth3.png", memId: MID.so },
      { img: "/assets/memory/sothoth1.png", memId: MID.so },
      { img: "/assets/memory/adolf2.webp", memId: MID.ad },
      { img: "/assets/memory/adolf3.webp", memId: MID.ad },
    ],
    atkIcons: [
      "/assets/memory/memoryatk1.png",
      "/assets/memory/memoryatk2.png",
      "/assets/memory/memoryatk3.png",
    ],
    atkLabel: "공격력",
    ultIcon: "/assets/skillball/parhelionult.webp",
    ultLabel: "필살기",
    tierBadge: { text: "전랭크", cls: "" },
    typeName: "공허",
    chipText: "소토스 x4",
    chipText2: "후루루 x4",
    chipText3: "",
  },
];

// 환통/격전점
const slidesB = [
{
    typeIcon: "/assets/roleIcons/amp.png",
    typeBorderCls: "border-2 border-white",
    grid: [
      { img: "/assets/memory/davinci1.png", memId: MID.dv },
      { img: "/assets/memory/davinci2.png", memId: MID.dv },
      { img: "/assets/memory/davinci3.png", memId: MID.dv },
      { img: "/assets/memory/davinci1.png", memId: MID.dv },
      { img: "/assets/memory/guine2.png", memId: MID.gu },
      { img: "/assets/memory/guine3.png", memId: MID.gu },
    ],
    atkIcons: [
      "/assets/memory/memoryatk1.png",
      "/assets/memory/memoryatk2.png",
      "/assets/memory/memoryatk3.png",
    ],
    atkLabel: "공격력",
    ultIcon: "/assets/roleIcons/observer.webp",
    ultLabel: "관측자",
    tierBadge: { text: "SSS 이상/증폭형 대체", cls: "text-yellow-500" },
    typeName: "",
    chipText: "다빈치 x4",
    chipText2: "퀴니 x4",
    chipText3: "",
  },
  {
    typeIcon: "/assets/roleIcons/observer.webp",
    typeBorderCls: "border-2 border-white",
    grid: [
      { img: "/assets/memory/shake1.png", memId: MID.sh },
      { img: "/assets/memory/bathlon2.png", memId: MID.ba },
      { img: "/assets/memory/heisen3.png", memId: MID.he },
      { img: "/assets/memory/jiyuan1.png", memId: MID.ji },
      { img: "/assets/memory/adolf2.webp", memId: MID.ad },
      { img: "/assets/memory/adolf3.webp", memId: MID.ad },
    ],
    atkIcons: [
      "/assets/memory/memoryatk1.png",
      "/assets/memory/memoryatk2.png",
      "/assets/memory/memoryatk3.png",
    ],
    atkLabel: "공격력",
    ultIcon: "/assets/skillball/parhelionult.webp",
    ultLabel: "필살기",
    tierBadge: { text: "SSS 이상/(화/암/뇌/빙)", cls: "text-yellow-500" },
    typeName: "",
    chipText: "속성의식 x4",
    chipText2: "후루루 x4",
    chipText3: "",
  }
];

const rightTab = ref<"tabA" | "tabB">("tabA");

// 랭크 데이터
const rankRows = [
  { rank: "S", recommend: "", note: "1회" },
  { rank: "SS", recommend: "★", note: "1회 + 해골" },
  { rank: "SS3", recommend: "", note: "" },
  { rank: "SS6", recommend: "", note: "" },
  { rank: "SSS", recommend: "★", note: "4회 + 해골" },
  { rank: "SSS3", recommend: "", note: "" },
  { rank: "SSS6", recommend: "", note: "" },
  { rank: "SSS+", recommend: "", note: "" },
];

// 파티 박스
// 파티 1
const party1 = {
  typeIcon: "/assets/types/nihil.png",
  columns: [
    {
      slides: [
        {
          img: "/assets/portrait/parhelion2.png",
          label: "이스마엘 · 환일",
          borderClass: "border-blue-500",
          badges: [{ text: "대장" }],
          roleIcons: [
            "/assets/roleIcons/observer.webp"
          ],
        },
        {
          img: "/assets/portrait/startrail2.png",
          label: "나나미 · 망성",
          borderClass: "border-blue-500",
          to: "/char/startrail",
          roleIcons: [
            "/assets/roleIcons/arm.png"
          ],
        },
        {
          img: "/assets/portrait/lucid2.png",
          label: "반즈 · 루시드",
          borderClass: "border-blue-500",
          to: "/char/lucid",
          roleIcons: [
            "/assets/roleIcons/arm.png"
          ],
        },
      ],
      showNav: true
    },
    {
      slides: [
        {
          img: "/assets/portrait/oblivion2.png",
          label: "루나 · 종언",
          borderClass: "border-red-500",
          to: "/char/oblivion",
          badges: [{ text: "선발" }],
          roleIcons: [
            "/assets/roleIcons/ann.webp"
          ],
        },
      ],
      showNav: true,
    },
    {
      slides: [
        {
          img: "/assets/portrait/geiravor2.png",
          label: "베라 · 작망",
          borderClass: "border-yellow-400",
          to: "/char/geiravor",
          roleIcons: [
            "/assets/roleIcons/amp.png"
          ],
        },
      ],
      showNav: true,
    },
  ],
};

/* 파티 2  */
// const party2 = {
//   typeIcon: "/assets/types/plazma.png",
//   columns: [
//     {
//       slides: [
//         {
//           img: "/assets/portrait/pyroath2.png",
//           label: "루시아 · 서염",
//           borderClass: "border-blue-500",
//           badges: [{ text: "대장" }],
//           to: "/char/pyroath"
//         },
//       ],
//     },
//     {
//       slides: [
//         {
//           img: "/assets/portrait/daemonissa2.png",
//           label: "릴리스 · 데모니사",
//           borderClass: "border-red-500",
//         },
//       ],
//       showNav: false,
//     },
//     {
//       slides: [
//         {
//           img: "/assets/portrait/startrail2.png",
//           label: "나나미 · 망성",
//           borderClass: "border-yellow-400",
//           to: "/char/startrail",
//           badges: [{ text: "선발" }],
//         },
//       ],
//     },
//   ],
// };

// 파티 2가 존재하지 않을 시 사용
const party2 = ref<Party | null>(null)


const hasParty2 = computed(
  () => !!party2 && Array.isArray(party2.columns) && party2.columns.length > 0
);

// 사이클 박스
// 비디오 소스 매핑

const VIDEO_BASE = "https://pgr-video-proxy.fullmoon2009.workers.dev/video";
const video = (name: string) => `${VIDEO_BASE}/${name}`;

const charKey = "parhelion";

const myCoatings = computed(() =>
  coatingData.filter((c) => c.char === charKey)
);
</script>

<template>
  <Navbar />
  <div class="min-h-screen bg-[#1a1a1a]/95 text-white p-3">
    <div class="p-2 md:p-3 mx-auto"></div>
    <!-- 프로필 이미지 -->
    <HeroMosaic
      leftTop="/assets/portrait/parhelion1.png"
      leftBottom="/assets/portrait/parhelion2.png"
      rightTall="/assets/standings/parhelionS.png"
      rightContainerClass="w-[125px] h-[256px]"
      rightFit="cover"
      rightObjectPosition="70% 40%"
      rightImgClass="scale-[2] origin-[55%_30%] translate-y-[25%]"
    />

    <!-- 이름 배지 -->
    <NameBadge text="이스마엘 · 환일" />

    <div class="flex justify-center mt-2 mb-4">
      <div
        role="tablist"
        class="inline-flex rounded-full p-1 bg-[#0A0A23]/40 border border-white/15 shadow-sm"
      >
        <button
          role="tab"
          :aria-selected="viewMode === 'guide'"
          @click="viewMode = 'guide'"
          class="px-4 py-1.5 text-[12px] md:text-sm rounded-full border transition"
          :class="segClass('guide')"
        >
          가이드
        </button>
        <button
          role="tab"
          :aria-selected="viewMode === 'coating'"
          @click="viewMode = 'coating'"
          class="ml-1 px-4 py-1.5 text-[12px] md:text-sm rounded-full border transition"
          :class="segClass('coating')"
        >
          코팅 정보
        </button>
      </div>
    </div>

    <Transition name="fade">
      <div v-if="viewMode === 'guide'" class="max-w-4xl w-full mx-auto">
        <!-- 퀵 네비 -->
        <QuickNavPills :items="pills" />

        <!-- 구분선 -->
        <div
          class="mx-auto max-w-4xl h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none mt-7"
        ></div>

        <!-- 속성 & 직업 아이콘 -->
        <AttrRoleCards
          :left="[
            {
              src: '/assets/types/nihil.png',
              label: '공허',
              border: 'border-[#C00088]',
            },
            {
              src: '/assets/types/fuzz.png',
              label: '혼란',
              border: 'border-[#DA70D6]',
            },
          ]"
          :right="{ src: '/assets/roleIcons/observer.webp', label: '관측자' }"
        />

        <!-- 스킬 박스 -->
        <CharacterSkills char-key="parhelion" />

        <!-- 장비 & 의식 세팅 -->
        <div
          id="equip"
          class="max-w-4xl w-full mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 px-2 py-3 md:px-6 md:py-3 rounded-md bg-[#0A0A23]/30"
        >
          <SectionPill text="장비 & 의식 세팅" />

          <div
            class="col-span-2 bg-black/50 rounded-md px-4 text-white space-y-4"
          >
            <WeaponSkills
              weapon-id="key"
              weapon-img="/assets/arms/key.webp"
              weapon-name="★6 시작과 종말의 지팡이"
              :skills="weaponSkills"
              weapon-box-class="w-[110px] h-[200px] md:w-[120px] md:h-[220px] overflow-hidden rounded-md border-2 border-orange-500"
              weapon-fit="cover"
              weapon-object-position="66% 15%"
              :weapon-zoom="1.4"
              weapon-transform-origin="0% 40%"
            />

            <SupportPet
              pet-img="/assets/pets/pandora.webp"
              pet-name="S · 서능"
              :skills="[
                {
                  img: '/assets/petskills/pandora1.webp',
                  label: '별의 귀환',
                },
                {
                  img: '/assets/petskills/pandora2.webp',
                  label: '운명 통합',
                },
                {
                  img: '/assets/petskills/pandora3.webp',
                  label: '유성 소멸',
                },
              ]"
              modal-key="pandora"
            />
          </div>

          <div class="col-span-2 bg-black/50 rounded-md px-4 text-white">
            <div
              role="tablist"
              class="flex gap-2 mb-4 mt-2 border-b border-white/20"
            >
              <button
                class="px-3 py-2 md:px-4 md:py-[10px] rounded-t-md text-sm md:text-[16px]"
                :class="
                  rightTab === 'tabA'
                    ? 'bg-white/10 text-white'
                    : 'text-white/70 hover:text-white/90'
                "
                @click="rightTab = 'tabA'"
              >
                분쟁
              </button>
              <button
                class="px-3 py-2 md:px-4 md:py-[10px] rounded-t-md text-sm md:text-[16px]"
                :class="
                  rightTab === 'tabB'
                    ? 'bg-white/10 text-white'
                    : 'text-white/70 hover:text-white/90'
                "
                @click="rightTab = 'tabB'"
              >
                환통/격전점
              </button>
            </div>

            <div v-if="rightTab === 'tabA'">
              <MemoryCarousel :tab-a="slidesA" :tab-b="[]">
                <template #tabs />
              </MemoryCarousel>
            </div>

            <div v-else>
              <MemoryCarousel :tab-a="slidesB" :tab-b="[]">
                <template #tabs />
              </MemoryCarousel>
            </div>
          </div>
        </div>

        <!-- 랭크 추천 -->
        <div
          id="rank"
          class="max-w-4xl w-full mx-auto mt-6 rounded-md bg-[#0A0A23]/30 p-2 md:p-6"
        >
          <div class="col-span-full flex justify-center mb-4">
            <span
              class="inline-flex items-center gap-2 rounded-md px-4 py-2 text-[15px] font-bold bg-[#0A0A23]/40 text-white border-2 border-black mb-1 mt-2 md:mt-1 md:mb-2"
              >랭크 추천</span
            >
          </div>
          <RankTable :rows="rankRows" />
        </div>

        <!-- 파티 구성 -->
        <div
          id="party"
          :class="[
            'w-full mx-auto mt-6 grid gap-2 px-6 py-3 rounded-md bg-[#0A0A23]/30 party',
            hasParty2
              ? 'max-w-full md:max-w-4xl grid-cols-1 md:grid-cols-2'
              : 'max-w-full md:max-w-[500px] grid-cols-1 place-items-center',
          ]"
        >
          <div class="col-span-full flex justify-center mb-4">
            <span
              class="inline-flex items-center gap-2 rounded-md px-4 py-2 text-[15px] font-bold bg-[#0A0A23]/40 text-white border-2 border-black mt-2 md:mt-3"
              >파티 구성</span
            >
          </div>

          <PartyBox
            :key="'party1'"
            :type-icon="party1.typeIcon"
            :columns="party1.columns"
            :role-icons="roleIconsParty1"
            :role-icon-classes="['-ml-1', '', 'ml-2']"
          />

          <PartyBox
            v-if="hasParty2 && party2"
            :key="'party2'"
            :type-icon="party2.typeIcon"
            :columns="party2.columns"
            :role-icons="roleIconsParty2"
            :role-icon-classes="['-ml-1', '', 'ml-2']"
          />
        </div>

        <!-- 사이클 가이드     -->
        <div
          id="cycle"
          class="max-w-4xl w-full mx-auto mt-6 grid grid-cols-1 gap-2 md:px-6 md:py-3 rounded-md bg-[#0A0A23]/30"
        >
          <div
            class="md:col-span-4 flex justify-center mb-3 mt-3 md:mb-4 md:mt-0"
          >
            <div>
              <span
                class="inline-flex items-center gap-1 sm:gap-2 rounded-md px-3 py-1.5 sm:px-4 sm:py-2 text-[15px] font-bold bg-[#0A0A23]/40 text-white border-2 border-black hover:bg-white/15 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/40 active:scale-[0.98] transition mt-3"
              >
                사이클 가이드</span
              >
            </div>
          </div>

          <!-- ===== 사이클 박스 전체 ===== -->
          <div
            class="md:col-span-4 bg-black/50 rounded-md p-1 md:p-4 text-white max-w-4xl"
          >
            <!-- [속성 탭] ex:암속성/습광 -->
            <div
              role="tablist"
              class="flex gap-2 mb-4 border-b border-white/20"
            >
              <button
                role="tab"
                :aria-selected="cycleTab === 'tabA'"
                @click="cycleTab = 'tabA'"
                class="px-2 py-2 md:px-4 md:py-2 rounded-t-md text-[11px] md:text-[15px] font-semibold"
                :class="
                  cycleTab === 'tabA'
                    ? 'bg-white/10 text-white'
                    : 'text-white/70 hover:text-white/90'
                "
              >
                물리 사이클
              </button>
              <!-- <button
                role="tab"
                :aria-selected="cycleTab === 'tabB'"
                @click="cycleTab = 'tabB'"
                class="px-2 py-2 md:px-4 md:py-2 rounded-t-md text-[11px] md:text-[15px] font-semibold"
                :class="
                  cycleTab === 'tabB'
                    ? 'bg-white/10 text-white'
                    : 'text-white/70 hover:text-white/90'
                "
              >
                결빙 사이클
              </button> -->
            </div>

            <!-- ===== 내부 컨테이너 ===== -->
            <div
              class="max-w-4xl w-full mx-auto mt-2 grid grid-cols-1 gap-4 px-1 md:px-6 py-3 rounded-md bg-[#0A0A23]/30"
            >
              <!-- [안쪽 탭] 저랭크/고랭크 (tabA(ex:암속성)일 때만 표시) -->
              <div class="col-span-1 md:col-span-1" v-if="cycleTab === 'tabA'">
                <div
                  role="tablist"
                  class="flex gap-2 mb-2 border-b border-white/20"
                >
                  <button
                    role="tab"
                    :aria-selected="cyclerankTab === 'sswx'"
                    @click="cyclerankTab = 'sswx'"
                    class="px-2 py-2 md:px-4 md:py-2 rounded-t-md text-[11px] md:text-sm font-semibold"
                    :class="
                      cyclerankTab === 'sswx'
                        ? 'bg-white/10 text-white'
                        : 'text-white/70 hover:text-white/90'
                    "
                  >
                    SS0(전무X)
                  </button>
                  <button
                    role="tab"
                    :aria-selected="cyclerankTab === 'sscx'"
                    @click="cyclerankTab = 'sscx'"
                    class="px-0 py-2 md:px-4 md:py-2 rounded-t-md text-[10px] md:text-sm font-semibold"
                    :class="
                      cyclerankTab === 'sscx'
                        ? 'bg-white/10 text-white'
                        : 'text-white/70 hover:text-white/90'
                    "
                  >
                    SS0(죽카X)
                  </button>
                  <button
                    role="tab"
                    :aria-selected="cyclerankTab === 'sswo'"
                    @click="cyclerankTab = 'sswo'"
                    class="px-2 py-2 md:px-4 md:py-2 rounded-t-md text-[11px] md:text-sm font-semibold"
                    :class="
                      cyclerankTab === 'sswo'
                        ? 'bg-white/10 text-white'
                        : 'text-white/70 hover:text-white/90'
                    "
                  >
                    SS0
                  </button>

                  <button
                    role="tab"
                    :aria-selected="cyclerankTab === 'ss3'"
                    @click="cyclerankTab = 'ss3'"
                    class="px-2 py-2 md:px-4 md:py-2 rounded-t-md text-[11px] md:text-sm font-semibold"
                    :class="
                      cyclerankTab === 'ss3'
                        ? 'bg-white/10 text-white'
                        : 'text-white/70 hover:text-white/90'
                    "
                  >
                    SS3
                  </button>

                  <button
                    role="tab"
                    :aria-selected="cyclerankTab === 'sss'"
                    @click="cyclerankTab = 'sss'"
                    class="px-2 py-2 md:px-4 md:py-2 rounded-t-md text-[11px] md:text-sm font-semibold"
                    :class="
                      cyclerankTab === 'sss'
                        ? 'bg-white/10 text-white'
                        : 'text-white/70 hover:text-white/90'
                    "
                  >
                    SSS
                  </button>
                </div>
              </div>

              <!-- 내부 SS0(전무x) 탭 -->
              <template v-if="cycleTab === 'tabA' && cyclerankTab === 'sswx'">
                <div class="w-full">
                  <CycleSection
                    v-if="currentSection"
                    :type-icon="currentSection.typeIcon"
                    :type-border-cls="currentSection.typeBorderCls"
                    :pill-text="currentSection.pillText"
                    :notice-html="currentSection.noticeHtml || null"
                    :content="currentSection.content"
                  />
                </div>
              </template>

              <!-- 내부 SS0(죽카x) 탭 -->
              <template v-if="cycleTab === 'tabA' && cyclerankTab === 'sscx'">
                <div class="w-full">
                  <CycleSection
                    v-if="currentSection"
                    :type-icon="currentSection.typeIcon"
                    :type-border-cls="currentSection.typeBorderCls"
                    :pill-text="currentSection.pillText"
                    :notice-html="currentSection.noticeHtml || null"
                    :content="currentSection.content"
                  />
                </div>
              </template>

              <!-- 내부 SS0 탭 -->
              <template v-if="cycleTab === 'tabA' && cyclerankTab === 'sswo'">
                <div class="w-full">
                  <CycleSection
                    v-if="currentSection"
                    :type-icon="currentSection.typeIcon"
                    :type-border-cls="currentSection.typeBorderCls"
                    :pill-text="currentSection.pillText"
                    :notice-html="currentSection.noticeHtml || null"
                    :content="currentSection.content"
                  />
                </div>
              </template>

              <!-- 내부 SS3 탭 -->
              <template v-if="cycleTab === 'tabA' && cyclerankTab === 'ss3'">
                <div class="w-full">
                  <CycleSection
                    v-if="currentSection"
                    :type-icon="currentSection.typeIcon"
                    :type-border-cls="currentSection.typeBorderCls"
                    :pill-text="currentSection.pillText"
                    :notice-html="currentSection.noticeHtml || null"
                    :content="currentSection.content"
                  />
                </div>
              </template>

              <!-- 내부 SSS 탭 -->
              <template v-if="cycleTab === 'tabA' && cyclerankTab === 'sss'">
                <div class="w-full">
                  <CycleSection
                    v-if="currentSection"
                    :type-icon="currentSection.typeIcon"
                    :type-border-cls="currentSection.typeBorderCls"
                    :pill-text="currentSection.pillText"
                    :notice-html="currentSection.noticeHtml || null"
                    :content="currentSection.content"
                  />
                </div>
              </template>

              <!-- ================== 어픽스 사이클 ================== -->
              <!-- <div class="col-span-1 md:col-span-1" v-if="cycleTab === 'tabB'">
                <div
                  role="tablist"
                  class="flex gap-2 mb-2 border-b border-white/20"
                >
                  <button
                    role="tab"
                    :aria-selected="cyclerankTab === 'sswo'"
                    @click="cyclerankTab = 'sswo'"
                    class="px-2 py-2 md:px-4 md:py-2 rounded-t-md text-[11px] md:text-sm font-semibold"
                    :class="
                      cyclerankTab === 'sswo'
                        ? 'bg-white/10 text-white'
                        : 'text-white/70 hover:text-white/90'
                    "
                  >
                    SS0
                  </button>
                  <button
                    role="tab"
                    :aria-selected="cyclerankTab === 'sss'"
                    @click="cyclerankTab = 'sss'"
                    class="px-0 py-2 md:px-4 md:py-2 rounded-t-md text-[10px] md:text-sm font-semibold"
                    :class="
                      cyclerankTab === 'sss'
                        ? 'bg-white/10 text-white'
                        : 'text-white/70 hover:text-white/90'
                    "
                  >
                    SSS
                  </button>
                </div>
              </div>
              <template v-if="cycleTab === 'tabB' && cyclerankTab === 'sswo'">
                <div class="w-full">
                  <CycleSection
                    :key="`${cycleTab}:${cyclerankTab}`"
                    :section-key="`${cycleTab}:${cyclerankTab}`"
                    v-if="currentSection"
                    :type-icon="currentSection.typeIcon"
                    :type-border-cls="currentSection.typeBorderCls"
                    :pill-text="currentSection.pillText"
                    :notice-html="currentSection.noticeHtml || null"
                    :content="currentSection.content"
                  />
                </div>
              </template>

              <template v-if="cycleTab === 'tabB' && cyclerankTab === 'sss'">
                <div class="w-full">
                  <CycleSection
                    :key="`${cycleTab}:${cyclerankTab}`"
                    :section-key="`${cycleTab}:${cyclerankTab}`"
                    v-if="currentSection"
                    :type-icon="currentSection.typeIcon"
                    :type-border-cls="currentSection.typeBorderCls"
                    :pill-text="currentSection.pillText"
                    :notice-html="currentSection.noticeHtml || null"
                    :content="currentSection.content"
                  />
                </div>
              </template> -->
            </div>
          </div>
        </div>
      </div>

      <!-- 코팅 쇼케이스 -->
      <CoatingShowcase
        v-else
        key="coating"
        :items="myCoatings"
        class="max-w-4xl w-full mx-auto"
      />
    </Transition>
  </div>
</template>

<style scoped>
:deep(.carousel__icon) {
  fill: gray;
}

:deep(.party .carousel__prev) {
  left: -1rem;
  top: 3rem;
}

:deep(.party .carousel__next) {
  right: -1rem;
  top: 3rem;
}

:deep(.memory .carousel__prev) {
  left: -1rem;
}

:deep(.memory .carousel__next) {
  right: -1rem;
}

:deep(.carousel__pagination-button) {
  width: 10px;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.35);
  border-radius: 9999px;
}

@media (max-width: 639px) {
  :deep(.memory .carousel__prev) {
    left: -1.5rem;
  }

  :deep(.memory .carousel__next) {
    right: -1.5rem;
  }
}
</style>
