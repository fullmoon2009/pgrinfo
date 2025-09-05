<script setup lang="ts">
import { ref } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'


const leftTab  = ref<'tabA'|'tabB'>('tabA')
const rightTab = ref<'tabA'|'tabB'>('tabA')
const cycleTab = ref<'tabA'|'tabB'>('tabA')
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

  
    <section class="p-6 mx-auto">
      
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xs mx-auto px-8 mb-7">
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
              class="w-full h-[400px] object-cover" />
          </div>
        </div>


      <div class="flex justify-center py-2">
        <span class="inline-block px-3 py-1 rounded-md border-2 border-white/40 font-bold text-white text-[20px]">
          비앙카 · 휘명
        </span>
      </div>
      
      <div class="max-w-lg mx-auto flex flex-wrap justify-center gap-2 sm:gap-3 mt-7">
        <!-- 장비 & 의식 세팅 -->
        <button
          type="button"
          class="inline-flex items-center gap-1 sm:gap-2 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium
                bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30
                focus:outline-none focus:ring-2 focus:ring-white/40 active:scale-[0.98] transition"
        >
          장비 & 의식 세팅
        </button>

        <!-- 랭크 추천 -->
        <button
          type="button"
          class="inline-flex items-center gap-1 sm:gap-2 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium
                bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30
                focus:outline-none focus:ring-2 focus:ring-white/40 active:scale-[0.98] transition"
        >
          랭크 추천
        </button>

        <!-- 파티 구성 -->
        <button
          type="button"
          class="inline-flex items-center gap-1 sm:gap-2 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium
                bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30
                focus:outline-none focus:ring-2 focus:ring-white/40 active:scale-[0.98] transition"
        >
          파티 구성
        </button>

        <!-- 사이클 -->
        <button
          type="button"
          class="inline-flex items-center gap-1 sm:gap-2 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium
                bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30
                focus:outline-none focus:ring-2 focus:ring-white/40 active:scale-[0.98] transition"
        >
          사이클 가이드
        </button>

      </div>
      <div class="mx-auto max-w-4xl h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none mt-7"></div>
      


      <div class="max-w-md w-full mx-auto mt-6 grid grid-cols-3 md:grid-cols-3 gap-2 px-6 py-3 rounded-md bg-[#0A0A23]/30">
        <div class="col-span-2 bg-black/50 rounded-md p-4 text-center text-white">
          <div class="flex justify-center gap-2 md:gap-6">
            <div class="flex flex-col items-center">
              <img src="/assets/types/dark.png" alt="img1" class="w-20 h-20 object-cover rounded-md border-2 border-purple-400" />
              <span class="mt-2 text-xs">암속성</span>
            </div>
            <div class="flex flex-col items-center">
              <img src="/assets/types/lightnoise.png" alt="img2" class="w-20 h-20 object-cover rounded-md border-2 border-yellow-200" />
              <span class="mt-2 text-xs">습광</span>
            </div>
          </div>
        </div>
        <div class="col-span-1 bg-black/50 rounded-md p-[17px] text-center text-white
                    grid place-items-center">
          <div class="flex flex-col items-center">
            <img src="/assets/roleIcons/atk.png" alt="img1"
                class="block w-[77px] h-[77px] object-contain rounded-md ring-2 ring-white p-2" />
            <span class="mt-2 text-xs py-[2px]">공격형</span>
          </div>
        </div>
      </div>

      <div class="max-w-4xl w-full mx-auto mt-6 grid grid-cols-2 md:grid-cols-4 gap-2 px-6 py-3 rounded-md bg-[#0A0A23]/30">
        
        
        <div class="col-span-2 md:col-span-4 flex justify-center mb-4">
          <div>
                <span class="inline-flex items-center gap-1 sm:gap-2 rounded-md px-3 py-1.5 sm:px-4 sm:py-2 text-[15px]  font-bold
                      bg-[#0A0A23]/40 text-white border-2 border-black hover:bg-white/15 hover:border-white/30
                      focus:outline-none focus:ring-2 focus:ring-white/40 active:scale-[0.98] transition mt-3">
                    장비 & 의식 세팅</span>
              </div>
        </div>
        
        
        <div class="col-span-2 bg-black/50 rounded-md p-4 text-white">

            <!-- 탭 헤더 -->
            <div role="tablist" class="flex gap-2 mb-4 border-b border-white/20">
              <button
                role="tab"
                :aria-selected="leftTab === 'tabA'"
                @click="leftTab = 'tabA'"
                class="px-4 py-2 rounded-t-md"
                :class="leftTab === 'tabA' ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white/90'"
              >
                무기
              </button>
              <button
                role="tab"
                :aria-selected="leftTab === 'tabB'"
                @click="leftTab = 'tabB'"
                class="px-4 py-2 rounded-t-md"
                :class="leftTab === 'tabB' ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white/90'"
              >
                보조기
              </button>
            </div>

            <!-- 탭 콘텐츠 -->
            <div class="rounded-md bg-black/30 p-3">
              <!-- 탭 A: 현재 있는 콘텐츠 -->
              <div v-if="leftTab === 'tabA'">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <!-- 왼쪽: 이미지 + 텍스트 -->
                  <div class="md:col-span-1 flex flex-col items-center">
                    <img 
                      src="/assets/arms/orora.png" 
                      alt=""
                      class="w-[100px] h-[200px] object-cover mb-2 rounded-md border-2 border-orange-500"
                    />
                    <span class="text-sm">★6 오로라</span>
                  </div>

                  <!-- 오른쪽: 3행 -->
                  <div class="md:col-span-2 rounded-md">
                    <div class="divide-y divide-white/20 border-y border-white/10">
                      <!-- Row 1 -->
                      <div class="grid grid-cols-10 gap-2 py-2 px-6">
                        <div class="col-span-3 flex items-center">
                          <img src="/assets/wskills/count.png" alt="img1" class="w-14 h-14 object-cover rounded-md" />
                        </div>
                        <div class="col-span-7 flex items-center text-sm whitespace-nowrap">
                          죽음의 카운트다운
                        </div>
                      </div>
                      <!-- Row 2 -->
                      <div class="grid grid-cols-10 gap-2 py-2 px-6">
                        <div class="col-span-3 flex items-center">
                          <img src="/assets/wskills/sunset.png" alt="img1" class="w-14 h-14 object-cover rounded-md" />
                        </div>
                        <div class="col-span-7 flex items-center text-sm whitespace-nowrap">
                          눈부신 석양
                        </div>
                      </div>
                      <!-- Row 3 -->
                      <div class="grid grid-cols-10 gap-2 py-2 px-6">
                        <div class="col-span-3 flex items-center">
                          <img src="/assets/wskills/light.png" alt="img1" class="w-14 h-14 object-cover rounded-md" />
                        </div>
                        <div class="col-span-7 flex items-center text-sm whitespace-nowrap">
                          광휘의 파편
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 탭 B: 새로 만들 콘텐츠 -->
              <div v-else>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="bg-black/40 rounded-md p-4">
                    <h3 class="font-semibold mb-2">title</h3>
                    <p class="text-sm text-white/80">aa</p>
                  </div>
                  <div class="bg-black/40 rounded-md p-4">
                    <h3 class="font-semibold mb-2">title</h3>
                    <p class="text-sm text-white/80">bb</p>
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
              class="px-4 py-2 rounded-t-md"
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
              class="px-4 py-2 rounded-t-md"
              :class="rightTab === 'tabB'
                ? 'bg-white/10 text-white'
                : 'text-white/70 hover:text-white/90'"
            >
              환통/격전점
            </button>
          </div>

          <!-- 탭 콘텐츠: 높이 출렁임을 막고 싶으면 고정 높이/최소 높이 지정 -->
          <div class="rounded-md bg-black/30 h-[252px] p-3 pt-10">
              <!-- 탭 A: 캐러셀 1 -->
              <div v-if="rightTab === 'tabA'">
                <Carousel :items-to-show="1" :wrap-around="true" :autoplay="0" :pause-autoplay-on-hover="false">
                  <Slide>
                    <div class="h-40 flex items-center justify-center bg-gray-700 rounded-md">
                      A - Page 1
                    </div>
                  </Slide>
                  <Slide>
                    <div class="h-40 flex items-center justify-center bg-gray-700 rounded-md">
                      A - Page 2
                    </div>
                  </Slide>
                  <Slide>
                    <div class="h-40 flex items-center justify-center bg-gray-700 rounded-md">
                      A - Page 3
                    </div>
                  </Slide>

                  <template #addons>
                    <Navigation />
                  </template>
                </Carousel>
              </div>

              

              <!-- 탭 B: 캐러셀 2 (또는 전혀 다른 내용) -->
              <div v-else>
                <Carousel :items-to-show="1" :wrap-around="true" :autoplay="0" :pause-autoplay-on-hover="false">
                  <Slide>
                    <div class="h-40 flex items-center justify-center bg-indigo-700 rounded-md">
                      B - Page 1
                    </div>
                  </Slide>
                  <Slide>
                    <div class="h-40 flex items-center justify-center bg-indigo-700 rounded-md">
                      B - Page 2
                    </div>
                  </Slide>
                  <Slide>
                    <div class="h-40 flex items-center justify-center bg-indigo-700 rounded-md">
                      B - Page 3
                    </div>
                  </Slide>

                  <template #addons>
                    <Navigation />
                  </template>
                </Carousel>
                <!-- 캐러셀 대신 일반 그리드/텍스트 등 다른 콘텐츠를 넣어도 됩니다 -->
              </div>
            </div>
          </div>
        </div>

      <div class="max-w-4xl w-full mx-auto mt-6 rounded-md bg-[#0A0A23]/30 p-6">

        <div class="col-span-full flex justify-center mb-4">
          <span class="inline-flex items-center gap-2 rounded-md px-4 py-2 text-[15px] font-bold
                      bg-[#0A0A23]/40 text-white border-2 border-black mb-3 mt-1">
            랭크 추천
          </span>
        </div>

        <div class="divide-y">
          <div class="grid grid-cols-[2fr_2fr_6fr] bg-[#666666] rounded-t-md">
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


      <div class="max-w-4xl w-full mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-2 px-6 py-3 rounded-md bg-[#0A0A23]/30">
        
        <div class="col-span-full flex justify-center mb-4">
          <span class="inline-flex items-center gap-2 rounded-md px-4 py-2 text-[15px] font-bold
                      bg-[#0A0A23]/40 text-white border-2 border-black mt-3">
            파티 구성
          </span>
        </div>
        
        <!-- 1) 첫 번째 박스: 캐러셀 3개를 가로로 -->
        <div class="bg-black/50 rounded-md p-4 text-white">
          <div class="flex flex-col items-center mb-4 pb-3 border-b-2 border-white/50">
              <img src="/assets/types/dark.png" alt="img1" class="h-12 w-12 md:w-20 md:h-20 object-cover rounded-md border-2 border-purple-400" />
              <!-- <span class="mt-2 text-xs">암속성</span> -->
          </div>

          <div class="flex justify-center gap-[59px] md:gap-[84px] mx-auto mb-2">
            <img src="/assets/roleIcons/amp.png" alt="img1" class="h-10 w-10 md:w-[50px] md:h-[50px] object-cover rounded-md" />
            <img src="/assets/roleIcons/arm.png" alt="img1" class="h-10 w-10 md:w-[50px] md:h-[50px] object-cover rounded-md" />
            <img src="/assets/roleIcons/atk.png" alt="img1" class="h-10 w-10 md:w-[50px] md:h-[50px] object-cover rounded-md" />
          </div>
          
          
          <div class="grid grid-cols-3 sm:grid-cols-3 gap-3">
            <!-- 캐러셀 A -->
            <Carousel :items-to-show="1" :wrap-around="true" class="w-full party">
              <Slide>
                <div class="flex flex-col items-center mb-4">
                  <img src="/assets/portrait/daemonissa2.png" alt="img1" class="h-20 w-20 md:w-[100px] md:h-[100px] object-cover rounded-md border-2 border-blue-500" />
                  <span class="mt-2 text-[11px] md:text-xs whitespace-nowrap">릴리스 · 데모니사</span>
                </div>
              </Slide>
            </Carousel>

            <!-- 캐러셀 B -->
            <Carousel :items-to-show="1" :wrap-around="true" class="w-full party">
              <Slide>
                <div class="flex flex-col items-center mb-4">
                  <img src="/assets/portrait/scire2.png" alt="img1" class="h-20 w-20 md:w-[100px] md:h-[100px] object-cover rounded-md border-2 border-red-600" />
                  <span class="mt-2 text-xs">카레니나 · 휘효</span>
                </div>
              </Slide>

              <Slide>
                <div class="flex flex-col items-center mb-4">
                  <img src="/assets/portrait/parhelion2.png" alt="img1" class="h-20 w-20 md:w-[100px] md:h-[100px] object-cover rounded-md border-2 border-red-600" />
                  <span class="mt-2 text-xs">이스마엘 · 환일</span>
                </div>
              </Slide>

              <template #addons>
                <Navigation />
              </template>
            </Carousel>

            <!-- 캐러셀 C -->
            <Carousel :items-to-show="1" :wrap-around="true" class="w-full party">
              <Slide v-for="n in 2" :key="'C-'+n">
                <div class="flex flex-col items-center mb-4">
                  <img src="/assets/portrait/huimu2.png" alt="img1" class="h-20 w-20 md:w-[100px] md:h-[100px] object-cover rounded-md border-2 border-yellow-600" />
                  <span class="mt-2 text-xs">비앙카 · 휘명</span>
                </div>
              </Slide>
            </Carousel>
          </div>
        </div>

        <!-- 2) 두 번째 박스 -->
        <div class="bg-black/50 rounded-md p-4 text-white">
          <div class="flex flex-col items-center mb-4 pb-3 border-b-2 border-white/50">
              <img src="/assets/types/lightnoise.png" alt="img1" class="h-12 w-12 md:w-20 md:h-20 object-cover rounded-md border-2 border-yellow-200" />
              <!-- <span class="mt-2 text-xs">암속성</span> -->
          </div>

          <div class="flex justify-center gap-[59px] md:gap-[84px] mx-auto mb-2">
            <img src="/assets/roleIcons/amp.png" alt="img1" class="h-10 w-10 md:w-[50px] md:h-[50px] object-cover rounded-md" />
            <img src="/assets/roleIcons/arm.png" alt="img1" class="h-10 w-10 md:w-[50px] md:h-[50px] object-cover rounded-md" />
            <img src="/assets/roleIcons/atk.png" alt="img1" class="h-10 w-10 md:w-[50px] md:h-[50px] object-cover rounded-md" />
          </div>
          
          
          <div class="grid grid-cols-3 sm:grid-cols-3 gap-3">
            <!-- 캐러셀 A -->
            <Carousel :items-to-show="1" :wrap-around="true" class="w-full party">
              <Slide>
                <div class="flex flex-col items-center mb-4">
                  <img src="/assets/portrait/feral2.png" alt="img1" class="h-20 w-20 md:w-[100px] md:h-[100px] object-cover rounded-md border-2 border-blue-500" />
                  <span class="mt-2 text-[11px] md:text-xs whitespace-nowrap">21호 · 페럴</span>
                </div>
              </Slide>
            </Carousel>

            <!-- 캐러셀 B -->
            <Carousel :items-to-show="1" :wrap-around="true" class="w-full party">
              <Slide>
                <div class="flex flex-col items-center mb-4">
                  <img src="/assets/portrait/startrail2.png" alt="img1" class="h-20 w-20 md:w-[100px] md:h-[100px] object-cover rounded-md border-2 border-red-600" />
                  <span class="mt-2 text-xs">나나미 · 망성</span>
                </div>
              </Slide>
            </Carousel>

            <!-- 캐러셀 C -->
            <Carousel :items-to-show="1" :wrap-around="true" class="w-full party">
              <Slide v-for="n in 2" :key="'C-'+n">
                <div class="flex flex-col items-center mb-4">
                  <img src="/assets/portrait/huimu2.png" alt="img1" class="h-20 w-20 md:w-[100px] md:h-[100px] object-cover rounded-md border-2 border-yellow-600" />
                  <span class="mt-2 text-xs">비앙카 · 휘명</span>
                </div>
              </Slide>
            </Carousel>
          </div>
        </div>
      </div>

      <div class="max-w-4xl w-full mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-2 px-6 py-3 rounded-md bg-[#0A0A23]/30">

        <div class="col-span-2 md:col-span-4 flex justify-center mb-4">
          <div>
                <span class="inline-flex items-center gap-1 sm:gap-2 rounded-md px-3 py-1.5 sm:px-4 sm:py-2 text-[15px]  font-bold
                      bg-[#0A0A23]/40 text-white border-2 border-black hover:bg-white/15 hover:border-white/30
                      focus:outline-none focus:ring-2 focus:ring-white/40 active:scale-[0.98] transition mt-3">
                    사이클 가이드</span>
              </div>
        </div>
        <div class="md:col-span-2 bg-black/50 rounded-md p-4 text-white">
          <video
            src="/assets/videos/sample.mp4"
            controls
            muted
            class="w-full h-auto rounded-md"
          >
          </video>

          <div class="max-w-4xl w-full mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-2 px-6 py-3 rounded-md bg-[#0A0A23]/30">
            <!-- 탭 헤더 -->
            <div role="tablist" class="flex gap-2 mb-4 border-b border-white/20">
              <button
                role="tab"
                :aria-selected="cycleTab === 'tabA'"
                @click="cycleTab = 'tabA'"
                class="px-4 py-2 rounded-t-md"
                :class="cycleTab === 'tabA' ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white/90'"
              >
                암속성 사이클
              </button>
              <button
                role="tab"
                :aria-selected="cycleTab === 'tabB'"
                @click="cycleTab = 'tabB'"
                class="px-4 py-2 rounded-t-md"
                :class="cycleTab === 'tabB' ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white/90'"
              >
                습광 사이클
              </button>
            </div>

            <!-- 탭 콘텐츠 -->
            <div class="col-span-2">
              <!-- tabA: 현재 있는 내용 + 새 div -->
              <div v-if="cycleTab === 'tabA'" class="flex flex-col md:flex-row gap-4">
                <!-- 첫 번째 div -->
                <div class="flex-1 bg-black/50 p-4 rounded-md text-white max-h-[300px] md:max-h-[600px] overflow-y-auto no-scrollbar">
                  <div class="flex flex-col items-center mb-4 pb-3 border-b-2 border-white/50">
                    <span class="mt-2 text-s">첫 출전 사이클</span>
                  </div>
                  <div class="flex flex-col gap-6"> <!-- 위/아래로 시퀀스 나열 -->

                  <!-- [시퀀스 1] -->
                  <div class="min-w-0 w-full max-w-full overflow-x-auto">
                    <div class="inline-flex min-w-max items-center gap-3 sm:gap-4">
                      <div class="flex flex-col items-center -ml-1">
                        <img src="/assets/skillball/dodge.png" alt=""
                            class="w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-md border-2 border-white object-cover" />
                        <span class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap">[HOLD] 회피</span>
                      </div>

                      <div class="inline-flex flex-col items-center -mx-3">
                        <img src="/assets/skillball/arrow.png" alt="→"
                            class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain" />
                      </div>

                      <div class="flex flex-col items-center">
                        <img src="/assets/skillball/huimublue.png" alt=""
                            class="w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-md border-2 border-white object-cover" />
                        <span class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap">[HOLD] 파볼</span>
                      </div>

                      <div class="flex flex-col items-center">
                        <div class="inline-flex shrink-0 min-w-max items-center rounded-md px-2 border-l-2 border-r-2 border-red-500">
                          <img src="/assets/skillball/huimured.png" alt="" class="w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-md object-cover shrink-0" />
                          <img src="/assets/skillball/huimured.png" alt="" class="w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-md object-cover shrink-0" />
                          <img src="/assets/skillball/huimured.png" alt="" class="w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-md object-cover shrink-0" />
                        </div>
                        <span class="mt-2 text-[10px] whitespace-nowrap">빨볼(파볼 막타쯤)</span>
                      </div>
                    </div>
                  </div>

                  <!-- [시퀀스 2] -->
                  <div class="min-w-0 w-full max-w-full overflow-x-auto">
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
                        <span class="mt-2 text-[10px] whitespace-nowrap">빨볼 3체인</span>
                      </div>

                      <div class="inline-flex flex-col items-center">
                        <img src="/assets/skillball/arrow.png" alt="→"
                            class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain" />
                      </div>

                      <div class="flex flex-col items-center mx-3">
                        <img src="/assets/skillball/huimuult.png" alt="필살기"
                            class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                        <span class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap">필살기</span>
                      </div>

                      
                    </div>
                  </div>

                  <!-- [시퀀스 3] -->
                  <div class="min-w-0 w-full max-w-full overflow-x-auto">
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
                    </div>
                  </div>

                </div>

                <!-- [시퀀스 4] -->
                  <div class="min-w-0 w-full max-w-full overflow-x-auto mt-6">
                    <div class="inline-flex min-w-max items-center gap-3 sm:gap-4">
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
                  <div class="min-w-0 w-full max-w-full overflow-x-auto mt-6">
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

                      <div class="inline-flex flex-col items-center">
                        <img src="/assets/skillball/arrow.png" alt="→"
                            class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain" />
                      </div>

                      <div class="flex flex-col items-center">
                        <img src="/assets/skillball/huimuult.png" alt="필살기"
                            class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                        <span class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap">필살기</span>
                      </div>
                    </div>
                  </div>

              </div>

                <!-- 두 번째 div -->
                <div class="flex-1 bg-black/50 p-4 rounded-md text-white max-h-[300px] md:max-h-[600px] overflow-y-auto no-scrollbar">
                  <div class="flex flex-col items-center mb-4 pb-3 border-b-2 border-white/50">
                    <span class="mt-2 text-s">반복 사이클</span>
                  </div>

                  <!-- [시퀀스 2] -->
                  <div class="min-w-0 w-full max-w-full overflow-x-auto">
                    <div class="inline-flex min-w-max items-center gap-3 sm:gap-4">
                      <div class="flex flex-col items-center">
                        <img src="/assets/skillball/huimuult.png" alt=""
                            class="w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-md object-cover" />
                        <span class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap">필살기</span>
                      </div>

                      <div class="inline-flex flex-col items-center">
                        <img src="/assets/skillball/arrow.png" alt="→"
                            class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain" />
                      </div>

                      
                    </div>


                    <!-- 시퀀스 3~5 묶음 -->
              <div class="relative border border-white rounded-md mt-4 p-0 space-y-6 mb-4">
                <!-- 좌상단 라벨 -->
                <span class="absolute -top-3 left-3 bg-black px-2 font-bold text-[25px] text-white">x4</span>

                <!-- [시퀀스 3] -->
                <div class="w-full overflow-x-auto min-w-0 ">
                  <div class="inline-flex items-center gap-3 sm:gap-4">
                    

                    <div class="flex flex-col items-center">
                      <div class="inline-flex items-center rounded-md ml-3">
                        <img src="/assets/skillball/huimured.png" alt=""
                            class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                        <img src="/assets/skillball/huimured.png" alt=""
                            class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                        <img src="/assets/skillball/huimured.png" alt=""
                            class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                      </div>
                      <span class="mt-2 text-[10px] whitespace-nowrap">빨볼 3체인</span>
                    </div>

                    <div class="inline-flex flex-col items-center -ml-4">
                      <img src="/assets/skillball/arrow.png" alt="→"
                          class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain" />
                    </div>

                    <div class="flex flex-col items-center">
                      <div class="inline-flex items-center rounded-md -ml-4">
                        <img src="/assets/skillball/huimured.png" alt=""
                            class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                        <img src="/assets/skillball/huimured.png" alt=""
                            class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                        <img src="/assets/skillball/huimured.png" alt=""
                            class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                      </div>
                      <span class="mt-2 text-[10px] whitespace-nowrap">빨볼 3체인</span>
                    </div>
                  </div>
                </div>

                <!-- [시퀀스 4] -->
                <div class="w-full overflow-x-auto min-w-0">
                  <div class="inline-flex items-center gap-3 sm:gap-4">
                    <div class="inline-flex flex-col items-center  shrink-0">
                      <img src="/assets/skillball/arrow.png" alt="→"
                          class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain" />
                    </div>

                    <div class="flex flex-col items-center">
                      <img src="/assets/skillball/dodge.png" alt=""
                          class="w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-md object-cover" />
                      <span class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap">회피</span>
                    </div>

                    <div class="inline-flex flex-col items-center  shrink-0">
                      <img src="/assets/skillball/arrow.png" alt="→"
                          class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain" />
                    </div>

                    <div class="flex flex-col items-center">
                      <img src="/assets/skillball/basic.png" alt=""
                          class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md border-2 border-white object-cover" />
                      <span class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap">
                        [HOLD] 평타 (본체 반짝이면 떼기)
                      </span>
                    </div>

                    
                  </div>
                </div>

                <!-- [시퀀스 5] -->
                <div class="w-full overflow-x-auto min-w-0 pb-7">
                  <div class="inline-flex items-center gap-3 sm:gap-4">
                    <div class="inline-flex flex-col items-center  shrink-0">
                      <img src="/assets/skillball/arrow.png" alt="→"
                          class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain" />
                    </div>

                    <div class="flex flex-col items-center">
                      <div class="inline-flex items-center rounded-md px-1">
                        <img src="/assets/skillball/huimured.png" alt=""
                            class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                        <img src="/assets/skillball/huimured.png" alt=""
                            class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                        <img src="/assets/skillball/huimured.png" alt=""
                            class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                      </div>
                      <span class="mt-2 text-[10px] whitespace-nowrap">빨볼 3체인 (찌르기 모션 본 후)</span>
                    </div>

                    <div class="inline-flex flex-col items-center  shrink-0">
                      <img src="/assets/skillball/arrow.png" alt="→"
                          class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mt-3 md:mt-4 object-contain" />
                    </div>

                    <div class="flex flex-col items-center">
                      <img src="/assets/skillball/huimuult.png" alt="필살기"
                          class="w-7 h-7 md:w-[50px] md:h-[50px] rounded-md object-cover" />
                      <span class="mt-2 text-[10px] md:text-[11px] whitespace-nowrap">필살기</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- [시퀀스 3] -->
                  <div class="min-w-0 w-full max-w-full overflow-x-auto">
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
                    </div>
                  </div>

                </div>

                <!-- [시퀀스 4] -->
                  <div class="min-w-0 w-full max-w-full overflow-x-auto mt-6">
                    <div class="inline-flex min-w-max items-center gap-3 sm:gap-4">
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
                  <div class="min-w-0 w-full max-w-full overflow-x-auto mt-6">
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
</div>

              <!-- tabB: 새로 만들 내용 -->
              <div v-else class="flex flex-col md:flex-row gap-4">
                <!-- 첫 번째 div -->
                <div class="flex-1 bg-black/50 p-4 rounded-md text-white">
                  <div class="flex flex-col items-center mb-4 pb-3 border-b-2 border-white/50">
                    <span class="mt-2 text-s">첫 출전 사이클</span>
                  </div>
                  
                </div>

                <!-- 두 번째 div -->
                <div class="flex-1 bg-black/50 p-4 rounded-md text-white">
                  <div class="flex flex-col items-center mb-4 pb-3 border-b-2 border-white/50">
                    <span class="mt-2 text-s">반복 사이클</span>
                  </div>
                </div>
              </div>
            </div>
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
  left: -1.2rem;
  top: 3rem; 
}

:deep(.party .carousel__next) {
  right: -1rem;
  top: 3rem;
}
</style>

