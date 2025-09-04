<script setup lang="ts">
import { ref } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'


const leftTab  = ref<'tabA'|'tabB'>('tabA')
const rightTab = ref<'tabA'|'tabB'>('tabA')
</script>

<template>
  <div class="min-h-screen bg-[#383838] text-white">
    <nav class="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div class="font-bold"></div>
      <div class="space-x-4">
        <NuxtLink to="/" class="hover:underline">홈</NuxtLink>
        <NuxtLink to="/char" class="hover:underline">캐릭터</NuxtLink>
        <NuxtLink to="/events" class="hover:underline">이벤트</NuxtLink>
      </div>
    </nav>

  
    <section class="p-6 mx-auto">
      
      <div class="grid grid-cols-2 md:grid-cols-2 gap-3 h-[27vh] max-w-xs mx-auto px-8">
        
        <div class="grid grid-rows-2 gap-3">
          <div class="relative rounded-lg overflow-hidden border-2 border-gray-100">
            
            <div class="aspect-square">
              <img
                src="/assets/portrait/huimu1.png"
                alt=""
                class="w-full h-[122px] object-cover"
              />
            </div>
          </div>
          <div class="relative rounded-lg overflow-hidden border-2 border-gray-100">
            <div class="aspect-square">
              <img
                src="/assets/portrait/huimu2.png"
                alt=""
                class="w-full h-[122px] object-cover"
              />
            </div>
          </div>
        </div>

        
        <div class="relative rounded-lg overflow-hidden border-2 border-gray-100">
          <img
            src="/assets/standings/huimuS.webp"
            alt=""
            class="absolute inset-0 w-full h-[50vh] mt-[-20px] object-cover"
          />
        </div>
      </div>

      <div class="flex justify-center py-">
        <span>aa</span>
      </div>

      <div class="max-w-md w-full mx-auto mt-6 grid grid-cols-3 md:grid-cols-3 gap-2 px-6 py-3 rounded-md bg-white/50">
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

      <div class="max-w-4xl w-full mx-auto mt-6 grid grid-cols-2 md:grid-cols-4 gap-2 px-6 py-3 rounded-md bg-white/50">
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
                  석양
                </div>
              </div>
              <!-- Row 3 -->
              <div class="grid grid-cols-10 gap-2 py-2 px-6">
                <div class="col-span-3 flex items-center">
                  <img src="/assets/wskills/light.png" alt="img1" class="w-14 h-14 object-cover rounded-md" />
                </div>
                <div class="col-span-7 flex items-center text-sm whitespace-nowrap">
                  휘광
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

      <div class="max-w-4xl w-full mx-auto mt-6 rounded-md bg-white/50">
        <div class="divide-y">
          <div class="grid grid-cols-[2fr_2fr_6fr] bg-[#666666] rounded-t-md">
            <div class="p-2 text-center">랭크</div>
            <div class="p-2 text-center">추천도</div>
            <div class="p-2 text-center">비고</div>
          </div>
          <div class="grid grid-cols-[2fr_2fr_6fr]">
            <div class="p-2 text-center">S</div>
            <div class="p-2 text-center">B2</div>
            <div class="p-2 text-center">B3</div>
          </div>
          <div class="grid grid-cols-[2fr_2fr_6fr]">
            <div class="p-2 text-center">SS</div>
            <div class="p-2 text-center">C2</div>
            <div class="p-2 text-center">C3</div>
          </div>
          <div class="grid grid-cols-[2fr_2fr_6fr]">
            <div class="p-2 text-center">SS3</div>
            <div class="p-2 text-center">C2</div>
            <div class="p-2 text-center">C3</div>
          </div>
          <div class="grid grid-cols-[2fr_2fr_6fr]">
            <div class="p-2 text-center">SS6</div>
            <div class="p-2 text-center">C2</div>
            <div class="p-2 text-center">C3</div>
          </div>
          <div class="grid grid-cols-[2fr_2fr_6fr]">
            <div class="p-2 text-center">SSS</div>
            <div class="p-2 text-center">C2</div>
            <div class="p-2 text-center">C3</div>
          </div>
          <div class="grid grid-cols-[2fr_2fr_6fr]">
            <div class="p-2 text-center">SSS3</div>
            <div class="p-2 text-center">C2</div>
            <div class="p-2 text-center">C3</div>
          </div>
          <div class="grid grid-cols-[2fr_2fr_6fr]">
            <div class="p-2 text-center">SSS6</div>
            <div class="p-2 text-center">C2</div>
            <div class="p-2 text-center">C3</div>
          </div>
          <div class="grid grid-cols-[2fr_2fr_6fr]">
            <div class="p-2 text-center">SSS+</div>
            <div class="p-2 text-center">C2</div>
            <div class="p-2 text-center">C3</div>
          </div>
        </div>
      </div>


    </section>
  </div>
</template>
