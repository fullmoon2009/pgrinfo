<script setup lang="ts">
import SimpleTabs from '~/components/ui/SimpleTabs.vue'

type VideoSet = { first: string; repeat: string }
type InnerTab = {
  id: string; label: string;
  videos?: VideoSet;            
  showModeToggle?: boolean;     
}
type OuterTab = {
  id: string; label: string;
  videos?: VideoSet;            
  showModeToggle?: boolean;     
  inner?: InnerTab[];           
}

const props = defineProps<{
  title?: string
  outerTabs: OuterTab[]
  initialOuterId?: string
  initialInnerId?: string
  initialMode?: 'first'|'repeat'
}>()

const mode = ref<'first'|'repeat'>(props.initialMode ?? 'first')
const outerId = ref(props.initialOuterId ?? props.outerTabs[0]?.id)
const currentOuter = computed(() => props.outerTabs.find(t=>t.id===outerId.value))

const hasInner = computed(() => !!currentOuter.value?.inner?.length)
const innerId = ref<string | undefined>(
  props.initialInnerId ?? currentOuter.value?.inner?.[0]?.id
)
watch(outerId, () => {
  innerId.value = currentOuter.value?.inner?.[0]?.id
})

const currentInner = computed(() =>
  currentOuter.value?.inner?.find(i=>i.id===innerId.value)
)
const videos = computed<VideoSet | undefined>(() =>
  currentInner.value?.videos ?? currentOuter.value?.videos
)
const showModeToggle = computed<boolean>(() =>
  (currentInner.value?.showModeToggle ?? currentOuter.value?.showModeToggle ?? true)
)
</script>

<template>
  <div class="max-w-4xl w-full mx-auto mt-6 grid grid-cols-1 gap-2 md:px-6 md:py-3 rounded-md bg-[#0A0A23]/30">
    <!-- 타이틀 -->
    <div class="flex justify-center mb-3 mt-5 md:mb-4 md:mt-3">
      <span class="inline-flex items-center gap-2 rounded-md px-3 py-1.5 sm:px-4 sm:py-2 text-[15px] font-bold
                    bg-[#0A0A23]/40 text-white border-2 border-black"> {{ title || '사이클 가이드' }} </span>
    </div>

    <!-- outer box -->
    <div class="bg-black/50 rounded-md p-1 md:p-4 text-white">
      <SimpleTabs v-model="outerId" :items="outerTabs.map(t=>({id:t.id,label:t.label}))" />

      <!-- inner box -->
      <div class="max-w-4xl w-full mx-auto mt-2 grid grid-cols-1 gap-4 px-1 md:px-6 py-3 rounded-md bg-[#0A0A23]/30">

        <!-- inner tab(있을 때만) -->
        <div v-if="hasInner" class="col-span-1">
          <SimpleTabs v-model="innerId"
            :items="currentOuter!.inner!.map(i=>({id:i.id,label:i.label}))"
            sizeClass="text-[10px] md:text-sm" />
        </div>

        <!-- mode toggle -->
        <div class="w-full">
          <div class="flex flex-col items-center mb-4">
             <img
              src="/assets/types/dark.png"
              alt="암속성"
              class="w-10 h-10 object-cover rounded-md border-2 border-purple-400 mb-3"
            />
            <div v-if="showModeToggle" class="flex gap-2">
              <button type="button"
                      :aria-pressed="mode==='first'"
                      @click="mode='first'"
                      class="inline-flex items-center rounded-full px-3 py-1 font-semibold border transition
                             text-[11px] md:text-sm"
                      :class="mode==='first'
                        ? 'bg-white/20 text-white border-white/40'
                        : 'bg-white/10 text-white/70 hover:text-white border-white/20'">
                첫 출전 사이클
              </button>
              <button type="button"
                      :aria-pressed="mode==='repeat'"
                      @click="mode='repeat'"
                      class="inline-flex items-center rounded-full px-3 py-1 font-semibold border transition
                             text-[11px] md:text-sm"
                      :class="mode==='repeat'
                        ? 'bg-white/20 text-white border-white/40'
                        : 'bg-white/10 text-white/70 hover:text-white border-white/20'">
                반복 사이클
              </button>
            </div>
          </div>
          <video v-if="videos" :src="videos[mode]" controls muted class="w-full h-auto rounded-md block"></video>
        </div>

        <!-- 탭에 따라 바뀌는 컨텐츠 -->
        <div class="bg-black/50 md:p-4 rounded-md text-white md:w-full">
          <slot name="content"
                :outer-id="outerId"
                :inner-id="innerId"
                :mode="mode" />
        </div>
      </div>
    </div>
  </div>
</template>
