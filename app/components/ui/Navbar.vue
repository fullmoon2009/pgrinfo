<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const menuOpen = ref(false)
const toggleMenu = () => (menuOpen.value = !menuOpen.value)
const closeMenu  = () => (menuOpen.value = false)

const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeMenu() }
onMounted(() => document.addEventListener('keydown', onKey))
onBeforeUnmount(() => document.removeEventListener('keydown', onKey))
watch(() => route.fullPath, () => closeMenu())


const isMenuOpen = ref(false)          // ← 여기서 정의

// 👇 스크롤되면 true
const isScrolled = ref(false)
let ticking = false
const onScroll = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      isScrolled.value = window.scrollY > 8   // 임계값은 취향대로
      ticking = false
    })
    ticking = true
  }
}
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>


<template>
  <!-- 상단 네비 바(레이아웃 색감 맞춤) -->
  <nav
  :class="[
    'sticky top-0 z-30 transition-all duration-200',
    isScrolled
      ? 'bg-transparent border-transparent backdrop-blur-0'
      : 'backdrop-blur-md bg-gray-800 border-b border-white/10'
  ]"
>
  <div class="max-w-6xl mx-auto px-3 md:px-4 h-12 md:h-14 flex items-center justify-between">
    <!-- 왼쪽: 햄버거 버튼 (메뉴 토글) -->
    <button
      type="button"
      :aria-expanded="menuOpen"
      aria-controls="app-drawer"
      aria-label="메뉴 열기"
      @click="toggleMenu"
      class="nav-btn"
      :class="[
        !isScrolled
          ? 'bg-white/5 border border-white/10 text-white/85 hover:bg-white/10'
          : 'bg-transparent border-transparent text-white/60 hover:text-white/75'
      ]"
    >
      <!-- svg는 display:block로 baseline 보정 -->
      <svg viewBox="0 0 24 24" class="block w-5 h-5" fill="currentColor">
        <path d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z"/>
      </svg>
    </button>

    <!-- 가운데(원하면 타이틀/로고) -->
    <div class="text-white/80 font-semibold text-sm md:text-base select-none"></div>

    <!-- 오른쪽: 홈 버튼 -->
    <NuxtLink
      to="/"
      aria-label="홈으로"
      class="nav-btn"
      :class="[
        !isScrolled
          ? 'bg-white/5 border border-white/10 text-white/85 hover:bg-white/10'
          : 'bg-transparent border-transparent text-white/60 hover:text-white/75'
      ]"
    >
      <svg viewBox="0 0 24 24" class="block w-5 h-5" fill="currentColor">
        <path d="M12 3.1 2 11h2v9h6v-6h4v6h6v-9h2L12 3.1Z"/>
      </svg>
    </NuxtLink>
  </div>
</nav>


  <!-- ===== 사이드바/햄버거(페이지 레이아웃과 독립) ===== -->
  <Teleport to="body">
    <!-- 햄버거 버튼: 사이드바와 함께 translate 되며 항상 보임 -->
    <!-- <button
      type="button"
      class="fixed top-2.5 left-2.5 z-[70] inline-flex items-center justify-center
             w-9 h-9 md:w-10 md:h-10 rounded-lg bg-white/5 border border-white/10
             text-white/85 hover:bg-white/10 transition-transform"
      :class="menuOpen ? 'translate-x-64' : 'translate-x-0'"
      :aria-expanded="menuOpen"
      aria-controls="app-drawer"
      aria-label="메뉴 열기"
      @click="toggleMenu"
    >
      <svg v-if="!menuOpen" viewBox="0 0 24 24" class="w-5 h-5" fill="currentColor">
        <path d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z"/>
      </svg>
      <svg v-else viewBox="0 0 24 24" class="w-5 h-5" fill="currentColor">
        <path d="M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3 10.6 10.6 16.9 4.3l1.4 1.4Z"/>
      </svg>
    </button> -->

    <!-- 백드롭: 컨텐츠는 안 밀리고, 클릭 시 닫힘 -->
    <transition name="fade">
      <div
        v-if="menuOpen"
        class="fixed inset-0 z-40 bg-black/60"
        @click="closeMenu"
        aria-hidden="true"
      />
    </transition>

    <!-- 드로어 -->
    <aside
  id="app-drawer"
  class="fixed top-0 left-0 z-50 h-screen w-64 max-w-[80vw]
         bg-[#0B0E1A]/95 backdrop-blur-md border-r border-white/10 shadow-2xl
         transform transition-transform duration-200 ease-out"
  :class="menuOpen ? 'translate-x-0' : '-translate-x-full'"
  role="dialog"
  aria-label="Navigation"
>
  <!-- 드로어 헤더: 타이틀 + 닫기 버튼 -->
  <div class="sticky top-0 z-10 flex items-center justify-between px-3 py-2
              bg-[#0B0E1A]/95 backdrop-blur-md border-b border-white/10">
    <span class="text-[12px] uppercase tracking-wider text-white/60">Navigation</span>

    <button
      type="button"
      class="inline-flex items-center justify-center w-8 h-8 rounded-md
             text-white/80 hover:text-white bg-white/5 hover:bg-white/10
             border border-white/10 transition"
      @click="closeMenu"
      aria-label="메뉴 닫기"
    >
      <!-- X 아이콘 -->
      <svg viewBox="0 0 24 24" class="w-5 h-5 block" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <path d="M6 6l12 12M18 6l-12 12"/>
      </svg>
    </button>
  </div>

  <!-- 드로어 내 네비 -->
  <nav class="p-3 space-y-1">
    <NuxtLink
      to="/"
      class="group flex items-center gap-3 rounded-lg px-3 py-2 text-white/85
             hover:bg-white/10 border border-transparent hover:border-white/10"
      @click="closeMenu"
    >
      <svg viewBox="0 0 24 24" class="w-5 h-5" fill="currentColor">
        <path d="M12 3.1 2 11h2v9h6v-6h4v6h6v-9h2L12 3.1Z"/>
      </svg>
      <span class="text-sm">Home</span>
    </NuxtLink>

    <NuxtLink
      to="/char"
      class="group flex items-center gap-3 rounded-lg px-3 py-2 text-white/85
             hover:bg-white/10 border border-transparent hover:border-white/10"
      @click="closeMenu"
    >
      <svg viewBox="0 0 24 24" class="w-5 h-5" fill="currentColor">
        <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.33 0-8 2.17-8 5v1h16v-1c0-2.83-3.67-5-8-5Z"/>
      </svg>
      <span class="text-sm">Char</span>
    </NuxtLink>

    <NuxtLink
      to="/events"
      class="group flex items-center gap-3 rounded-lg px-3 py-2 text-white/85
             hover:bg-white/10 border border-transparent hover:border-white/10"
      @click="closeMenu"
    >
      <svg viewBox="0 0 24 24" class="w-5 h-5" fill="currentColor">
        <path d="M7 2h2v2h6V2h2v2h3v18H4V4h3ZM6 8v12h12V8H6Z"/>
      </svg>
      <span class="text-sm">Event</span>
    </NuxtLink>
  </nav>
</aside>

  </Teleport>
</template>

<style scoped>
/* 오버레이 페이드 */
.fade-enter-active,.fade-leave-active{ transition: opacity .18s ease }
.fade-enter-from,.fade-leave-to{ opacity: 0 }

.nav-btn {
  @apply inline-flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-lg transition-all duration-200;
}
/* 혹시 폰트 베이스라인 영향이 있으면 svg는 block */
.nav-btn svg { display: block; }
</style>
