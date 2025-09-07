<script setup lang="ts">
import { ref } from 'vue'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'


const leftTab  = ref<'tabA'|'tabB'>('tabA')
const rightTab = ref<'tabA'|'tabB'>('tabA')
const cycleTab = ref<'tabA'|'tabB'>('tabA')
       
const cyclerankTab = ref<'s' | 'sswx' | 'sswo' | 'sss'>('sss')

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}



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
</script>

<template>
  <div class="min-h-screen bg-[#1a1a1a]/95 text-white">
    <nav class="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div class="font-bold"></div>
      <div class="space-x-4">
        <NuxtLink to="/" class="hover:underline">Home</NuxtLink>
        <NuxtLink to="/char" class="hover:underline">Char</NuxtLink>
        <NuxtLink to="/events" class="hover:underline">Event</NuxtLink>
      </div>
    </nav>

  
    <section class="p-3 md:p-6 mx-auto">
      
      <div class="grid grid-cols-2 sm:grid-cols-2 gap-3 max-w-xs mx-auto px-8 mb-7">
        <!-- 왼쪽: 1:1 두 장 -->
        <div class="grid grid-rows-2 gap-3">
          <div class="relative rounded-lg overflow-hidden border-2 border-gray-100">
            <div class="aspect-square">
              <img src="/assets/portrait/huimu1.png" alt=""
                  class="w-full h-full object-cover" />
            </div>
          </div>
          <div class="relative rounded-lg overflow-hidden border-2 border-gray-100">
            <div class="aspect-square">
              <img src="/assets/portrait/huimu2.png" alt=""
                  class="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div class="relative rounded-lg overflow-hidden border-2 border-gray-100 w-[125px] h-[256px]">
            <img 
              src="/assets/standings/huimuS.webp"
              alt=""
              class="w-full h-[400px] object-cover " />
          </div>
        </div>


      <div class="flex justify-center py-2">
        <span class="inline-block px-3 py-1 rounded-md border-2 border-white/40 font-bold text-white text-[20px]">
          비앙카 · 휘명
        </span>
      </div>
      
      <div class="max-w-lg mx-auto flex flex-wrap justify-center gap-2 sm:gap-3 mt-7">
        <!-- 장비 & 의식 세팅 -->
        <button @click="scrollTo('equip')"
          class="inline-flex items-center gap-1 sm:gap-2 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium
                bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30
                focus:outline-none focus:ring-2 focus:ring-white/40 active:scale-[0.98] transition"
        >
          장비 & 의식 세팅
        </button>

        <!-- 랭크 추천 -->
        <button @click="scrollTo('rank')"
          class="inline-flex items-center gap-1 sm:gap-2 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium
                bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30
                focus:outline-none focus:ring-2 focus:ring-white/40 active:scale-[0.98] transition"
        >
          랭크 추천
        </button>

        <!-- 파티 구성 -->
        <button @click="scrollTo('party')"
          class="inline-flex items-center gap-1 sm:gap-2 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium
                bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30
                focus:outline-none focus:ring-2 focus:ring-white/40 active:scale-[0.98] transition"
        >
          파티 구성
        </button>

        <!-- 사이클 -->
        <button @click="scrollTo('cycle')"
          class="inline-flex items-center gap-1 sm:gap-2 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium
                bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30
                focus:outline-none focus:ring-2 focus:ring-white/40 active:scale-[0.98] transition"
        >
          사이클 가이드
        </button>

      </div>

      
      <div class="mx-auto max-w-4xl h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none mt-7"></div>
      


      <!-- 컨테이너: 모바일 70vw, md↑에서는 w-full / max-w-md -->
      <div class="mx-auto mt-6 w-[70vw] md:w-full max-w-md rounded-md bg-[#0A0A23]/30 px-4 py-3">
        <div class="grid grid-cols-3 gap-1 md:gap-2">

          <!-- (좌) 카드: 암속성 + 습광 (2칸 차지) -->
          <div class="col-span-2 bg-black/50 rounded-xl p-3 md:p-4 text-white">
            <div class="grid grid-cols-2 place-items-center">
              <!-- 암속성 -->
              <div class="w-full aspect-square max-w-[64px] md:max-w-[90px]">
                <img src="/assets/types/dark.png"
                    alt="암속성"
                    class="w-full h-full object-contain rounded-md border-2 border-purple-400" />
              </div>
              <!-- 습광 -->
              <div class="w-full aspect-square max-w-[64px] md:max-w-[90px]">
                <img src="/assets/types/lightnoise.png"
                    alt="습광"
                    class="w-full h-full object-contain rounded-md border-2 border-yellow-200" />
              </div>
            </div>
            <div class="mt-2 grid grid-cols-2 text-center text-[10px] md:text-xs">
              <span>암속성</span>
              <span>습광</span>
            </div>
          </div>

          <!-- (우) 카드: 공격형 (1칸) -->
          <div class="col-span-1 bg-black/50 rounded-xl p-3 md:p-4 grid place-items-center text-white">
            <div class="w-full aspect-square max-w-[64px] md:max-w-[87px]">
              <img src="/assets/roleIcons/atk.png"
                  alt="공격형"
                  class="w-full h-full object-contain rounded-md ring-2 ring-white p-1" />
            </div>
            <span class="mt-2 text-[10px] md:text-xs">공격형</span>
          </div>

        </div>
      </div>



      <div id="equip" class="max-w-4xl w-full mx-auto mt-6 grid grid-cols-2 md:grid-cols-4 gap-2 px-2 py-1 md:px-6 md:py-3 rounded-md bg-[#0A0A23]/30">
        
        
        <div class="col-span-2 md:col-span-4 flex justify-center mb-1 md:mb-4">
          <div>
                <span class="inline-flex items-center gap-1 sm:gap-2 rounded-md md:px-3 md:py-1.5 px-3 py-1.5 text-[15px]  font-bold
                      bg-[#0A0A23]/40 text-white border-2 border-black hover:bg-white/15 hover:border-white/30
                      focus:outline-none focus:ring-2 focus:ring-white/40 active:scale-[0.98] transition mt-3">
                    장비 & 의식 세팅</span>
              </div>
        </div>
        
        
        <div class="col-span-2 bg-black/50 rounded-md p-4 text-white space-y-4">


           
            <div class="rounded-md bg-black/30 p-3">
                <div class="grid grid-cols-3 md:grid-cols-3 gap-4 items-center md:pt-5 md:pb-5 md:h-full">
                    <!-- 왼쪽: 이미지 + 텍스트 -->
                    <div class="md:col-span-1 flex flex-col items-center">
                      <img 
                        src="/assets/arms/orora.png" 
                        alt=""
                        class="w-[100px] h-[170px] md:w-[110px] md:h-[220px] object-cover mb-2 rounded-md border-2 border-orange-500"
                      />
                      <span class="text-sm">★6 오로라</span>
                    </div>

                    <!-- 오른쪽: 3행 -->
                    <div class="col-span-2 rounded-md relative">
                      <!-- 상단 중앙 텍스트 상자 -->
                      <div class="absolute -top-1 left-1/2 -translate-x-1/2">
                        <span
                          class="inline-flex items-center rounded-full px-3 py-1 text-xs md:text-[12px]
                                bg-white/10 text-white border border-white/20 backdrop-blur-[2px] shadow whitespace-nowrap"
                        >
                          무기 공명 추천
                        </span>
                      </div>

                      <!-- 리스트 본문: 상단 pill과 겹치지 않도록 패딩 추가 -->
                      <div class="divide-y divide-white/20  md:w-full pt-5 md:pt-7">
                        <!-- Row 1 -->
                        <div class="grid grid-cols-10 gap-2 md:gap-6 py-2 px-6">
                          <div class="col-span-3 flex items-center -ml-4 md:-ml-0">
                            <div class="relative w-[40px] md:w-14 aspect-square rounded-md border-2 border-white/30 shrink-0">
                              <img src="/assets/wskills/count.png" alt="img1"
                                  class="w-full h-full object-cover" />
                              <!-- 번호 배지 -->
                              <span class="absolute -top-1 -left-1 px-1 rounded bg-white/90 text-black text-[10px] font-bold leading-none shadow">
                                1
                              </span>
                            </div>
                          </div>
                          <div class="col-span-7 flex items-center text-[12px] md:text-sm whitespace-nowrap">
                            죽음의 카운트다운
                          </div>
                        </div>

                        <!-- Row 2 -->
                        <div class="grid grid-cols-10 gap-2 md:gap-6 py-2 px-6">
                          <div class="col-span-3 flex items-center -ml-4 md:-ml-0">
                            <div class="relative w-[40px] md:w-14 aspect-square rounded-md border-2 border-white/30 shrink-0">
                              <img src="/assets/wskills/sunset.png" alt="img1"
                                  class="w-full h-full object-cover" />
                              <span class="absolute -top-1 -left-1 px-1 rounded bg-white/90 text-black text-[10px] font-bold leading-none shadow">
                                2
                              </span>
                            </div>
                          </div>
                          <div class="col-span-7 flex items-center text-[12px] md:text-sm whitespace-nowrap">
                            눈부신 석양
                          </div>
                        </div>

                        <!-- Row 3 -->
                        <div class="grid grid-cols-10 gap-2 md:gap-6 py-2 px-6">
                          <div class="col-span-3 flex items-center -ml-4 md:-ml-0">
                            <div class="relative w-[40px] md:w-14 aspect-square rounded-md border-2 border-white/30 shrink-0">
                              <img src="/assets/wskills/light.png" alt="img1"
                                  class="w-full h-full object-cover" />
                              <span class="absolute -top-1 -left-1 px-1 rounded bg-white/90 text-black text-[10px] font-bold leading-none shadow">
                                3
                              </span>
                            </div>
                          </div>
                          <div class="col-span-7 flex items-center text-[12px] md:text-sm whitespace-nowrap">
                            광휘의 파편
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

              </div>

              <div class="rounded-md bg-black/30 p-3">
              <div class="grid grid-cols-3 gap-3 py-[13px]">
                <!-- 왼쪽(1) : 정사각형 이미지 + 이름 -->
                <div class="col-span-1 flex flex-col items-center">
                  <div class="w-full max-w-[120px] aspect-square overflow-hidden rounded-md border-2 border-red-500">
                    <img src="/assets/pets/jellyfish.png" alt=""
                        class="w-full h-[200px] object-cover object-[55%_0%] -translate-y-[12%]" />
                  </div>
                  <span class="mt-2 text-xs md:text-sm text-white/90 text-center">S · 탁리</span>
                </div>

                <!-- 오른쪽(2) : 가로로 정사각형 3개 + 각 텍스트 -->
            <div class="col-span-2 flex flex-col justify-center">
              <!-- 상단 중앙 라벨 -->
              <div class="text-center text-xs md:text-[12px] text-white/90 mb-2 md:mb-3">
                <span
                    class="inline-flex items-center rounded-full px-3 py-1 text-xs md:text-[12px]
                          bg-white/10 text-white border border-white/20 backdrop-blur-[2px] shadow"
                  >
                  보조기 스킬 추천
                </span>
              </div>

              <!-- 이미지 3개: 크기 축소 + 중앙정렬 -->
              <div class="grid grid-cols-3 gap-3 place-items-center">
                <!-- 카드 1 -->
                <div class="flex flex-col items-center">
                  <div class="relative w-full max-w-[90px] md:max-w-[100px] aspect-square rounded-md overflow-hidden border border-white/20">
                    <!-- 좌상단 번호 배지 -->
                    <span class="absolute top-1 left-1 px-1 rounded bg-white/90 text-black text-[10px] font-bold leading-none">1</span>
                    <img src="/assets/petskills/jellyfish1.png" alt=""
                        class="w-full h-full object-cover object-center" />
                  </div>
                  <span class="mt-1 text-[11px] md:text-xs text-white/90 text-center">꿈의 찬가</span>
                </div>

                <!-- 카드 2 -->
                <div class="flex flex-col items-center">
                  <div class="relative w-full max-w-[90px] md:max-w-[100px] aspect-square rounded-md overflow-hidden border border-white/20">
                    <span class="absolute top-1 left-1 px-1 rounded bg-white/90 text-black text-[10px] font-bold leading-none">2</span>
                    <img src="/assets/petskills/jellyfish2.png" alt=""
                        class="w-full h-full object-cover object-center" />
                  </div>
                  <span class="mt-1 text-[11px] md:text-xs text-white/90 text-center">가시의 공명</span>
                </div>

                <!-- 카드 3 -->
                <div class="flex flex-col items-center">
                  <div class="relative w-full max-w-[90px] md:max-w-[100px] aspect-square rounded-md overflow-hidden border border-white/20">
                    <span class="absolute top-1 left-1 px-1 rounded bg-white/90 text-black text-[10px] font-bold leading-none">3</span>
                    <img src="/assets/petskills/jellyfish3.png" alt=""
                        class="w-full h-full object-cover object-center" />
                  </div>
                  <span class="mt-1 text-[11px] md:text-xs text-white/90 text-center">얼음의 예찬</span>
                </div>
              </div>
            </div>

              </div>
            </div>

          </div>

        <!-- <div class="col-span-1 bg-black/50 rounded-md p-4 text-center text-white">
          box2
        </div> -->
        <div class="col-span-2 bg-black/50 rounded-md p-4 text-white">
          <!-- 탭 헤더 -->
          <div role="tablist" class="flex gap-2 mb-4 border-b border-white/20">
            <button
              role="tab"
              :aria-selected="rightTab === 'tabA'"
              @click="rightTab = 'tabA'"
              class="px-3 py-2 md:px-4 md:py-[10px] rounded-t-md text-sm md:text-[16px]"
              :class="rightTab === 'tabA'
                ? 'bg-white/10 text-white'
                : 'text-white/70 hover:text-white/90'"
            >
              분쟁
            </button>
            <button
              role="tab"
              :aria-selected="rightTab === 'tabB'"
              @click="rightTab = 'tabB'"
              class="px-3 py-2 md:px-4 md:py-[10px] rounded-t-md text-sm md:text-[16px]"
              :class="rightTab === 'tabB'
                ? 'bg-white/10 text-white'
                : 'text-white/70 hover:text-white/90'"
            >
              환통/격전점
            </button>
          </div>
          

          <!-- 탭 콘텐츠: 높이 출렁임을 막고 싶으면 고정 높이/최소 높이 지정 -->
          <div class="rounded-md bg-black/30 p-3">
              <!-- 탭 A: 캐러셀 1 -->
              <div v-if="rightTab === 'tabA'" class="grid grid-cols-1">
                <Carousel :items-to-show="1" :wrap-around="true" :autoplay="0" :pause-autoplay-on-hover="false" class="memory">
                  <Slide>
                    <div class="w-full flex flex-col items-center">
                      <!-- 맨 위: 암속성 -->
                      <div class="mb-3 flex flex-col items-center">
                        <img src="/assets/types/dark.png" alt="img1"
                            class="w-10 h-10 object-cover rounded-md border-2 border-purple-400" />
                    </div>
    
                    <div class="w-full max-w-[310px] mx-auto bg-[#1E1E2F] rounded-md border border-white/10 p-3">
                      <!-- 3 × 2 그리드 -->
                      <div class="grid grid-cols-3 gap-3">
                        <!-- 01 -->
                        <div class="relative rounded-md overflow-hidden border border-white/20 bg-black/40">
                          <span class="absolute top-1 left-1 text-[10px] font-semibold text-white/80">01</span>
                          <div class="aspect-[3/4]">
                            <img src="/assets/memory/jeanne1.webp" alt="" class="w-full h-full object-cover" />
                          </div>
                        </div>

                        <!-- 02 -->
                        <div class="relative rounded-md overflow-hidden border border-white/20 bg-black/40">
                          <span class="absolute top-1 left-1 text-[10px] font-semibold text-white/80">02</span>
                          <div class="aspect-[3/4]">
                            <img src="/assets/memory/jeanne2.png" alt="" class="w-full h-full object-cover" />
                          </div>
                        </div>

                        <!-- 03 -->
                        <div class="relative rounded-md overflow-hidden border border-white/20 bg-black/40">
                          <span class="absolute top-1 left-1 text-[10px] font-semibold text-white/80">03</span>
                          <div class="aspect-[3/4]">
                            <img src="/assets/memory/jeanne3.png" alt="" class="w-full h-full object-cover" />
                          </div>
                        </div>

                        <!-- 04 -->
                        <div class="relative rounded-md overflow-hidden border border-white/20 bg-black/40">
                          <span class="absolute top-1 left-1 text-[10px] font-semibold text-white/80">04</span>
                          <div class="aspect-[3/4]">
                            <img src="/assets/memory/jeanne1.webp" alt="" class="w-full h-full object-cover" />
                          </div>
                        </div>

                        <!-- 05 -->
                        <div class="relative rounded-md overflow-hidden border border-white/20 bg-black/40">
                          <span class="absolute top-1 left-1 text-[10px] font-semibold text-white/80">05</span>
                          <div class="aspect-[3/4]">
                            <img src="/assets/memory/bathlon2.png" alt="" class="w-full h-full object-cover" />
                          </div>
                        </div>

                        <!-- 06 -->
                        <div class="relative rounded-md overflow-hidden border border-white/20 bg-black/40">
                          <span class="absolute top-1 left-1 text-[10px] font-semibold text-white/80">06</span>
                          <div class="aspect-[3/4]">
                            <img src="/assets/memory/bathlon3.png" alt="" class="w-full h-full object-cover" />
                          </div>
                        </div>
                      </div>

                      <!-- 하단 라벨 위: 3:1 라벨 -->
                        <div class="mt-3 -mx-1 md:-mx-2">
                          <div class="rounded-md px-2">
                            <div class="grid grid-cols-4 items-center gap-2">
                              <div class="col-span-3">
                                <div class="flex items-center justify-center gap-2">
                                  <img src="/assets/memory/memoryatk1.png" class="w-10 h-10 object-contain" alt="">
                                  <div class=" text-[11px] md:text-xs text-white/85">or</div>
                                  <img src="/assets/memory/memoryatk2.png" class="w-10 h-10 object-contain" alt="">
                                  <div class=" text-[11px] md:text-xs text-white/85">or</div>
                                  <img src="/assets/memory/memoryatk3.png" class="w-10 h-10 object-contain" alt="">
                                  
                                </div>
                                <div class="mt-1 text-center text-[11px] md:text-xs text-white/85">공격력</div>
                              </div>

                              <div class="col-span-1 relative pl-3">
                                <span class="absolute left-0 top-1/2 -translate-y-1/2 h-[70%] w-px bg-white/20"></span>

                                <div class="flex flex-col items-center">
                                  <img src="/assets/skillball/huimuult.png" class="w-10 h-10 object-contain" alt="">
                                  <div class="mt-1 text-[11px] md:text-xs text-white/85">필살기</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      <!-- 하단 라벨 -->
                      <div class="mt-3 border-t border-white/10 pt-2 text-center text-xs whitespace-nowrap">
                        <span class="inline-flex items-center gap-1 sm:gap-2 rounded-full px-3 py-1 font-semibold
                                     bg-white/10 text-red-500 border border-white/20 hover:bg-white/15 hover:border-white/30
                                     focus:outline-none focus:ring-2 focus:ring-white/40 active:scale-[0.98] transition -ml-1 md:ml-0">
                                    SSS 미만</span>
                        <span class="text-pink-300 font-semibold ml-1 md:ml-5">잔 x4</span>
                        <span class="text-white/60"> / </span>
                        <span class="text-red-400 font-semibold">바슬론 x2</span>
                        <span class="text-white/60"> / </span>
                        <span class="text-red-400 font-semibold">바슬론 x2</span>
                      </div>
                    </div>
                    </div>
                  </Slide>
                  <Slide>
                  <div class="w-full flex flex-col items-center">
                    <!-- 맨 위: 암속성 -->
                    <div class="mb-3 flex flex-col items-center">
                      <img src="/assets/types/dark.png" alt="img1"
                          class="w-10 h-10 object-cover rounded-md border-2 border-purple-400" />
                  </div>
                    <div class="w-full max-w-[310px] mx-auto bg-[#1E1E2F] rounded-md border border-white/10 p-3">
                      <!-- 3 × 2 그리드 -->
                      <div class="grid grid-cols-3 gap-3">
                        <!-- 01 -->
                        <div class="relative rounded-md overflow-hidden border border-white/20 bg-black/40">
                          <span class="absolute top-1 left-1 text-[10px] font-semibold text-white/80">01</span>
                          <div class="aspect-[3/4]">
                            <img src="/assets/memory/jeanne1.webp" alt="" class="w-full h-full object-cover" />
                          </div>
                        </div>

                        <!-- 02 -->
                        <div class="relative rounded-md overflow-hidden border border-white/20 bg-black/40">
                          <span class="absolute top-1 left-1 text-[10px] font-semibold text-white/80">02</span>
                          <div class="aspect-[3/4]">
                            <img src="/assets/memory/jeanne2.png" alt="" class="w-full h-full object-cover" />
                          </div>
                        </div>

                        <!-- 03 -->
                        <div class="relative rounded-md overflow-hidden border border-white/20 bg-black/40">
                          <span class="absolute top-1 left-1 text-[10px] font-semibold text-white/80">03</span>
                          <div class="aspect-[3/4]">
                            <img src="/assets/memory/jeanne3.png" alt="" class="w-full h-full object-cover" />
                          </div>
                        </div>

                        <!-- 04 -->
                        <div class="relative rounded-md overflow-hidden border border-white/20 bg-black/40">
                          <span class="absolute top-1 left-1 text-[10px] font-semibold text-white/80">04</span>
                          <div class="aspect-[3/4]">
                            <img src="/assets/memory/jeanne1.webp" alt="" class="w-full h-full object-cover" />
                          </div>
                        </div>

                        <!-- 05 -->
                        <div class="relative rounded-md overflow-hidden border border-white/20 bg-black/40">
                          <span class="absolute top-1 left-1 text-[10px] font-semibold text-white/80">05</span>
                          <div class="aspect-[3/4]">
                            <img src="/assets/memory/adolf2.webp" alt="" class="w-full h-full object-cover" />
                          </div>
                        </div>

                        <!-- 06 -->
                        <div class="relative rounded-md overflow-hidden border border-white/20 bg-black/40">
                          <span class="absolute top-1 left-1 text-[10px] font-semibold text-white/80">06</span>
                          <div class="aspect-[3/4]">
                            <img src="/assets/memory/adolf3.webp" alt="" class="w-full h-full object-cover" />
                          </div>
                        </div>
                      </div>

                      <!-- 하단 라벨 위: 3:1 라벨 -->
                        <div class="mt-3 -mx-1 md:-mx-2">
                          <div class="rounded-md px-2">
                            <div class="grid grid-cols-4 items-center gap-2">
                              <div class="col-span-3">
                                <div class="flex items-center justify-center gap-2">
                                  <img src="/assets/memory/memoryatk1.png" class="w-10 h-10 object-contain" alt="">
                                  <div class="mt-1 text-[11px] md:text-xs text-white/85">or</div>
                                  <img src="/assets/memory/memoryatk2.png" class="w-10 h-10 object-contain" alt="">
                                  <div class="mt-1 text-[11px] md:text-xs text-white/85">or</div>
                                  <img src="/assets/memory/memoryatk3.png" class="w-10 h-10 object-contain" alt="">
                                  
                                </div>
                                <div class="mt-1 text-center text-[11px] md:text-xs text-white/85">공격력</div>
                              </div>

                              <div class="col-span-1 relative pl-3">
                                <span class="absolute left-0 top-1/2 -translate-y-1/2 h-[70%] w-px bg-white/20"></span>

                                <div class="flex flex-col items-center">
                                  <img src="/assets/skillball/huimuult.png" class="w-10 h-10 object-contain" alt="">
                                  <div class="mt-1 text-[11px] md:text-xs text-white/85">필살기</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      <!-- 하단 라벨 -->
                      <div class="mt-3 border-t border-white/10 pt-2 text-center text-xs whitespace-nowrap">
                        <span class="inline-flex items-center gap-1 sm:gap-2 rounded-full px-3 py-1 font-semibold
                                     bg-white/10 text-yellow-500 border border-white/20 hover:bg-white/15 hover:border-white/30
                                     focus:outline-none focus:ring-2 focus:ring-white/40 active:scale-[0.98] transition -ml-1 md:ml-0">
                                    SSS 이상</span>
                        <span class="text-pink-300 font-semibold ml-1 md:ml-5">잔 x4</span>
                        <span class="text-white/60"> / </span>
                        <span class="text-red-400 font-semibold">후루루 x2</span>
                        <span class="text-white/60"> / </span>
                        <span class="text-red-400 font-semibold">후루루 x2</span>
                      </div>
                    </div>
                   </div> 
                  </Slide>
                  

                  <template #addons>
                    <Navigation />
                  </template>
                </Carousel>
              </div>

              

              
              <div v-else>
                <Carousel :items-to-show="1" :wrap-around="true" :autoplay="0" :pause-autoplay-on-hover="false" class="memory">
                  <Slide>
                    <div class="w-full flex flex-col items-center">
                      <div class="mb-3 flex flex-col items-center">
                        <img src="/assets/types/dark.png" alt="img1"
                            class="w-10 h-10 object-cover rounded-md border-2 border-purple-400" />
                    </div>
    
                    <div class="w-full max-w-[310px] mx-auto bg-[#1E1E2F] rounded-md border border-white/10 p-3">
                      <!-- 3 × 2 그리드 -->
                      <div class="grid grid-cols-3 gap-3">
                        <!-- 01 -->
                        <div class="relative rounded-md overflow-hidden border border-white/20 bg-black/40">
                          <span class="absolute top-1 left-1 text-[10px] font-semibold text-white/80">01</span>
                          <div class="aspect-[3/4]">
                            <img src="/assets/memory/jeanne1.webp" alt="" class="w-full h-full object-cover" />
                          </div>
                        </div>

                        <!-- 02 -->
                        <div class="relative rounded-md overflow-hidden border border-white/20 bg-black/40">
                          <span class="absolute top-1 left-1 text-[10px] font-semibold text-white/80">02</span>
                          <div class="aspect-[3/4]">
                            <img src="/assets/memory/jeanne2.png" alt="" class="w-full h-full object-cover" />
                          </div>
                        </div>

                        <!-- 03 -->
                        <div class="relative rounded-md overflow-hidden border border-white/20 bg-black/40">
                          <span class="absolute top-1 left-1 text-[10px] font-semibold text-white/80">03</span>
                          <div class="aspect-[3/4]">
                            <img src="/assets/memory/jeanne3.png" alt="" class="w-full h-full object-cover" />
                          </div>
                        </div>

                        <!-- 04 -->
                        <div class="relative rounded-md overflow-hidden border border-white/20 bg-black/40">
                          <span class="absolute top-1 left-1 text-[10px] font-semibold text-white/80">04</span>
                          <div class="aspect-[3/4]">
                            <img src="/assets/memory/jeanne1.webp" alt="" class="w-full h-full object-cover" />
                          </div>
                        </div>

                        <!-- 05 -->
                        <div class="relative rounded-md overflow-hidden border border-white/20 bg-black/40">
                          <span class="absolute top-1 left-1 text-[10px] font-semibold text-white/80">05</span>
                          <div class="aspect-[3/4]">
                            <img src="/assets/memory/bathlon2.png" alt="" class="w-full h-full object-cover" />
                          </div>
                        </div>

                        <!-- 06 -->
                        <div class="relative rounded-md overflow-hidden border border-white/20 bg-black/40">
                          <span class="absolute top-1 left-1 text-[10px] font-semibold text-white/80">06</span>
                          <div class="aspect-[3/4]">
                            <img src="/assets/memory/bathlon3.png" alt="" class="w-full h-full object-cover" />
                          </div>
                        </div>
                      </div>

                      <!-- 하단 라벨 위: 3:1 라벨 -->
                        <div class="mt-3 -mx-1 md:-mx-2">
                          <div class="rounded-md px-2">
                            <div class="grid grid-cols-4 items-center gap-2">
                              <div class="col-span-3">
                                <div class="flex items-center justify-center gap-2">
                                  <img src="/assets/memory/memoryatk1.png" class="w-10 h-10 object-contain" alt="">
                                  <div class="mt-1 text-[11px] md:text-xs text-white/85">or</div>
                                  <img src="/assets/memory/memoryatk2.png" class="w-10 h-10 object-contain" alt="">
                                  <div class="mt-1 text-[11px] md:text-xs text-white/85">or</div>
                                  <img src="/assets/memory/memoryatk3.png" class="w-10 h-10 object-contain" alt="">
                                  
                                </div>
                                <div class="mt-1 text-center text-[11px] md:text-xs text-white/85">공격력</div>
                              </div>

                              <div class="col-span-1 relative pl-3">
                                <span class="absolute left-0 top-1/2 -translate-y-1/2 h-[70%] w-px bg-white/20"></span>

                                <div class="flex flex-col items-center">
                                  <img src="/assets/skillball/huimuult.png" class="w-10 h-10 object-contain" alt="">
                                  <div class="mt-1 text-[11px] md:text-xs text-white/85">필살기</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      <!-- 하단 라벨 -->
                      <div class="mt-3 border-t border-white/10 pt-2 text-center text-xs whitespace-nowrap">
                        <span class="inline-flex items-center gap-1 sm:gap-2 rounded-full px-3 py-1 font-semibold
                                     bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30
                                     focus:outline-none focus:ring-2 focus:ring-white/40 active:scale-[0.98] transition -ml-1 md:ml-0">
                                    전랭크</span>
                        <span class="text-pink-300 font-semibold ml-1 md:ml-5">잔 x4</span>
                        <span class="text-white/60"> / </span>
                        <span class="text-red-400 font-semibold">바슬론 x2</span>
                        <span class="text-white/60"> / </span>
                        <span class="text-red-400 font-semibold">바슬론 x2</span>
                      </div>
                    </div>
                    </div>
                  </Slide>
                  <Slide>
                    <div class="w-full flex flex-col items-center">
                      <div class="mb-3 flex flex-col items-center">
                        <img src="/assets/types/lightnoise.png" alt="img1"
                            class="w-10 h-10 object-cover rounded-md border-2 border-yellow-400" />
                    </div>
    
                    <div class="w-full max-w-[310px] mx-auto bg-[#1E1E2F] rounded-md border border-white/10 p-3">
                      <!-- 3 × 2 그리드 -->
                      <div class="grid grid-cols-3 gap-3">
                        <!-- 01 -->
                        <div class="relative rounded-md overflow-hidden border border-white/20 bg-black/40">
                          <span class="absolute top-1 left-1 text-[10px] font-semibold text-white/80">01</span>
                          <div class="aspect-[3/4]">
                            <img src="/assets/memory/jeanne1.webp" alt="" class="w-full h-full object-cover" />
                          </div>
                        </div>

                        <!-- 02 -->
                        <div class="relative rounded-md overflow-hidden border border-white/20 bg-black/40">
                          <span class="absolute top-1 left-1 text-[10px] font-semibold text-white/80">02</span>
                          <div class="aspect-[3/4]">
                            <img src="/assets/memory/jeanne2.png" alt="" class="w-full h-full object-cover" />
                          </div>
                        </div>

                        <!-- 03 -->
                        <div class="relative rounded-md overflow-hidden border border-white/20 bg-black/40">
                          <span class="absolute top-1 left-1 text-[10px] font-semibold text-white/80">03</span>
                          <div class="aspect-[3/4]">
                            <img src="/assets/memory/fran3.png" alt="" class="w-full h-full object-cover" />
                          </div>
                        </div>

                        <!-- 04 -->
                        <div class="relative rounded-md overflow-hidden border border-white/20 bg-black/40">
                          <span class="absolute top-1 left-1 text-[10px] font-semibold text-white/80">04</span>
                          <div class="aspect-[3/4]">
                            <img src="/assets/memory/fran1.webp" alt="" class="w-full h-full object-cover" />
                          </div>
                        </div>

                        <!-- 05 -->
                        <div class="relative rounded-md overflow-hidden border border-white/20 bg-black/40">
                          <span class="absolute top-1 left-1 text-[10px] font-semibold text-white/80">05</span>
                          <div class="aspect-[3/4]">
                            <img src="/assets/memory/wilde2.png" alt="" class="w-full h-full object-cover" />
                          </div>
                        </div>

                        <!-- 06 -->
                        <div class="relative rounded-md overflow-hidden border border-white/20 bg-black/40">
                          <span class="absolute top-1 left-1 text-[10px] font-semibold text-white/80">06</span>
                          <div class="aspect-[3/4]">
                            <img src="/assets/memory/wilde3.png" alt="" class="w-full h-full object-cover" />
                          </div>
                        </div>
                      </div>

                      <!-- 하단 라벨 위: 3:1 라벨 -->
                        <div class="mt-3 -mx-1 md:-mx-2">
                          <div class="rounded-md px-2">
                            <div class="grid grid-cols-4 items-center gap-2">
                              <div class="col-span-3">
                                <div class="flex items-center justify-center gap-2">
                                  <img src="/assets/memory/memoryatk1.png" class="w-10 h-10 object-contain" alt="">
                                  <div class="mt-1 text-[11px] md:text-xs text-white/85">or</div>
                                  <img src="/assets/memory/memoryatk2.png" class="w-10 h-10 object-contain" alt="">
                                  <div class="mt-1 text-[11px] md:text-xs text-white/85">or</div>
                                  <img src="/assets/memory/memoryatk3.png" class="w-10 h-10 object-contain" alt="">
                                  
                                </div>
                                <div class="mt-1 text-center text-[11px] md:text-xs text-white/85">공격력</div>
                              </div>

                              <div class="col-span-1 relative pl-3">
                                <span class="absolute left-0 top-1/2 -translate-y-1/2 h-[70%] w-px bg-white/20"></span>

                                <div class="flex flex-col items-center">
                                  <img src="/assets/skillball/huimuult.png" class="w-10 h-10 object-contain" alt="">
                                  <div class="mt-1 text-[11px] md:text-xs text-white/85">필살기</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      <!-- 하단 라벨 -->
                      <div class="mt-3 border-t border-white/10 pt-2 text-center text-xs whitespace-nowrap">
                        <span class="inline-flex items-center gap-1 sm:gap-2 rounded-full px-3 py-1 font-semibold
                                     bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30
                                     focus:outline-none focus:ring-2 focus:ring-white/40 active:scale-[0.98] transition -ml-1 md:ml-0">
                                    전랭크</span>
                        <span class="text-pink-300 font-semibold ml-1 md:ml-5">잔 x4</span>
                        <span class="text-white/60"> / </span>
                        <span class="text-red-400 font-semibold">프란 x2</span>
                        <span class="text-white/60"> / </span>
                        <span class="text-red-400 font-semibold">와일즈 x2</span>
                      </div>
                    </div>
                    </div>
                  </Slide>
      

                  <template #addons>
                    <Navigation />
                  </template>
                </Carousel>
                
              </div>
            </div>
          </div>
        </div>

      <div id="rank" class="max-w-4xl w-full mx-auto mt-6 rounded-md bg-[#0A0A23]/30 p-2 md:p-6">

        <div class="col-span-full flex justify-center mb-4">
          <span class="inline-flex items-center gap-2 rounded-md px-4 py-2 text-[15px] font-bold
                      bg-[#0A0A23]/40 text-white border-2 border-black mb-1 mt-2 md:mt-1 md:mb-2">
            랭크 추천
          </span>
        </div>

        <div class="divide-y divide-gray-500 text-[13px] md:text-[15px]">
          <div class="grid grid-cols-[2fr_2fr_6fr] bg-[#383838] rounded-t-md">
            <div class="p-2 text-center">랭크</div>
            <div class="p-2 text-center">추천도</div>
            <div class="p-2 text-center">비고</div>
          </div>
          <div class="grid grid-cols-[2fr_2fr_6fr]">
            <div class="p-2 text-center">S</div>
            <div class="p-2 text-center"></div>
            <div class="p-2 text-center">1회</div>
          </div>
          <div class="grid grid-cols-[2fr_2fr_6fr]">
            <div class="p-2 text-center">SS</div>
            <div class="p-2 text-center">★</div>
            <div class="p-2 text-center">1회 + 해골</div>
          </div>
          <div class="grid grid-cols-[2fr_2fr_6fr]">
            <div class="p-2 text-center">SS3</div>
            <div class="p-2 text-center"></div>
            <div class="p-2 text-center"></div>
          </div>
          <div class="grid grid-cols-[2fr_2fr_6fr]">
            <div class="p-2 text-center">SS6</div>
            <div class="p-2 text-center"></div>
            <div class="p-2 text-center"></div>
          </div>
          <div class="grid grid-cols-[2fr_2fr_6fr]">
            <div class="p-2 text-center">SSS</div>
            <div class="p-2 text-center">★</div>
            <div class="p-2 text-center">4회 + 해골</div>
          </div>
          <div class="grid grid-cols-[2fr_2fr_6fr]">
            <div class="p-2 text-center">SSS3</div>
            <div class="p-2 text-center"></div>
            <div class="p-2 text-center"></div>
          </div>
          <div class="grid grid-cols-[2fr_2fr_6fr]">
            <div class="p-2 text-center">SSS6</div>
            <div class="p-2 text-center"></div>
            <div class="p-2 text-center"></div>
          </div>
          <div class="grid grid-cols-[2fr_2fr_6fr]">
            <div class="p-2 text-center">SSS+</div>
            <div class="p-2 text-center"></div>
            <div class="p-2 text-center"></div>
          </div>
        </div>
      </div>


      <div id="party" class="max-w-4xl w-full mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-2 px-6 py-3 rounded-md bg-[#0A0A23]/30">
        
        <div class="col-span-full flex justify-center mb-4">
          <span class="inline-flex items-center gap-2 rounded-md px-4 py-2 text-[15px] font-bold
                      bg-[#0A0A23]/40 text-white border-2 border-black mt-2 md:mt-3">
            파티 구성
          </span>
        </div>
        
        <!-- 1) 첫 번째 박스: 캐러셀 3개를 가로로 -->
        <div class="bg-black/50 rounded-md p-4 text-white">
          <div class="flex flex-col items-center mb-4 pb-3 border-b-2 border-white/50">
              <img src="/assets/types/dark.png" alt="img1" class="h-12 w-12 md:w-20 md:h-20 object-cover rounded-md border-2 border-purple-400" />
              
          </div>

      
          
          
          <div class="grid grid-cols-3 gap-2 md:gap-2">

            <div class="col-span-3">
              <div class="grid grid-cols-3 place-items-center">
                <img src="/assets/roleIcons/amp.png" class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md -ml-1" alt="증폭형" />
                <img src="/assets/roleIcons/arm.png" class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md md:ml-1" alt="방어형" />
                <img src="/assets/roleIcons/atk.png" class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md ml-2" alt="공격형" />
              </div>
            </div>

            <div>
              <Carousel :items-to-show="1" :wrap-around="true"
                        :navigation-enabled="false" :pagination-enabled="false"
                        class="w-full">
                <Slide>
                  <div class="flex flex-col items-center">
                    <img src="/assets/portrait/daemonissa2.png"
                        class="h-20 w-20 md:h-[100px] md:w-[100px] object-cover rounded-md border-2 border-blue-500" />
                    <span class="mt-2 text-[11px] md:text-xs whitespace-nowrap">릴리스 · 데모니사</span>
                  </div>
                </Slide>
              </Carousel>
            </div>

            <div>
              <Carousel :items-to-show="1" :wrap-around="true"
                        :navigation-enabled="false" :pagination-enabled="false"
                        class="w-full party">
                <Slide>
                  <div class="flex flex-col items-center">
                    <img src="/assets/portrait/scire2.png"
                        class="h-20 w-20 md:h-[100px] md:w-[100px] object-cover rounded-md border-2 border-red-500" />
                    <span class="mt-2 text-[11px] md:text-xs whitespace-nowrap">카레니나 · 휘효</span>
                  </div>
                </Slide>
                
                <Slide>
                  <div class="flex flex-col items-center">
                    <img src="/assets/portrait/parhelion2.png"
                        class="h-20 w-20 md:h-[100px] md:w-[100px] object-cover rounded-md border-2 border-red-500" />
                    <span class="mt-2 text-[11px] md:text-xs whitespace-nowrap">이스마엘 · 환일</span>
                  </div>
                </Slide>

                <template #addons>
                    <Navigation />
                  </template>
              </Carousel>
              </div>
            

            <div>
              <Carousel :items-to-show="1" :wrap-around="true"
                        :navigation-enabled="false" :pagination-enabled="false"
                        class="w-full">
                <Slide>
                  <div class="flex flex-col items-center">
                    <img src="/assets/portrait/huimu2.png"
                        class="h-20 w-20 md:h-[100px] md:w-[100px] object-cover rounded-md border-2 border-yellow-400" />
                    <span class="mt-2 text-[11px] md:text-xs whitespace-nowrap">비앙카 · 휘명</span>
                  </div>
                </Slide>
              </Carousel>
          </div>
        </div>
        </div>

        <!-- 2) 두 번째 박스 -->
        <div class="bg-black/50 rounded-md p-4 text-white">
          <div class="flex flex-col items-center mb-4 pb-3 border-b-2 border-white/50">
              <img src="/assets/types/lightnoise.png" alt="img1" class="h-12 w-12 md:w-20 md:h-20 object-cover rounded-md border-2 border-yellow-200" />
              <!-- <span class="mt-2 text-xs">암속성</span> -->
          </div>

          <div class="grid grid-cols-3 gap-2 md:gap-2">

            <div class="col-span-3">
              <div class="grid grid-cols-3 place-items-center">
                <img src="/assets/roleIcons/amp.png" class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md -ml-1" alt="증폭형" />
                <img src="/assets/roleIcons/arm.png" class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md md:ml-1" alt="방어형" />
                <img src="/assets/roleIcons/atk.png" class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-md ml-2" alt="공격형" />
              </div>
            </div>

            <div>
              <Carousel :items-to-show="1" :wrap-around="true"
                        :navigation-enabled="false" :pagination-enabled="false"
                        class="w-full">
                <Slide>
                  <div class="flex flex-col items-center">
                    <img src="/assets/portrait/feral2.png"
                        class="h-20 w-20 md:h-[100px] md:w-[100px] object-cover rounded-md border-2 border-blue-500" />
                    <span class="mt-2 text-[11px] md:text-xs whitespace-nowrap">21호 · 페럴</span>
                  </div>
                </Slide>
              </Carousel>
            </div>

            <div>
              <Carousel :items-to-show="1" :wrap-around="true"
                        :navigation-enabled="false" :pagination-enabled="false"
                        class="w-full">
                <Slide>
                  <div class="flex flex-col items-center">
                    <img src="/assets/portrait/startrail2.png"
                        class="h-20 w-20 md:h-[100px] md:w-[100px] object-cover rounded-md border-2 border-red-500" />
                    <span class="mt-2 text-[11px] md:text-xs whitespace-nowrap">나나미 · 망성</span>
                  </div>
                </Slide>
              </Carousel>
              </div>
            

            <div>
              <Carousel :items-to-show="1" :wrap-around="true"
                        :navigation-enabled="false" :pagination-enabled="false"
                        class="w-full">
                <Slide>
                  <div class="flex flex-col items-center">
                    <img src="/assets/portrait/huimu2.png"
                        class="h-20 w-20 md:h-[100px] md:w-[100px] object-cover rounded-md border-2 border-yellow-400" />
                    <span class="mt-2 text-[11px] md:text-xs whitespace-nowrap">비앙카 · 휘명</span>
                  </div>
                </Slide>
              </Carousel>
          </div>
        </div>
        </div>
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




        

    </section>
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

