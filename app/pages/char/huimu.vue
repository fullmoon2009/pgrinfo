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
      
      <div class="grid grid-cols-2 md:grid-cols-2 gap-3 h-[28vh] max-w-xs mx-auto px-8">
        
        <div class="grid grid-rows-2 gap-3">
          <div class="relative rounded-lg overflow-hidden border-2 border-gray-100">
            
            <div class="aspect-square">
              <img
                src="/assets/portrait/huimu1.png"
                alt=""
                class="w-full h-full object-cover"
              />
            </div>
          </div>
          <div class="relative rounded-lg overflow-hidden border-2 border-gray-100">
            <div class="aspect-square">
              <img
                src="/assets/portrait/huimu2.png"
                alt=""
                class="w-full h-full object-cover"
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

      <div class="flex justify-center">
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
          <!-- 1:2 레이아웃 (모바일 1열, md 이상 3열로 두고 좌1 : 우2) -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <!-- 왼쪽: 이미지 + 텍스트 (md에서 1칸) -->
            <div class="md:col-span-1 flex flex-col items-center">
              <img 
                src="/assets/arms/orora.png" 
                alt=""
                class="w-[120px] h-[250px] object-cover mb-2 rounded-md border-2 border-orange-500"
              />
              <span class="text-sm">★6 오로라</span>
            </div>

            <!-- 오른쪽: 3행, 각 행 3:7 비율 + 행 구분선 -->
            <div class="md:col-span-2 rounded-md ">
              <!-- 행들 사이 구분선; 컨테이너 위/아래에도 선 주고 싶으면 border-y 추가 -->
              <div class="divide-y divide-white/20 border-y border-white/10">

                <!-- Row 1 -->
                <div class="grid grid-cols-10 gap-2 py-3 px-6">
                  <!-- 왼쪽: 아이콘 -->
                  <div class="col-span-3 flex items-center">
                    <img src="/assets/wskills/count.png"
                        alt="img1"
                        class="w-12 h-12 object-cover rounded-md" />
                  </div>
                  <!-- 오른쪽: 텍스트 (세로 중앙 정렬) -->
                  <div class="col-span-7 flex items-center text-sm whitespace-nowrap">
                    죽음의 카운트다운
                  </div>
                </div>

                <!-- Row 2 -->
                <div class="grid grid-cols-10 gap-2 py-6 px-6">
                  <div class="col-span-3 text-sm text-gray-200">항목 2</div>
                  <div class="col-span-7 text-sm">값/설명 2</div>
                </div>

                <!-- Row 3 -->
                <div class="grid grid-cols-10 gap-2 py-6 px-6">
                  <div class="col-span-3 text-sm text-gray-200">항목 3</div>
                  <div class="col-span-7 text-sm">값/설명 3</div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <!-- <div class="col-span-1 bg-black/50 rounded-md p-4 text-center text-white">
          box2
        </div> -->
        <div class="col-span-2 bg-black/50 rounded-md p-4 text-center text-white">
          <Carousel
            :items-to-show="1"
            :wrap-around="true"
            :autoplay="0"              
            :pause-autoplay-on-hover="false"
          >
            <Slide>
              <div class="h-40 flex items-center justify-center bg-gray-700 rounded-md">
                Page 1
              </div>
            </Slide>

            <Slide>
              <div class="h-40 flex items-center justify-center bg-gray-700 rounded-md">
                Page 2
              </div>
            </Slide>

            <Slide>
              <div class="h-40 flex items-center justify-center bg-gray-700 rounded-md">
                Page 3
              </div>
            </Slide>

            <!-- Addons: 좌우 화살표 -->
            <template #addons>
              <Navigation />
            </template>
          </Carousel>
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
