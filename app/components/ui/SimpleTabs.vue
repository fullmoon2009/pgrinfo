<script setup lang="ts">
type TabItem = { id: string; label: string }
const props = defineProps<{
  items: TabItem[]
  modelValue?: string
  sizeClass?: string
}>()
const emit = defineEmits<{'update:modelValue':[string]}>()
const active = computed({
  get: () => props.modelValue ?? props.items[0]?.id,
  set: v  => emit('update:modelValue', v)
})
</script>

<template>
  <div role="tablist" class="flex gap-2 border-b border-white/20">
    <button
      v-for="t in items" :key="t.id"
      role="tab"
      class="rounded-t-md px-2 py-2 md:px-4 md:py-2 font-semibold"
      :class="[
        sizeClass || 'text-[11px] md:text-[15px]',
        active===t.id ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white/90'
      ]"
      :aria-selected="active===t.id"
      @click="active = t.id"
    >
      {{ t.label }}
    </button>
  </div>
</template>