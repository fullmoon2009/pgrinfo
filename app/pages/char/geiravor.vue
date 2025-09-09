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
import CycleSection from "@/components/ui/Cycle.vue";
import { coatingData } from "@/data/coatingData";
import CoatingShowcase from "@/components/ui//CoatingShowcase.vue";

const viewMode = ref<"guide" | "coating">("guide");
const segClass = (m: "guide" | "coating") =>
  viewMode.value === m
    ? "bg-white/15 text-white border-white/40"
    : "bg-white/10 text-white/70 hover:text-white border-white/20";

const cycleTab = ref<"tabA" | "tabB">("tabA");

const cyclerankTab = ref<"s" | "sswx" | "sswo" | "sss">("sss");

const mode = ref<"first" | "repeat">("first");

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
  { id: "sunset", img: "/assets/wskills/sunset.png", label: "눈부신 석양" },
  { id: "amplight", img: "/assets/wskills/amplight.png", label: "초전도 축광" },
  { id: "count", img: "/assets/wskills/count.png", label: "죽음의 카운트다운" },
];

const petSkills = [
  { img: "/assets/petskills/redwolf1.png", label: "광기의 사냥" },
  { img: "/assets/petskills/redwolf2.png", label: "송곳니 기습" },
  { img: "/assets/petskills/redwolf3.png", label: "야밤의 사냥" },
];

const MID = {
  dv: "davinci",
  sh: "shakespeare",
  gu: "guinevere",
  ein: "einsteinna",
  ad: "adolf",
} as const;

const slidesA = [
  {
    typeIcon: "/assets/types/fire.png",
    typeBorderCls: "border-2 border-red-500",
    grid: [
      { img: "/assets/memory/davinci1.png", memId: MID.dv },
      { img: "/assets/memory/davinci2.png", memId: MID.dv },
      { img: "/assets/memory/guine3.png", memId: MID.gu },
      { img: "/assets/memory/guine1.png", memId: MID.gu },
      { img: "/assets/memory/adolf2.webp", memId: MID.ad },
      { img: "/assets/memory/adolf3.webp", memId: MID.ad },
    ],
    atkIcons: [
      "/assets/memory/memoryatk1.png",
      "/assets/memory/memoryatk2.png",
      "/assets/memory/memoryatk3.png",
    ],
    atkLabel: "공격력",
    ultIcon: "/assets/skillball/geiravorcore.png",
    ultLabel: "직업 패시브",
    tierBadge: { text: "SSS 미만", cls: "text-red-500" },
    chipText: "다빈치 x4",
    chipText2: "퀴니 x2",
    chipText3: "후루루 x2",
  },
  {
    typeIcon: "/assets/types/fire.png",
    typeBorderCls: "border-2 border-red-500",
    grid: [
      { img: "/assets/memory/shake1.png" },
      { img: "/assets/memory/shake2.png" },
      { img: "/assets/memory/adolf3.webp" },
      { img: "/assets/memory/adolf1.webp" },
      { img: "/assets/memory/ein2.png" },
      { img: "/assets/memory/ein3.png" },
    ],
    atkIcons: [
      "/assets/memory/memoryatk1.png",
      "/assets/memory/memoryatk2.png",
      "/assets/memory/memoryatk3.png",
    ],
    ultIcon: "/assets/skillball/geiravorult.png",
    tierBadge: { text: "SSS 미만/망성", cls: "text-red-500" },
    chipText: "셰익 x4",
    chipText2: "후루루 x2",
    chipText3: "아인 x2",
  },
  {
    typeIcon: "/assets/types/fire.png",
    typeBorderCls: "border-2 border-red-500",
    grid: [
      { img: "/assets/memory/shake1.png" },
      { img: "/assets/memory/shake2.png" },
      { img: "/assets/memory/shake3.png" },
      { img: "/assets/memory/shake1.png" },
      { img: "/assets/memory/adolf2.webp" },
      { img: "/assets/memory/adolf3.webp" },
    ],
    atkIcons: [
      "/assets/memory/memoryatk1.png",
      "/assets/memory/memoryatk2.png",
      "/assets/memory/memoryatk3.png",
    ],
    ultIcon: "/assets/skillball/geiravorult.png",
    tierBadge: { text: "SSS 이상", cls: "text-yellow-500" },
    chipText: "셰익스피어 x4",
    chipText2: "후루루 x4",
    chipText3: "",
  },

  {
    typeIcon: "/assets/types/fire.png",
    typeBorderCls: "border-2 border-red-500",
    grid: [
      { img: "/assets/memory/shake1.png" },
      { img: "/assets/memory/shake2.png" },
      { img: "/assets/memory/shake3.png" },
      { img: "/assets/memory/shake1.png" },
      { img: "/assets/memory/adolf2.webp" },
      { img: "/assets/memory/adolf3.webp" },
    ],
    atkIcons: [
      "/assets/memory/memoryatk1.png",
      "/assets/memory/memoryatk2.png",
      "/assets/memory/memoryatk3.png",
    ],
    ultIcon: "/assets/skillball/geiravorult.png",
    tierBadge: { text: "SSS 이상/망성", cls: "text-yellow-500" },
    chipText: "다빈치 x4",
    chipText2: "후루루 x4",
    chipText3: "",
  },

  {
    typeIcon: "/assets/types/burn.png",
    typeBorderCls: "border-2 border-[#5a0f0f]",
    grid: [
      { img: "/assets/memory/davinci1.png" },
      { img: "/assets/memory/davinci2.png" },
      { img: "/assets/memory/guine3.png" },
      { img: "/assets/memory/guine1.png" },
      { img: "/assets/memory/ein2.png" },
      { img: "/assets/memory/ein3.png" },
    ],
    atkIcons: [
      "/assets/memory/memoryatk1.png",
      "/assets/memory/memoryatk2.png",
      "/assets/memory/memoryatk3.png",
    ],
    ultIcon: "/assets/skillball/geiravorult.png",
    tierBadge: { text: "전랭크", cls: "text-white" },
    chipText: "다빈치 x4",
    chipText2: "퀴니 x2",
    chipText3: "아인슈타나 x2",
  },
];

// 환통/격전점
const slidesB = [
  {
    typeIcon: "/assets/types/fire.png",
    typeBorderCls: "border-2 border-red-500",
    grid: [
      { img: "/assets/memory/davinci1.png" },
      { img: "/assets/memory/davinci2.png" },
      { img: "/assets/memory/davinci3.png" },
      { img: "/assets/memory/davinci1.png" },
      { img: "/assets/memory/adolf2.webp" },
      { img: "/assets/memory/adolf3.webp" },
    ],
    atkIcons: [
      "/assets/memory/memoryatk1.png",
      "/assets/memory/memoryatk2.png",
      "/assets/memory/memoryatk3.png",
    ],
    ultIcon: "/assets/skillball/geiravorult.png",
    tierBadge: { text: "SSS 이상", cls: "text-yellow-500" },
    chipText: "다빈치 x4",
    chipText2: "퀴니 x4",
    chipText3: "",
  },
  {
    typeIcon: "/assets/types/burn.png",
    typeBorderCls: "border-2 border-[#5a0f0f]",
    grid: [
      { img: "/assets/memory/guine1.png" },
      { img: "/assets/memory/guine2.png" },
      { img: "/assets/memory/ein3.png" },
      { img: "/assets/memory/ein1.png" },
      { img: "/assets/memory/sam2.png" },
      { img: "/assets/memory/sam3.png" },
    ],
    atkIcons: [
      "/assets/memory/memoryatk1.png",
      "/assets/memory/memoryatk2.png",
      "/assets/memory/memoryatk3.png",
    ],
    atkLabel: "공격력",
    ultIcon: "/assets/skillball/geiravorcore.png",
    ultLabel: "직업 패시브",
    tierBadge: { text: "SSS 이상", cls: "text-yellow-500" },
    chipText: "퀴니 x4",
    chipText2: "아인슈타나 x2",
    chipText3: "사만다(5) x2",
  },
  {
    typeIcon: "/assets/types/nihil.png",
    typeBorderCls: "border-2 border-[#C00088]",
    grid: [
      { img: "/assets/memory/shake1.png" },
      { img: "/assets/memory/shake2.png" },
      { img: "/assets/memory/shake3.png" },
      { img: "/assets/memory/shake1.png" },
      { img: "/assets/memory/davinci2.png" },
      { img: "/assets/memory/davinci3.png" },
    ],
    atkIcons: [
      "/assets/memory/memoryatk1.png",
      "/assets/memory/memoryatk2.png",
      "/assets/memory/memoryatk3.png",
    ],
    atkLabel: "공격력",
    ultIcon: "/assets/skillball/geiravorcore.png",
    ultLabel: "직업 패시브",
    tierBadge: { text: "SSS 이상", cls: "text-yellow-500" },
    chipText: "셰익스피어 x4",
    chipText2: "다빈치 x4",
    chipText3: "",
  },
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
  typeIcon: "/assets/types/fire.png",
  columns: [
    {
      slides: [
        {
          img: "/assets/portrait/pyroath2.png",
          label: "루시아 · 서염",
          borderClass: "border-blue-500",
          to: "/char/pyroath",
          badges: [{ text: "대장" }],
        },
      ],
    },
    {
      slides: [
        {
          img: "/assets/portrait/geiravor2.png",
          label: "베라 · 작망",
          borderClass: "border-red-500",
          badges: [{ text: "선발" }],
        },
      ],
      showNav: false,
    },
    {
      slides: [
        {
          img: "/assets/portrait/epitaph2.png",
          label: "와타나베 · 진명",
          borderClass: "border-yellow-400",
          to: "/char/epitaph",
        },
        {
          img: "/assets/portrait/startrail2.png",
          label: "나나미 · 망성",
          borderClass: "border-yellow-400",
          to: "/char/startrail",
        },
      ],
      showNav: true,
    },
  ],
};

/* 파티 2  */
const party2 = {
  typeIcon: "/assets/types/abyss.png",
  columns: [
    {
      slides: [
        {
          img: "/assets/portrait/geiravor2.png",
          label: "베라 · 작망",
          borderClass: "border-blue-500",
          badges: [{ text: "선발" }],
        },
      ],
    },
    {
      slides: [
        {
          img: "/assets/portrait/crimson2.png",
          label: "루시아 · 심홍수영",
          borderClass: "border-red-500",
          to: "/char/crimsonweave",
          badges: [{ text: "대장" }],
        },
      ],
      showNav: false,
    },
    {
      slides: [
        {
          img: "/assets/portrait/epitaph2.png",
          label: "와타나베 · 진명",
          borderClass: "border-yellow-400",
          to: "/char/epitaph",
        },
      ],
    },
  ],
};

// 파티 2가 존재하지 않을 시 사용
// const party2 = ref<Party | null>(null)

const roleIconsParty1 = [
  "/assets/roleIcons/atk.png",
  "/assets/roleIcons/amp.png",
  "/assets/roleIcons/arm.png",
];
const roleIconsParty2 = [
  "/assets/roleIcons/amp.png",
  "/assets/roleIcons/atk.png",
  "/assets/roleIcons/arm.png",
];

const hasParty2 = computed(
  () => !!party2 && Array.isArray(party2.columns) && party2.columns.length > 0
);

// 사이클 박스
// 비디오 소스 매핑

const VIDEO_BASE = "https://pgr-video-proxy.fullmoon2009.workers.dev/video";
const video = (name: string) => `${VIDEO_BASE}/${name}`;

const charKey = "geiravor";

const myCoatings = computed(() =>
  coatingData.filter((c) => c.char === charKey)
);
</script>

<template>
  <nav class="bg-gray-800 text-white p-4 flex justify-between items-center">
    <div class="font-bold"></div>
    <div class="space-x-4">
      <NuxtLink to="/" class="hover:underline">Home</NuxtLink>
      <NuxtLink to="/char" class="hover:underline">Char</NuxtLink>
      <NuxtLink to="/events" class="hover:underline">Event</NuxtLink>
    </div>
  </nav>
  <div class="min-h-screen bg-[#1a1a1a]/95 text-white p-3">
    <div class="p-2 md:p-3 mx-auto"></div>
    <!-- 프로필 이미지 -->
    <HeroMosaic
      leftTop="/assets/portrait/geiravor1.png"
      leftBottom="/assets/portrait/geiravor2.png"
      rightTall="/assets/standings/geiravorS.png"
      rightContainerClass="w-[125px] h-[256px]"
      rightFit="cover"
      rightObjectPosition="46% -10%"
      rightImgClass="scale-[2] origin-[55%_20%]"
    />

    <!-- 이름 배지 -->
    <NameBadge text="베라 · 작망" />

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
          코팅 쇼케이스
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
              src: '/assets/types/fire.png',
              label: '화속성',
              border: 'border-red-500',
            },
            {
              src: '/assets/types/abyss.png',
              label: '암연',
              border: 'border-purple-950',
            },
          ]"
          :right="{ src: '/assets/roleIcons/amp.png', label: '증폭형' }"
        />

        <!-- 스킬 박스 -->
        <CharacterSkills char-key="geiravor" />

        <!-- 장비 & 의식 세팅 -->
        <div
          id="equip"
          class="max-w-4xl w-full mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 px-2 py-1 md:px-6 md:py-3 rounded-md bg-[#0A0A23]/30"
        >
          <SectionPill text="장비 & 의식 세팅" />

          <div
            class="col-span-2 bg-black/50 rounded-md p-4 text-white space-y-4"
          >
            <WeaponSkills
              weapon-id="deathlessflame"
              weapon-img="/assets/arms/deathlessflame.png"
              weapon-name="★6 불멸의 불꽃"
              :skills="weaponSkills"
              weapon-box-class="w-[110px] h-[200px] md:w-[120px] md:h-[220px] overflow-hidden rounded-md border-2 border-orange-500"
              weapon-fit="cover"
              weapon-object-position="50% 15%"
              :weapon-zoom="1.0"
              weapon-transform-origin=""
            />

            <SupportPet
              pet-img="/assets/pets/redwolf.webp"
              pet-name="S · 소아"
              :skills="[
                { img: '/assets/petskills/redwolf1.png', label: '광기의 사냥' },
                { img: '/assets/petskills/redwolf2.png', label: '송곳니 기습' },
                { img: '/assets/petskills/redwolf3.png', label: '야밤의 사냥' },
              ]"
              modal-key="soa"
            />
          </div>

          <div class="col-span-2 bg-black/50 rounded-md p-4 text-white">
            <div
              role="tablist"
              class="flex gap-2 mb-4 border-b border-white/20"
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
                진의참 사이클
              </button>
              <button
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
                SPECIAL
              </button>
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
                  <!-- <button
          role="tab"
          :aria-selected="cyclerankTab === 's'"
          @click="cyclerankTab = 's'"
          class="px-2 py-2 md:px-4 md:py-2 rounded-t-md text-[11px] md:text-sm font-semibold"
          :class="cyclerankTab === 's' ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white/90'"
        >
          전랭크 -->
                  <!-- </button> -->
                  <!-- <button
          role="tab"
          :aria-selected="cyclerankTab === 'sswx'"
          @click="cyclerankTab = 'sswx'"
          class="px-0 py-2 md:px-4 md:py-2 rounded-t-md text-[10px] md:text-sm font-semibold"
          :class="cyclerankTab === 'sswx' ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white/90'"
        >
          SS0~3(전무X)
        </button>
        <button
          role="tab"
          :aria-selected="cyclerankTab === 'sswo'"
          @click="cyclerankTab = 'sswo'"
          class="px-2 py-2 md:px-4 md:py-2 rounded-t-md text-[11px] md:text-sm font-semibold"
          :class="cyclerankTab === 'sswo' ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white/90'"
        >
          SS0~3(전무O)
        </button>
         -->

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
                    전랭크
                  </button>
                </div>
              </div>

              <!-- 내부 SSS 탭 -->
              <template v-if="cycleTab === 'tabA' && cyclerankTab === 'sss'">
                <div class="w-full">
                  <!-- 속성 아이콘 + 버튼 -->
                  <div class="flex flex-col items-center mb-4">
                    <img
                      src="/assets/types/ultima.png"
                      alt="암속성"
                      class="w-10 h-10 object-cover rounded-md border-2 border-emerald-300 mb-3"
                    />

                    <div class="flex gap-2">
                      <button
                        type="button"
                        :aria-pressed="mode === 'first'"
                        @click="mode = 'first'"
                        :class="[pillClass('repeat'), 'text-[11px] md:text-sm']"
                      >
                        첫 출전 사이클
                      </button>

                      <button
                        type="button"
                        :aria-pressed="mode === 'repeat'"
                        @click="mode = 'repeat'"
                        :class="[pillClass('repeat'), 'text-[11px] md:text-sm']"
                      >
                        반복 출전 사이클
                      </button>
                    </div>
                  </div>

                  <!-- 주의사항 존재시 기술 -->
                  <div class="w-full flex justify-center mb-4">
                    <div
                      class="inline-block text-center text-[11px] md:text-sm border border-white rounded-md px-3 py-2"
                    >
                      <span
                        class="block font-bold tracking-wide text-orange-400"
                        >!!주의!!</span
                      >
                      <span class="block mt-1 text-amber-200"
                        >전용 무기 + 죽음의 카운트다운 공명 필수</span
                      >
                    </div>
                  </div>
                </div>

                <!-- 첫 출전/반복 출전 “실제 사이클 영역” -->
                <div
                  class="bg-black/50 md:p-4 rounded-md text-white md:w-full md:max-h-full"
                >
                  <div
                    class="flex flex-col items-center mb-4 pb-3 border-b-2 border-white/50"
                  >
                    <!-- 비디오 (src만 변경) -->
                    <template v-if="mode === 'first'">
                      <video
                        :src="`${VIDEO_BASE}/vergilS.mp4`"
                        controls
                        muted
                        preload="metadata"
                        class="w-full h-auto rounded-md block"
                        :key="mode"
                      />
                    </template>

                    <template v-else-if="mode === 'repeat'">
                      <video
                        :src="`${VIDEO_BASE}/vergilR.mp4`"
                        controls
                        muted
                        preload="metadata"
                        class="w-full h-auto rounded-md block"
                        :key="mode"
                      />
                    </template>
                    <span
                      class="mt-2 md:mb-2 md:font-semibold text-sm md:text-[17px]"
                    >
                      {{
                        mode === "first" ? "첫 출전 사이클" : "반복 출전 사이클"
                      }}
                    </span>
                  </div>

                  <!-- ========== 기본 속성 사이클 ========== -->
                  <template v-if="mode === 'first'">
                    <Carousel
                      :items-to-show="1"
                      :wrap-around="false"
                      :navigation-enabled="false"
                      :pagination-enabled="true"
                    >
                      <Slide>
                        <!-- 첫 출전 사이클 -->
                        <!-- line 1 -->
                        <div class="">
                          <div
                            class="w-full max-w-full flex justify-center mb-4"
                          >
                            <div
                              class="flex items-center gap-2 md:gap-4 mb-3 md:mb-0"
                            >
                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/dodge.png"
                                  class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                                />
                                <span
                                  class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                  >회피</span
                                >
                              </div>

                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/arrow.png"
                                  class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain"
                                />
                              </div>

                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/keyarrow.png"
                                  class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                                />
                                <span
                                  class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                  >방향키</span
                                >
                              </div>

                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/vergilbasic.png"
                                  class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                                />
                                <span
                                  class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                  >기본 공격</span
                                >
                              </div>

                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/arrow.png"
                                  class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain"
                                />
                              </div>

                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/vergilred.png"
                                  class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                                />
                                <span
                                  class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                  >적색 스킬볼</span
                                >
                              </div>

                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/arrow.png"
                                  class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain"
                                />
                              </div>

                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/vergilbasic.png"
                                  class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                                />
                                <span
                                  class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                  >기본 공격</span
                                >
                              </div>

                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/arrow.png"
                                  class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain"
                                />
                              </div>

                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/vergilult.png"
                                  class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                                />
                                <span
                                  class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                  >필살기</span
                                >
                              </div>
                            </div>
                          </div>

                          <!-- line 2 -->
                          <div
                            class="w-full max-w-full flex justify-center mb-4"
                          >
                            <div
                              class="flex items-center gap-2 md:gap-4 mb-3 md:mb-0"
                            >
                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/arrow.png"
                                  class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain"
                                />
                              </div>

                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/vergilbasic.png"
                                  class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md border-2 border-white object-cover"
                                />
                                <span
                                  class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                  >[HOLD] 기본 공격 (저지먼트 컷 2회)</span
                                >
                              </div>

                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/arrow.png"
                                  class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain"
                                />
                              </div>

                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/vergilult.png"
                                  class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                                />
                                <span
                                  class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                  >필살기</span
                                >
                              </div>
                            </div>
                          </div>

                          <!-- line 3 -->
                          <div class="w-full max-w-full flex justify-center">
                            <div
                              class="flex items-center gap-2 md:gap-4 mb-3 md:mb-0"
                            >
                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/arrow.png"
                                  class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain"
                                />
                              </div>

                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/vergilblue.png"
                                  class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                                />
                                <span
                                  class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                  >청색 스킬볼</span
                                >
                              </div>

                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/vergilblue.png"
                                  class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                                />
                                <span
                                  class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                  >청색 스킬볼</span
                                >
                              </div>

                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/arrow.png"
                                  class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain"
                                />
                              </div>

                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/vergilbasic.png"
                                  class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                                />
                                <span
                                  class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                  >기본 공격</span
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </Slide>

                      <Slide>
                        <!-- 사이클 텍스트 -->
                        <div>
                          <div
                            class="grid grid-col-1 flex items-center justify-center"
                          >
                            <p class="text-sm md:text-base text-white/80 mb-4">
                              교대-회피-방향키+평타-빨볼-평타-1차궁
                            </p>
                          </div>
                          <div
                            class="grid grid-col-1 flex items-center justify-center"
                          >
                            <p class="text-sm md:text-base text-white/80 mb-4">
                              -평꾹(저지먼트 컷 2번)-2차궁
                            </p>
                          </div>

                          <div
                            class="grid grid-col-1 flex items-center justify-center"
                          >
                            <p class="text-sm md:text-base text-white/80 mb-4">
                              -파파-평타
                            </p>
                          </div>
                        </div>
                      </Slide>

                      <template #addons>
                        <div class="absolute right-5">
                          <Pagination />
                        </div>
                      </template>
                    </Carousel>
                  </template>

                  <!-- 반복 출전 사이클 -->
                  <template v-else>
                    <Carousel
                      :items-to-show="1"
                      :wrap-around="false"
                      :navigation-enabled="false"
                      :pagination-enabled="true"
                    >
                      <Slide>
                        <!-- line 1 -->
                        <div class="">
                          <div
                            class="w-full max-w-full flex justify-center mb-4"
                          >
                            <div
                              class="flex items-center gap-2 md:gap-4 mb-3 md:mb-0"
                            >
                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/vergilult.png"
                                  class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                                />
                                <span
                                  class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                  >필살기</span
                                >
                              </div>

                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/arrow.png"
                                  class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain"
                                />
                              </div>

                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/vergilbasic.png"
                                  class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                                />
                                <span
                                  class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                  >기본 공격</span
                                >
                              </div>

                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/vergilbasic.png"
                                  class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                                />
                                <span
                                  class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                  >기본 공격</span
                                >
                              </div>

                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/vergilbasic.png"
                                  class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                                />
                                <span
                                  class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                  >기본 공격</span
                                >
                              </div>

                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/arrow.png"
                                  class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain"
                                />
                              </div>

                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/vergilult.png"
                                  class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                                />
                                <span
                                  class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                  >필살기</span
                                >
                              </div>
                            </div>
                          </div>

                          <!-- line 2 -->
                          <div
                            class="w-full max-w-full flex justify-center mb-4"
                          >
                            <div
                              class="flex items-center gap-2 md:gap-4 mb-3 md:mb-0"
                            >
                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/arrow.png"
                                  class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain"
                                />
                              </div>

                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/vergilblue.png"
                                  class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                                />
                                <span
                                  class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                  >청색 스킬볼</span
                                >
                              </div>

                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/vergilblue.png"
                                  class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                                />
                                <span
                                  class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                  >청색 스킬볼</span
                                >
                              </div>

                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/arrow.png"
                                  class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain"
                                />
                              </div>

                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/vergilbasic.png"
                                  class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                                />
                                <span
                                  class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                  >기본 공격</span
                                >
                              </div>

                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/arrow.png"
                                  class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain"
                                />
                              </div>

                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/vergilult.png"
                                  class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                                />
                                <span
                                  class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                  >필살기</span
                                >
                              </div>
                            </div>
                          </div>

                          <!-- line 3 -->
                          <div
                            class="w-full max-w-full flex justify-center mb-4"
                          >
                            <div
                              class="flex items-center gap-2 md:gap-4 mb-3 md:mb-0"
                            >
                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/arrow.png"
                                  class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain"
                                />
                              </div>

                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/keyarrow.png"
                                  class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                                />
                                <span
                                  class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                  >방향키</span
                                >
                              </div>

                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/dodge.png"
                                  class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                                />
                                <span
                                  class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                  >회피</span
                                >
                              </div>

                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/arrow.png"
                                  class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain"
                                />
                              </div>

                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/vergilbasic.png"
                                  class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md border-2 border-white object-cover"
                                />
                                <span
                                  class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                  >[HOLD] 기본 공격 (스킬볼 잔량 3개 유지)</span
                                >
                              </div>

                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/arrow.png"
                                  class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain"
                                />
                              </div>

                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/vergilult.png"
                                  class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                                />
                                <span
                                  class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                  >필살기</span
                                >
                              </div>
                            </div>
                          </div>

                          <!-- line 4 -->
                          <div class="w-full max-w-full flex justify-center">
                            <div
                              class="flex items-center gap-2 md:gap-4 mb-3 md:mb-0"
                            >
                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/arrow.png"
                                  class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain"
                                />
                              </div>

                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/vergilblue.png"
                                  class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                                />
                                <span
                                  class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                  >청색 스킬볼</span
                                >
                              </div>

                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/vergilblue.png"
                                  class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                                />
                                <span
                                  class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                  >청색 스킬볼</span
                                >
                              </div>

                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/arrow.png"
                                  class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain"
                                />
                              </div>

                              <div class="flex flex-col items-center">
                                <img
                                  src="/assets/skillball/vergilbasic.png"
                                  class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                                />
                                <span
                                  class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                  >기본 공격</span
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </Slide>

                      <Slide>
                        <!-- 사이클 텍스트 -->
                        <div>
                          <div
                            class="grid grid-col-1 flex items-center justify-center"
                          >
                            <p class="text-sm md:text-base text-white/80 mb-4">
                              교대-1차궁-평평평or저컷2번-2차궁
                            </p>
                          </div>
                          <div
                            class="grid grid-col-1 flex items-center justify-center"
                          >
                            <p class="text-sm md:text-base text-white/80 mb-4">
                              -파파-평타-1차궁
                            </p>
                          </div>

                          <div
                            class="grid grid-col-1 flex items-center justify-center"
                          >
                            <p class="text-sm md:text-base text-white/80 mb-4">
                              -방향키+회피-평꾹-2차궁
                            </p>
                          </div>

                          <div
                            class="grid grid-col-1 flex items-center justify-center"
                          >
                            <p class="text-sm md:text-base text-white/80 mb-4">
                              -파파-평타
                            </p>
                          </div>
                        </div>
                      </Slide>

                      <template #addons>
                        <div class="absolute right-5">
                          <Pagination />
                        </div>
                      </template>
                    </Carousel>
                  </template>
                </div>
              </template>

              <!-- ================== 어픽스 사이클 ================== -->
              <template v-if="cycleTab === 'tabB'">
                <div class="w-full">
                  <!-- 속성 아이콘 + 버튼 -->
                  <div class="flex flex-col items-center mb-4">
                    <img
                      src="/assets/skillball/vergilmotiv.png"
                      alt="암속성"
                      class="w-10 h-10 object-cover rounded-md border-2 border-blue-500 mb-3"
                    />

                    <div class="flex gap-2">
                      <button
                        type="button"
                        :aria-pressed="mode === 'first'"
                        @click="mode = 'first'"
                        :class="[pillClass('repeat'), 'text-[11px] md:text-sm']"
                      >
                        MOTIVATED
                      </button>
                    </div>
                  </div>

                  <!-- 비디오 (src만 변경) -->
                  <video
                    :src="`${VIDEO_BASE}/vergilM.mp4`"
                    controls
                    muted
                    class="w-full h-auto rounded-md block"
                    :key="forceReload ? mode : undefined"
                  />
                </div>

                <div
                  class="bg-black/50 md:p-4 rounded-md text-white md:w-full md:max-h-full"
                >
                  <div
                    class="flex flex-col items-center mb-4 pb-3 border-b-2 border-white/50"
                  >
                    <span
                      class="mt-2 md:mb-2 md:font-semibold text-sm md:text-[17px]"
                    >
                      I AM THE STORM THAT IS APPROCHING
                    </span>
                  </div>

                  <Carousel
                    :items-to-show="1"
                    :wrap-around="false"
                    :navigation-enabled="false"
                    :pagination-enabled="true"
                  >
                    <Slide>
                      <!-- sp 사이클 -->
                      <div class="">
                        <div class="w-full max-w-full flex justify-center mb-4">
                          <div
                            class="flex flex-wrap md:flex-nowrap items-center justify-center gap-2 gap-y-3 md:gap-4 mb-3 md:mb-0"
                          >
                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/dodge.png"
                                class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md border-2 border-white object-cover"
                              />
                              <span
                                class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                >[HOLD] 회피</span
                              >
                            </div>

                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/arrow.png"
                                class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain"
                              />
                            </div>

                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/vergilbasic.png"
                                class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                              />
                              <span
                                class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                >기본 공격 연타</span
                              >
                            </div>

                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/arrow.png"
                                class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain"
                              />
                            </div>

                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/vergilbasic.png"
                                class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md border-2 border-white object-cover"
                              />
                              <span
                                class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                >[HOLD] 기본 공격</span
                              >
                            </div>

                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/arrow.png"
                                class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain"
                              />
                            </div>

                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/vergilred.png"
                                class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                              />
                              <span
                                class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                >적색 스킬볼</span
                              >
                            </div>

                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/arrow.png"
                                class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain"
                              />
                            </div>

                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/vergilbasic.png"
                                class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                              />
                              <span
                                class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                >기본 공격</span
                              >
                            </div>

                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/arrow.png"
                                class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain"
                              />
                            </div>

                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/vergilult.png"
                                class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                              />
                              <span
                                class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                >필살기</span
                              >
                            </div>
                          </div>
                        </div>

                        <div class="w-full max-w-full flex justify-center mb-4">
                          <div
                            class="flex items-center gap-2 md:gap-4 mb-3 md:mb-0"
                          >
                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/arrow.png"
                                class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain"
                              />
                            </div>

                            <div class="flex flex-col items-center">
                              <div class="relative inline-block">
                                <img
                                  src="/assets/skillball/vergilbasic.png"
                                  class="block w-10 h-10 md:w-[50px] md:h-[50px] object-cover border-b-2 border-white rounded-md"
                                  alt=""
                                />
                                <span
                                  class="absolute bottom-0 right-0 -translate-y-1/2 translate-x-1/4 text-[8px] md:text-xs leading-none font-bold px-1.5 py-0.5 border border-white/70 bg-black/70 text-white backdrop-blur-sm"
                                >
                                  ×3
                                </span>
                              </div>
                              <span
                                class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                >기본 공격 ×3</span
                              >
                            </div>

                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/arrow.png"
                                class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain"
                              />
                            </div>

                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/vergilbasic.png"
                                class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                              />
                              <span
                                class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                >기본 공격 연타</span
                              >
                            </div>

                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/arrow.png"
                                class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain"
                              />
                            </div>

                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/vergilbasic.png"
                                class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md border-2 border-white object-cover"
                              />
                              <span
                                class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                >[HOLD] 기본 공격</span
                              >
                            </div>

                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/arrow.png"
                                class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain"
                              />
                            </div>

                            <div class="flex flex-col items-center">
                              <div class="relative inline-block">
                                <img
                                  src="/assets/skillball/jump.png"
                                  class="block w-10 h-10 md:w-[50px] md:h-[50px] object-cover border-b-2 border-white rounded-md"
                                  alt=""
                                />
                                <span
                                  class="absolute bottom-0 right-0 -translate-y-1/2 translate-x-1/4 text-[8px] md:text-xs leading-none font-bold px-1.5 py-0.5 border border-white/70 bg-black/70 text-white backdrop-blur-sm"
                                >
                                  ×2
                                </span>
                              </div>
                              <span
                                class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                >점프 ×2</span
                              >
                            </div>
                          </div>
                        </div>

                        <div class="w-full max-w-full flex justify-center mb-4">
                          <div
                            class="flex items-center gap-2 md:gap-4 mb-3 md:mb-0"
                          >
                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/arrow.png"
                                class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain"
                              />
                            </div>

                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/vergilyellow.png"
                                class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                              />
                              <span
                                class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                >황색 스킬볼</span
                              >
                            </div>

                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/arrow.png"
                                class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain"
                              />
                            </div>

                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/jump.png"
                                class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md border-2 border-white object-cover"
                              />
                              <span
                                class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                >[HOLD 살짝] 점프</span
                              >
                            </div>

                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/arrow.png"
                                class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain"
                              />
                            </div>

                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/keyarrow.png"
                                class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                              />
                              <span
                                class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                >방향키</span
                              >
                            </div>

                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/dodge.png"
                                class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                              />
                              <span
                                class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                >회피</span
                              >
                            </div>

                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/arrow.png"
                                class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain"
                              />
                            </div>

                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/vergilbasic.png"
                                class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                              />
                              <span
                                class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                >기본 공격</span
                              >
                            </div>
                          </div>
                        </div>

                        <div class="w-full max-w-full flex justify-center mb-4">
                          <div
                            class="flex flex-wrap md:flex-nowrap items-center justify-center gap-2 gap-y-3 md:gap-4 mb-3 md:mb-0"
                          >
                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/arrow.png"
                                class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain"
                              />
                            </div>

                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/vergilyellow.png"
                                class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                              />
                              <span
                                class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                >황색 스킬볼</span
                              >
                            </div>

                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/arrow.png"
                                class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain"
                              />
                            </div>

                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/vergilbasic.png"
                                class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                              />
                              <span
                                class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                >기본 공격</span
                              >
                            </div>

                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/arrow.png"
                                class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain"
                              />
                            </div>

                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/jump.png"
                                class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                              />
                              <span
                                class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                >점프</span
                              >
                            </div>

                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/arrow.png"
                                class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain"
                              />
                            </div>

                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/vergilblue.png"
                                class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                              />
                              <span
                                class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                >청색 스킬볼</span
                              >
                            </div>
                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/vergilblue.png"
                                class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                              />
                              <span
                                class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                >청색 스킬볼</span
                              >
                            </div>

                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/arrow.png"
                                class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain"
                              />
                            </div>

                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/keyarrow.png"
                                class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                              />
                              <span
                                class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                >방향키</span
                              >
                            </div>

                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/vergilbasic.png"
                                class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                              />
                              <span
                                class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                >기본 공격</span
                              >
                            </div>
                          </div>
                        </div>

                        <div class="w-full max-w-full flex justify-center">
                          <div
                            class="flex items-center gap-2 md:gap-4 mb-3 md:mb-0"
                          >
                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/arrow.png"
                                class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain"
                              />
                            </div>

                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/vergilcore.png"
                                class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                              />
                              <span
                                class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                >코어 패시브 터치</span
                              >
                            </div>

                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/arrow.png"
                                class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain"
                              />
                            </div>

                            <div class="flex flex-col items-center">
                              <img
                                src="/assets/skillball/vergilult.png"
                                class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md object-cover"
                              />
                              <span
                                class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap"
                                >필살기</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </Slide>

                    <Slide>
                      <!-- sp 사이클 텍스트 -->
                      <div>
                        <div
                          class="grid grid-col-1 flex items-center justify-center"
                        >
                          <p class="text-sm md:text-base text-white/80 mb-4">
                            평타-회피꾹-평타연타-저컷(평꾹후놓기)-빨볼-평타-궁
                          </p>
                        </div>
                        <div
                          class="grid grid-col-1 flex items-center justify-center"
                        >
                          <p class="text-sm md:text-base text-white/80 mb-4">
                            -평평평쉬고-평타연타-저컷(평꾹후놓기)-점프점프
                          </p>
                        </div>

                        <div
                          class="grid grid-col-1 flex items-center justify-center"
                        >
                          <p class="text-sm md:text-base text-white/80 mb-4">
                            -노볼-점프살짝꾹-방향키+회피-평타
                          </p>

                          <div
                            class="grid grid-col-1 flex items-center justify-center"
                          >
                            <p class="text-sm md:text-base text-white/80 mb-4">
                              -노볼-평타-점프-파파-방향키+평타
                            </p>
                          </div>

                          <div
                            class="grid grid-col-1 flex items-center justify-center"
                          >
                            <p class="text-sm md:text-base text-white/80 mb-4">
                              -코패터치-궁
                            </p>
                          </div>
                        </div>
                      </div>
                    </Slide>

                    <template #addons>
                      <div class="absolute right-5">
                        <Pagination />
                      </div>
                    </template>
                  </Carousel>
                </div>
              </template>
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
