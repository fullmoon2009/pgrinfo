<script setup lang="ts">
import { Carousel, Slide } from 'vue3-carousel';

</script>

<template>
<div class="min-h-screen flex flex-col">


 <main class="flex-1">
  <div class="mt-[3vh] h-[10vh] p-4 max-w-screen-lg mx-auto">
    <Carousel :wrap-around="true" :items-to-show="1" :autoplay="2500" :pause-autoplay-on-hover="true">
      <Slide class="h-[20vh] bg-black/50 flex items-center justify-center">a</Slide>
      <Slide class="h-[20vh] bg-black/50 flex items-center justify-center">b</Slide>
      <Slide class="h-[20vh] bg-black/50 flex items-center justify-center">c</Slide>

      <template #addons>
        <div class="absolute bottom-0 right-10">
          <Pagination />
        </div>
      </template>
    </Carousel>
  </div>
  <div class="h-[60vh] mt-[15vh] max-w-screen-md mx-auto border grid grid-cols-1 md:grid-cols-2 gap-4 p-9">
      <div class="flex flex-col gap-4">
        <NuxtLink to="/char" class="flex-1 bg-black/50 rounded-md">
          <div class="h-full flex items-center justify-center gap-2">
            <img src="~/assets/utilIcons/charicon.png" alt="" class="w-20 h-20 object-contain">
            <span>캐릭터 가이드</span>
          </div>
        </NuxtLink>
        <div class="flex-1 bg-black/50 rounded-md">
          <div class="h-full flex items-center justify-center gap-2">
            <img src="~/assets/utilIcons/eventicon.png" alt="" class="w-20 h-20 object-contain">
            <span>이벤트 가이드</span>
          </div>
        </div>
        <div class="flex-1 flex gap-4">
          <div class="w-1/2 bg-black/50 rounded-md">분쟁/환통 미래시</div>
          <div class="w-1/2 bg-black/50 rounded-md"></div>
        </div>
      </div>

      <div class="flex flex-col">
        <div class="flex-1 bg-black/50 rounded-md">분쟁 파티/사이클 공략</div>
      </div>
  </div>
 </main>




  <footer class="p-2 bg-gray-200 text-center">
    © 2025
  </footer>

 </div> 
</template>