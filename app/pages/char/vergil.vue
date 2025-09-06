<script setup lang="ts">
import HeroMosaic from '@/components/ui/Profile.vue'
import NameBadge from '@/components/ui/NameBadge.vue'
import QuickNavPills from '@/components/ui/NavPills.vue'
import AttrRoleCards from '@/components/ui/TypeRoleCards.vue'
import SectionPill from '@/components/ui/SectionPill.vue'
import WeaponSkills from '@/components/ui/WeaponSkills.vue'
import SupportPet from '@/components/ui/Pet.vue'
import MemoryCarousel from '@/components/ui/Memory.vue'
import RankTable   from '@/components/ui/Rank.vue'
import PartyBox    from '@/components/ui/Party.vue'
import CycleSection from '@/components/ui/Cycle.vue'

const cycleTab = ref<'tabA'|'tabB'>('tabA')
       
const cyclerankTab = ref<'s' | 'sswx' | 'sswo' | 'sss'>('sss')

const mode = ref<'first'|'repeat'>('first')

const videoSources = {
  s: {
    first: '/assets/videos/huimusssS.mp4',
    repeat: '/assets/videos/huimusssR.mp4',
  },
  sswx: {
    first: '/assets/videos/huimusssSSWX.mp4',
    repeat: '/assets/videos/huimusssSSWX_R.mp4',
  },
  sswo: {
    first: '/assets/videos/huimusssSSWO.mp4',
    repeat: '/assets/videos/huimusssSSWO_R.mp4',
  },
  sss: {
    first: '/assets/videos/huimusssS.mp4',
    repeat: '/assets/videos/huimusssR.mp4',
  },
} as const


const forceReload = false

const pillClass = (name) =>
  [
    'inline-flex items-center rounded-full px-3 py-1 font-semibold border transition',
    mode.value === name
      ? 'bg-white/20 text-white border-white/40'
      : 'bg-white/10 text-white/70 hover:text-white hover:bg-white/15 border-white/20',
    'focus:outline-none focus:ring-2 focus:ring-white/40 active:scale-[0.98]',
  ].join(' ')


const pills = [
  { label: '장비 & 의식 세팅', target: 'equip' },
  { label: '랭크 추천',       target: 'rank'  },
  { label: '파티 구성',       target: 'party' },
  { label: '사이클 가이드',    target: 'cycle' },
]

const weaponSkills = [
  { img:'/assets/wskills/count.png',  label:'죽음의 카운트다운' },
  { img:'/assets/wskills/sunset.png', label:'눈부신 석양' },
  { img:'/assets/wskills/flash.png',  label:'초산 플래시' },
]

const petSkills = [
  { img:'/assets/petskills/mirage1.png', label:'악마의 검무' },
  { img:'/assets/petskills/mirage2.png', label:'파괴의 칼날' },
  { img:'/assets/petskills/mirage3.png', label:'들끓는 피' },
]















const slidesA = [
  {
    typeIcon: '/assets/types/ultima.png',
    typeBorderCls: 'border-2 border-emerald-300',
    grid: [
      { img:'/assets/memory/patton1.webp' },
      { img:'/assets/memory/patton2.png'  },
      { img:'/assets/memory/patton3.png'  },
      { img:'/assets/memory/patton1.webp' },
      { img:'/assets/memory/adolf2.webp' },
      { img:'/assets/memory/adolf3.webp' },
    ],
    atkIcons: ['/assets/memory/memoryatk1.png','/assets/memory/memoryatk2.png','/assets/memory/memoryatk3.png'],
    ultIcon: '/assets/skillball/vergilult.png',
    tierBadge: { text:'전랭크', cls:'text-white' },
    chipText: '패튼 x4',
    chipText2: '후루루 x2',
    chipText3: '후루루 x2'
  },
  {
    typeIcon: '/assets/types/physics.png',
    typeBorderCls: 'border-2 border-gray-400',
    grid: [
      { img:'/assets/memory/patton1.webp' },
      { img:'/assets/memory/patton2.png'  },
      { img:'/assets/memory/patton3.png'  },
      { img:'/assets/memory/patton1.webp' },
      { img:'/assets/memory/adolf2.webp' },
      { img:'/assets/memory/adolf3.webp' },
    ],
    atkIcons: ['/assets/memory/memoryatk1.png','/assets/memory/memoryatk2.png','/assets/memory/memoryatk3.png'],
    ultIcon: '/assets/skillball/vergilult.png',
    tierBadge: { text:'전랭크', cls:'text-white' },
    chipText: '패튼 x4',
    chipText2: '후루루 x2',
    chipText3: '후루루 x2'
  }
]

// 환통/격전점 탭 2번째 예시 1개
const slidesB = [
  {
    typeIcon: '/assets/types/ultima.png',
    typeBorderCls: 'border-2 border-emerald-300',
    grid: [
      { img:'/assets/memory/patton1.webp' },
      { img:'/assets/memory/patton2.png'  },
      { img:'/assets/memory/patton3.png'  },
      { img:'/assets/memory/patton1.webp' },
      { img:'/assets/memory/fre2.png' },
      { img:'/assets/memory/fre3.png' },
    ],
    atkIcons: ['/assets/memory/memoryatk1.png','/assets/memory/memoryatk2.png','/assets/memory/memoryatk3.png'],
    ultIcon: '/assets/skillball/vergilult.png',
    tierBadge: { text:'전랭크', cls:'text-white' },
    chipText: '패튼 x4',
    chipText2: '프리드리히 x2',
    chipText3: '프리드리히 x2'
  }
]

const rightTab = ref<'tabA'|'tabB'>('tabA')












/* 랭크 데이터 */
const rankRows = [
  { rank:'S',    recommend:'',  note:'1회' },
  { rank:'SS',   recommend:'★', note:'1회 + 해골' },
  { rank:'SS3',  recommend:'',  note:'' },
  { rank:'SS6',  recommend:'',  note:'' },
  { rank:'SSS',  recommend:'★', note:'4회 + 해골' },
  { rank:'SSS3', recommend:'',  note:'' },
  { rank:'SSS6', recommend:'',  note:'' },
  { rank:'SSS+', recommend:'',  note:'' },
]










/* 파티 1  */
const party1 = {
  typeIcon: '/assets/types/physics.png',
  columns: [
    { slides: [
        { img:'/assets/portrait/vergil2.png', label:'버질', borderClass:'border-blue-500' }
      ]},
    { slides: [
        { img:'/assets/portrait/echo2.png',      label:'아리사 · 에코',  borderClass:'border-red-500' },
      ], showNav:false },
    { slides: [
        { img:'/assets/portrait/solacetune2.png',      label:'함영 · 단심',    borderClass:'border-yellow-400' }
      ]},
  ]
}

/* 파티 2 */
const party2 = {
  typeIcon: '/assets/types/ultima.png',
  columns: [
    { slides: [
        { img:'/assets/portrait/vergil2.png',      label:'버질',    borderClass:'border-blue-500' }
      ]},
    { slides: [
        { img:'/assets/portrait/echo2.png',  label:'아리사 · 에코',  borderClass:'border-red-500' }
      ]},
    { slides: [
        { img:'/assets/portrait/solacetune2.png',      label:'함영 · 단심',  borderClass:'border-yellow-400' }
      ]},
  ]
}

const roleIconsParty1 = [
  '/assets/roleIcons/atk.png',
  '/assets/roleIcons/amp.png',
  '/assets/roleIcons/arm.png'
]
const roleIconsParty2 = [
  '/assets/roleIcons/atk.png',
  '/assets/roleIcons/amp.png',
  '/assets/roleIcons/arm.png'
]








//비디오 소스 매핑
const outerTabs = [
  {
    id: 'dark', label: '진의참 사이클',
    inner: [
      { id: 's',   label: 'S',
        videos: { first: '/assets/videos/huimusssS.mp4',  repeat: '/assets/videos/huimusssR.mp4' },
        showModeToggle: false },                // 이 탭은 모드 버튼 숨기기
      { id: 'sss', label: 'SSS',
        videos: { first: '/assets/videos/huimusssS.mp4',  repeat: '/assets/videos/huimusssR.mp4' },
        showModeToggle: true }
    ]
  },
  {
    id: 'light', label: '물리 사이클',
    videos: { first: '/assets/videos/huimusssSSWX.mp4', repeat: '/assets/videos/huimusssSSWX_R.mp4' },
    showModeToggle: true                        // 내부 탭 없이 단일 탭
  }
]
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
    

    <section class="p-3 md:p-6 mx-auto">
      <!-- 상단 3 이미지 -->
      <HeroMosaic
        leftTop="/assets/portrait/vergil1.png"
        leftBottom="/assets/portrait/vergil2.png"
        rightTall="/assets/standings/vergilS.png"


        rightContainerClass="w-[125px] h-[256px]"

        rightFit="cover"
        rightObjectPosition="50% 10%"     
        rightImgClass="scale-[1.8] origin-[55%_15%]"  
      />

      <!-- 이름 배지 -->
      <NameBadge text="버질" />

      <!-- 퀵 네비 pill -->
      <QuickNavPills :items="pills" />

      <!-- 구분선 -->
      <div class="mx-auto max-w-4xl h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none mt-7"></div>

      <!-- 속성/역할 카드 -->
      <AttrRoleCards
        :left="[
          { src:'/assets/types/physics.png',       label:'물리', border:'border-gray-400' },
          { src:'/assets/types/ultima.png', label:'진의참',   border:'border-emerald-300' }
        ]"
        :right="{ src:'/assets/roleIcons/atk.png', label:'공격형' }"
      />
    </section>

  <div id="equip" class="max-w-4xl w-full mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 px-2 py-1 md:px-6 md:py-3 rounded-md bg-[#0A0A23]/30">
    <SectionPill text="장비 & 의식 세팅" />

    <!-- 좌측 2칸 -->
    <div class="col-span-2 bg-black/50 rounded-md p-4 text-white space-y-4">
      <WeaponSkills
        weapon-img="/assets/arms/yamato.png"
        weapon-name="★6 야마토"
        :skills="weaponSkills"
        weapon-box-class="w-[110px] h-[200px] md:w-[120px] md:h-[220px] overflow-hidden rounded-md border-2 border-orange-500"
        weapon-fit="cover"
        weapon-object-position="50% 15%"  
        :weapon-zoom="1.13"               
        weapon-transform-origin=""  
      />

      <SupportPet
        pet-img="/assets/pets/mirage.png"
        pet-name="S · 미라지 블레이드"
        :skills="petSkills"
        pet-box-class="w-full max-w-[120px] aspect-square overflow-hidden rounded-md border-2 border-red-500"
        pet-fit="cover"
        pet-object-position="0% 0%"   
        :pet-zoom="2"                
        pet-transform-origin="60% 10%"
        pet-name-class="text-[11px] md:text-[12px] md:mb-[2px]"  
      />

    </div>

    <!-- 우측 2칸 -->
    <div class="col-span-2 bg-black/50 rounded-md p-4 text-white">
      <!-- 탭 헤더 -->
      <div role="tablist" class="flex gap-2 mb-4 border-b border-white/20">
        <button class="px-3 py-2 md:px-4 md:py-[10px] rounded-t-md text-sm md:text-[16px]"
                :class="rightTab==='tabA' ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white/90'"
                @click="rightTab='tabA'">분쟁</button>
        <button class="px-3 py-2 md:px-4 md:py-[10px] rounded-t-md text-sm md:text-[16px]"
                :class="rightTab==='tabB' ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white/90'"
                @click="rightTab='tabB'">환통/격전점</button>
      </div>

      <div v-if="rightTab==='tabA'">
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
  <div id="rank" class="max-w-4xl w-full mx-auto mt-6 rounded-md bg-[#0A0A23]/30 p-2 md:p-6">
    <div class="col-span-full flex justify-center mb-4">
      <span class="inline-flex items-center gap-2 rounded-md px-4 py-2 text-[15px] font-bold
                  bg-[#0A0A23]/40 text-white border-2 border-black mb-1 mt-2 md:mt-1 md:mb-2">랭크 추천</span>
    </div>
    <RankTable :rows="rankRows" />
  </div>

  <!-- 파티 구성 -->
  <div id="party" class="max-w-4xl w-full mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-2 px-6 py-3 rounded-md bg-[#0A0A23]/30 party">
    <div class="col-span-full flex justify-center mb-4">
      <span class="inline-flex items-center gap-2 rounded-md px-4 py-2 text-[15px] font-bold
                  bg-[#0A0A23]/40 text-white border-2 border-black mt-2 md:mt-3">파티 구성</span>
    </div>

    <!-- ✨ 여기서 roleIcons만 페이지 데이터로 주입 -->
    <PartyBox
      :type-icon="party1.typeIcon"
      :columns="party1.columns"
      :role-icons="roleIconsParty1"
      :role-icon-classes="['-ml-1', '', 'ml-2']"
    />
    <PartyBox
      :type-icon="party2.typeIcon"
      :columns="party2.columns"
      :role-icons="roleIconsParty2"
      :role-icon-classes="['-ml-1', '', 'ml-2']"
    />
  </div>




























  

  <div id="cycle" class="max-w-4xl w-full mx-auto mt-6 grid grid-cols-1 gap-2 md:px-6 md:py-3 rounded-md bg-[#0A0A23]/30">

        <div class="md:col-span-4 flex justify-center mb-3 mt-3 md:mb-4 md:mt-0">
          <div>
                <span class="inline-flex items-center gap-1 sm:gap-2 rounded-md px-3 py-1.5 sm:px-4 sm:py-2 text-[15px]  font-bold
                      bg-[#0A0A23]/40 text-white border-2 border-black hover:bg-white/15 hover:border-white/30
                      focus:outline-none focus:ring-2 focus:ring-white/40 active:scale-[0.98] transition mt-3">
                    사이클 가이드</span>
              </div>
        </div>
        


        <!-- ===== 사이클 박스 전체 ===== -->
<div class="md:col-span-4 bg-black/50 rounded-md p-1 md:p-4 text-white max-w-4xl">

  <!-- [바깥 탭] 암속성/습광 -->
  <div role="tablist" class=" flex gap-2 mb-4 border-b border-white/20">
    <button
      role="tab"
      :aria-selected="cycleTab === 'tabA'"
      @click="cycleTab = 'tabA'"
      class="px-2 py-2 md:px-4 md:py-2 rounded-t-md text-[11px] md:text-[15px] font-semibold"
      :class="cycleTab === 'tabA' ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white/90'"
    >
      암속성 사이클
    </button>
    <button
      role="tab"
      :aria-selected="cycleTab === 'tabB'"
      @click="cycleTab = 'tabB'"
      class="px-2 py-2 md:px-4 md:py-2 rounded-t-md text-[11px] md:text-[15px] font-semibold"
      :class="cycleTab === 'tabB' ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white/90'"
    >
      습광 사이클
    </button>
  </div>

  <!-- ===== 내부 컨테이너 ===== -->
  <div class="max-w-4xl w-full mx-auto mt-2 grid grid-cols-1 gap-4 px-1 md:px-6 py-3 rounded-md bg-[#0A0A23]/30">

    <!-- [안쪽 탭] 저랭크/고랭크 (암속성일 때만 표시) -->
    <div class="col-span-1 md:col-span-1" v-if="cycleTab === 'tabA'">
      <div role="tablist" class="flex gap-2 mb-2 border-b border-white/20">
        <button
          role="tab"
          :aria-selected="cyclerankTab === 's'"
          @click="cyclerankTab = 's'"
          class="px-2 py-2 md:px-4 md:py-2 rounded-t-md text-[11px] md:text-sm font-semibold"
          :class="cyclerankTab === 's' ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white/90'"
        >
          S
        </button>
        <button
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

        <button
          role="tab"
          :aria-selected="cyclerankTab === 'sss'"
          @click="cyclerankTab = 'sss'"
          class="px-2 py-2 md:px-4 md:py-2 rounded-t-md text-[11px] md:text-sm font-semibold"
          :class="cyclerankTab === 'sss' ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white/90'"
        >
          SSS
        </button>

        
      </div>
    </div>

    <!-- ================== 암속성 / 저랭크 ================== -->
    <!-- ================== 암속성 / 고랭크 ================== -->
    <template v-if="cycleTab === 'tabA' && cyclerankTab === 's'">
      <div class="w-full">
          <!-- 아이콘 + 알약 버튼 -->
          <div class="flex flex-col items-center mb-4">
            <img
              src="/assets/types/dark.png"
              alt="암속성"
              class="w-10 h-10 object-cover rounded-md border-2 border-purple-400 mb-3"
            />

            <!-- <div class="flex gap-2">
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
            </div> -->
          </div>

          <!-- 비디오 (src만 변경) -->
          <video
            :src="videoSources[cyclerankTab][mode]"
            controls
            muted
            class="w-full h-auto rounded-md block"
            :key="forceReload ? mode : undefined"
          ></video>
        </div>
      

      <!-- 첫 출전/반복 출전 “시퀀스 영역” -->
      <div class="bg-black/50 md:p-4 rounded-md text-white md:w-full md:max-h-full">
        <div class="flex flex-col items-center mb-4 pb-3 border-b-2 border-white/50">
          <!-- <span class="mt-2 md:mb-2 md:font-semibold text-sm md:text-[17px]">
            {{ mode === 'first' ? '첫 출전 사이클' : '반복 출전 사이클' }}
          </span> -->
          <span class="mt-2 md:mb-2 md:font-semibold text-sm md:text-[17px]">
            반복 사이클
          </span>
        </div>

        <!-- ========== 첫 출전 사이클 시퀀스 ========== -->
          <template v-if="mode === 'first'">

            <Carousel
              :items-to-show="1"
              :wrap-around="false"
              :navigation-enabled="false"   
              :pagination-enabled="true"    
                    
            >
              <!-- Slide A: 기존 콘텐츠 전부 -->
            
          <Slide>
            <!-- [시퀀스 1] -->
            <div class="">
              <div class="w-full max-w-full flex justify-center">
                <div class="flex items-center gap-2 md:gap-4 mb-3 md:mb-0">
                  <div class="flex flex-col items-center ">
                    <img src="/assets/skillball/dodge.png"
                        class="w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-md border-2 border-white object-cover" />
                    <span class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap">[HOLD] 회피</span>
                  </div>

                  <div class="flex flex-col items-center">
                    <img src="/assets/skillball/arrow.png"
                        class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain" />
                  </div>

                  <div class="flex flex-col items-center">
                    <img src="/assets/skillball/basic.png"
                        class="w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-md border-2 border-white object-cover" />
                    <span class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap">[HOLD] 평타</span>
                  </div>

                  <div class="flex flex-col items-center">
                    <img src="/assets/skillball/arrow.png"
                        class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain" />
                  </div>

                  <div class="flex flex-col items-center">
                    <img src="/assets/skillball/huimuult.png"
                        class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                    <span class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap">필살기</span>
                  </div>
                </div>
              </div>

                   </div>
                   </Slide>

                  
                    <Slide>
                      <div class="grid grid-col-1 flex items-center justify-center">
                        <p class="text-sm md:text-base text-white/80 mb-4">
                          교대-회피꾹-평꾹-궁
                        </p>
                        
                        
                      </div>
                    </Slide>

                    <template #addons>
                      <div class="absolute right-5">
                        <Pagination />
                      </div>
                    </template>
                  </Carousel>

                </template>

                <template v-else>
                   <Carousel
                      :items-to-show="1"
                      :wrap-around="false"
                      :navigation-enabled="false"   
                      :pagination-enabled="true"           
                    >
                    
                  <Slide>
                  </Slide>

              
                  </Carousel>
                  

                </template>
      </div>
      

      
    </template>

    <!-- ================== 암속성 / 저랭크 ================== -->
    <template v-if="cycleTab === 'tabA' && cyclerankTab === 'sswx'">
      <div class="col-span-1 md:col-span-2 text-white/70 p-4">
        저랭크 가이드는 준비중입니다.
      </div>
    </template>

    <!-- ================== 암속성 / 저랭크 ================== -->
    <template v-if="cycleTab === 'tabA' && cyclerankTab === 'sswo'">
      <div class="col-span-1 md:col-span-2 text-white/70 p-4">
        저랭크 가이드는 준비중입니다.
      </div>
    </template>


    <!-- ================== 암속성 / 고랭크 ================== -->
    <template v-if="cycleTab === 'tabA' && cyclerankTab === 'sss'">
      <div class="w-full">
          <!-- 아이콘 + 알약 버튼 -->
          <div class="flex flex-col items-center mb-4">
            <img
              src="/assets/types/dark.png"
              alt="암속성"
              class="w-10 h-10 object-cover rounded-md border-2 border-purple-400 mb-3"
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

          <!-- 비디오 (src만 변경) -->
          <video
            :src="videoSources[cyclerankTab][mode]"
            controls
            muted
            class="w-full h-auto rounded-md block"
            :key="forceReload ? mode : undefined"
          ></video>
        </div>
      

      <!-- 첫 출전/반복 출전 “시퀀스 영역” -->
      <div class="bg-black/50 md:p-4 rounded-md text-white md:w-full md:max-h-full">
        <div class="flex flex-col items-center mb-4 pb-3 border-b-2 border-white/50">
          <span class="mt-2 md:mb-2 md:font-semibold text-sm md:text-[17px]">
            {{ mode === 'first' ? '첫 출전 사이클' : '반복 출전 사이클' }}
          </span>
        </div>

        <!-- ========== 첫 출전 사이클 시퀀스 ========== -->
          <template v-if="mode === 'first'">

            <Carousel
              :items-to-show="1"
              :wrap-around="false"
              :navigation-enabled="false"   
              :pagination-enabled="true"    
                    
            >
              <!-- Slide A: 기존 콘텐츠 전부 -->
            
          <Slide>
            <div class="block md:hidden">
              <img
                src="/assets/mobileCycle/ssshuimuS.png"
                alt="시퀀스 1 전체 흐름"
                class="w-full h-auto rounded-md shadow-sm select-none"
              />
            </div>
            <!-- [시퀀스 1] -->
            <div class="hidden md:block">
            <div class="min-w-0 w-full max-w-full">
              <div class="inline-flex min-w-max items-center gap-3 sm:gap-4">
                <div class="flex flex-col items-center -ml-1">
                  <img src="/assets/skillball/dodge.png" class="w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-md border-2 border-white object-cover" />
                  <span class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap">[HOLD] 회피</span>
                </div>
                <div class="inline-flex flex-col items-center -mx-3">
                  <img src="/assets/skillball/arrow.png" class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain" />
                </div>
                <div class="flex flex-col items-center">
                  <img src="/assets/skillball/huimublue.png" class="w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-md border-2 border-white object-cover" />
                  <span class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap">[HOLD] 파볼</span>
                </div>
                <div class="flex flex-col items-center">
                  <div class="inline-flex shrink-0 min-w-max items-center rounded-md px-2 border-l-2 border-r-2 border-red-500">
                    <img src="/assets/skillball/huimured.png" class="w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-md object-cover shrink-0" />
                    <img src="/assets/skillball/huimured.png" class="w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-md object-cover shrink-0" />
                    <img src="/assets/skillball/huimured.png" class="w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-md object-cover shrink-0" />
                  </div>
                  <span class="mt-2 text-[10px] whitespace-nowrap">빨볼(파볼 막타쯤)</span>
                </div>
                <div class="inline-flex flex-col items-center">
                  <img src="/assets/skillball/arrow.png" class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain" />
                </div>
                <div class="flex flex-col items-center">
                  <div class="inline-flex items-center rounded-md px-1">
                    <img src="/assets/skillball/huimured.png" class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                    <img src="/assets/skillball/huimured.png" class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                    <img src="/assets/skillball/huimured.png" class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                  </div>
                  <span class="mt-2 text-[10px] whitespace-nowrap">빨볼 3체인</span>
                </div>
                <div class="inline-flex flex-col items-center">
                  <img src="/assets/skillball/arrow.png" class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain" />
                </div>
                <div class="flex flex-col items-center mx-3">
                  <img src="/assets/skillball/huimuult.png" class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                  <span class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap">필살기</span>
                </div>
              </div>
            </div>

            

              <!-- [시퀀스 3] -->
                  <div class="min-w-0 w-full max-w-full mt-6">
                    <div class="inline-flex min-w-max items-center gap-3 sm:gap-4">
                      <div class="inline-flex flex-col items-center">
                        <img src="/assets/skillball/arrow.png" alt="→"
                            class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain" />
                      </div>

                      <div class="flex flex-col items-center">
                        <div class="inline-flex items-center rounded-md -mx-5">
                          <img src="/assets/skillball/huimured.png" alt="" class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                          <img src="/assets/skillball/huimured.png" alt="" class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                          <img src="/assets/skillball/huimured.png" alt="" class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                        </div>
                        <span class="mt-2 text-[10px] whitespace-nowrap">빨볼 3체인</span>
                      </div>

                      <div class="inline-flex flex-col items-center -mr-3">
                        <img src="/assets/skillball/arrow.png" alt="→"
                            class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain" />
                      </div>

                      <div class="flex flex-col items-center">
                        <div class="inline-flex items-center rounded-md">
                          <img src="/assets/skillball/huimured.png" alt="" class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                          <img src="/assets/skillball/huimured.png" alt="" class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                          <img src="/assets/skillball/huimured.png" alt="" class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                        </div>
                        <span class="mt-2 text-[10px] whitespace-nowrap">빨볼 3체인</span>
                      </div>

                      <div class="inline-flex flex-col items-center">
                        <img src="/assets/skillball/arrow.png" alt="→"
                            class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain" />
                      </div>

                      <div class="flex flex-col items-center">
                        <img src="/assets/skillball/dodge.png" alt=""
                            class="w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-md object-cover" />
                        <span class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap">회피</span>
                      </div>

                      <div class="inline-flex flex-col items-center">
                        <img src="/assets/skillball/arrow.png" alt="→"
                            class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain" />
                      </div>

                      <div class="flex flex-col items-center mx-3">
                        <img src="/assets/skillball/basic.png" alt=""
                            class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md border-2 border-white object-cover" />
                        <span class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap">[HOLD] 평타 (본체 반짝이면 떼기)</span>
                      </div>
                    </div>
                  </div>
                  

                  <div class="min-w-0 w-full max-w-full mt-6">
                    <div class="inline-flex min-w-max items-center gap-3 sm:gap-4">
                      <div class="inline-flex flex-col items-center">
                        <img src="/assets/skillball/arrow.png" alt="→"
                            class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain" />
                      </div>

                      <div class="flex flex-col items-center">
                        <div class="inline-flex items-center rounded-md px-1">
                          <img src="/assets/skillball/huimured.png" alt="" class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                          <img src="/assets/skillball/huimured.png" alt="" class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                          <img src="/assets/skillball/huimured.png" alt="" class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                        </div>
                        <span class="mt-2 text-[10px] whitespace-nowrap">빨볼 3체인 (찌르기 모션 본 후)</span>
                      </div>

                    
                    </div>
                   </div> 
                   </div>
                   </Slide>

                  
                    <Slide>
                      <div class="grid grid-col-1 flex items-center justify-center">
                        <p class="text-sm md:text-base text-white/80 mb-4">
                          교대-회피꾹-파볼꾹-막타때 빨-빨-궁
                        </p>
                        <p class="text-sm md:text-base text-white/80">
                          -빨빨-회피-평꾹-빨-교대
                        </p>
                        
                      </div>
                    </Slide>

                    <template #addons>
                      <div class="absolute right-5">
                        <Pagination />
                      </div>
                    </template>
                  </Carousel>

                </template>

                <template v-else>
                   <Carousel
                      :items-to-show="1"
                      :wrap-around="false"
                      :navigation-enabled="false"   
                      :pagination-enabled="true"    
                            
                    >
                      <!-- Slide A: 기존 콘텐츠 전부 -->
                    
                  <Slide>
                  
                  <div class="block md:hidden">
                    <img
                      src="/assets/mobileCycle/ssshuimuR.png"
                      alt="시퀀스 1 전체 흐름"
                      class="w-full h-auto rounded-md shadow-sm select-none"
                    />
                  </div>
                    
                <div class="w-full flex flex-col gap-2 hidden md:block">
                  <!-- [시퀀스 2] (필살기 시작) -->
                    <div class="min-w-0 w-full max-w-full mb-3">
                      <div class="inline-flex min-w-max items-center gap-3 sm:gap-4">
                        <div class="flex flex-col items-center">
                          <img src="/assets/skillball/huimuult.png" alt="" class="w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-md object-cover" />
                          <span class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap">필살기</span>
                        </div>
                        <div class="inline-flex flex-col items-center">
                          <img src="/assets/skillball/arrow.png" alt="→" class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain" />
                        </div>
                      </div>
                    </div>

                    <!-- [시퀀스 3~5 묶음] -->
                    <div class="relative border border-white rounded-md p-0 space-y-5">
                      <span class="absolute -top-3 left-3 bg-black px-2 font-bold text-[25px] text-white">x4</span>

                      <!-- [시퀀스 3] -->
                      <div class="w-full min-w-0">
                        <div class="inline-flex items-center gap-2 sm:gap-4">
                          <div class="flex flex-col items-center">
                            <div class="inline-flex items-center rounded-md ml-3">
                              <img src="/assets/skillball/huimured.png" alt="" class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                              <img src="/assets/skillball/huimured.png" alt="" class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                              <img src="/assets/skillball/huimured.png" alt="" class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                            </div>
                            <span class="mt-2 text-[10px] whitespace-nowrap">빨볼 3체인</span>
                          </div>
                          <div class="inline-flex flex-col items-center -ml-4">
                            <img src="/assets/skillball/arrow.png" alt="→" class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain" />
                          </div>
                          <div class="flex flex-col items-center">
                            <div class="inline-flex items-center rounded-md -ml-4">
                              <img src="/assets/skillball/huimured.png" alt="" class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                              <img src="/assets/skillball/huimured.png" alt="" class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                              <img src="/assets/skillball/huimured.png" alt="" class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                            </div>
                            <span class="mt-2 text-[10px] whitespace-nowrap">빨볼 3체인</span>
                          </div>
                          
                          <div class="inline-flex flex-col items-center shrink-0">
                            <img src="/assets/skillball/arrow.png" alt="→" class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain" />
                          </div>
                          <div class="flex flex-col items-center">
                            <img src="/assets/skillball/dodge.png" alt="" class="w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-md object-cover" />
                            <span class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap">회피</span>
                          </div>
                          <div class="inline-flex flex-col items-center shrink-0">
                            <img src="/assets/skillball/arrow.png" alt="→" class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain" />
                          </div>
                          <div class="flex flex-col items-center">
                            <img src="/assets/skillball/basic.png" alt="" class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md border-2 border-white object-cover" />
                            <span class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap">[HOLD] 평타 (본체 반짝이면 떼기)</span>
                          </div>
                        </div>
                      </div>

              
                      <!-- [시퀀스 5] -->
                      <div class="w-full  min-w-0 pb-7">
                        <div class="inline-flex items-center gap-3 sm:gap-4">
                          <div class="inline-flex flex-col items-center shrink-0">
                            <img src="/assets/skillball/arrow.png" alt="→" class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain" />
                          </div>
                          <div class="flex flex-col items-center">
                            <div class="inline-flex items-center rounded-md px-1">
                              <img src="/assets/skillball/huimured.png" alt="" class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                              <img src="/assets/skillball/huimured.png" alt="" class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                              <img src="/assets/skillball/huimured.png" alt="" class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                            </div>
                            <span class="mt-2 text-[10px] whitespace-nowrap">빨볼 3체인 (찌르기 모션 본 후)</span>
                          </div>
                          <div class="inline-flex flex-col items-center shrink-0">
                            <img src="/assets/skillball/arrow.png" alt="→" class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain" />
                          </div>
                          <div class="flex flex-col items-center">
                            <img src="/assets/skillball/huimuult.png" alt="필살기" class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                            <span class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap">필살기</span>
                          </div>
                        </div>
                      </div>
                      </div>

          <!-- [시퀀스 3] -->
                  <div class="min-w-0 w-full max-w-full mt-3">
                    <div class="inline-flex min-w-max items-center gap-3 sm:gap-4">
                      <div class="inline-flex flex-col items-center">
                        <img src="/assets/skillball/arrow.png" alt="→"
                            class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain" />
                      </div>

                      <div class="flex flex-col items-center">
                        <div class="inline-flex items-center rounded-md -mx-5">
                          <img src="/assets/skillball/huimured.png" alt="" class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                          <img src="/assets/skillball/huimured.png" alt="" class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                          <img src="/assets/skillball/huimured.png" alt="" class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                        </div>
                        <span class="mt-2 text-[10px] whitespace-nowrap">빨볼 3체인</span>
                      </div>

                      <div class="inline-flex flex-col items-center -mr-4">
                        <img src="/assets/skillball/arrow.png" alt="→"
                            class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain" />
                      </div>

                      <div class="flex flex-col items-center">
                        <div class="inline-flex items-center rounded-md">
                          <img src="/assets/skillball/huimured.png" alt="" class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                          <img src="/assets/skillball/huimured.png" alt="" class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                          <img src="/assets/skillball/huimured.png" alt="" class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                        </div>
                        <span class="mt-2 text-[10px] whitespace-nowrap">빨볼 3체인</span>
                      </div>

                      <div class="inline-flex flex-col items-center">
                        <img src="/assets/skillball/arrow.png" alt="→"
                            class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain" />
                      </div>

                      <div class="flex flex-col items-center">
                        <img src="/assets/skillball/dodge.png" alt=""
                            class="w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-md object-cover" />
                        <span class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap">회피</span>
                      </div>

                      <div class="inline-flex flex-col items-center">
                        <img src="/assets/skillball/arrow.png" alt="→"
                            class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain" />
                      </div>

                      <div class="flex flex-col items-center mx-3">
                        <img src="/assets/skillball/basic.png" alt=""
                            class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md border-2 border-white object-cover" />
                        <span class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap">[HOLD] 평타 (본체 반짝이면 떼기)</span>
                      </div>
                    </div>
                  </div>

                

                  <!-- [시퀀스 5] -->
                  <div class="min-w-0 w-full max-w-full mt-3">
                    <div class="inline-flex min-w-max items-center gap-3 sm:gap-4">
                      <div class="inline-flex flex-col items-center">
                        <img src="/assets/skillball/arrow.png" alt="→"
                            class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain" />
                      </div>

                      <div class="flex flex-col items-center">
                        <div class="inline-flex items-center rounded-md px-1">
                          <img src="/assets/skillball/huimured.png" alt="" class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                          <img src="/assets/skillball/huimured.png" alt="" class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                          <img src="/assets/skillball/huimured.png" alt="" class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                        </div>
                        <span class="mt-2 text-[10px] whitespace-nowrap">빨볼 3체인 (찌르기 모션 본 후)</span>
                      </div>
                    </div>
                  </div>
                  </div>

                  </Slide>

                  
                    <Slide>
                      <div class="grid grid-col-1 flex items-center justify-center">
                        <p class="text-sm md:text-base text-white/80 mb-4">
                          교대-궁-빨빨-회피-평꾹-빨-궁
                        </p>
                        <p class="text-sm md:text-base text-white/80 mb-4">
                          -빨빨-회피-평꾹-빨-궁
                        </p>
                        <p class="text-sm md:text-base text-white/80 mb-4">
                          -빨빨-회피-평꾹-빨-궁
                        </p>
                        <p class="text-sm md:text-base text-white/80 mb-4">
                          -빨빨-회피-평꾹-빨-궁
                        </p>
                        <p class="text-sm md:text-base text-white/80 mb-4">
                          -빨빨-회피-평꾹-빨-교대
                        </p>
                        
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

    <!-- ================== 습광 사이클 ================== -->
    <template v-if="cycleTab === 'tabB'">
      <div class="col-span-1 md:col-span-2 flex flex-col md:flex-row gap-4">
        <div class="flex-1 bg-black/50 p-4 rounded-md text-white">
          <div class="flex flex-col items-center mb-4 pb-3 border-b-2 border-white/50">
            <span class="mt-2 text-s">첫 출전 사이클</span>
          </div>
          <!-- 내용 -->
        </div>
        <div class="flex-1 bg-black/50 p-4 rounded-md text-white">
          <div class="flex flex-col items-center mb-4 pb-3 border-b-2 border-white/50">
            <span class="mt-2 text-s">반복 사이클</span>
          </div>
          <!-- 내용 -->
        </div>
      </div>
    </template>
  </div>
</div>
</div>




        

   
  
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
  width: 10px; height: 10px;               /* 선택: 크기 조절 */
  background-color: rgba(255, 255, 255, .35);
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
