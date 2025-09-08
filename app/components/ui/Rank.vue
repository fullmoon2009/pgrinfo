<script setup lang="ts">
type Row = { rank: string; recommend?: string; note?: string }
defineProps<{ rows: Row[] }>()
const starCount = (s?: string) => s?.match(/★/g)?.length ?? 0
const parseNotes = (note?: string) =>
  note ? note.split('+').map(t => t.trim()).filter(Boolean) : []
</script>

<template>
  <div
    class="overflow-hidden rounded-xl bg-white/[0.03]" 
  >
    <table class="w-full table-fixed text-[13px] md:text-[15px]">
      <colgroup>
        <col style="width:22%" />
        <col style="width:22%" />
        <col style="width:56%" />
      </colgroup>

      <thead class="bg-white/[0.04] text-white/90 border-b border-white/10">
        <tr>
          <th class="p-3 text-center font-semibold tracking-wide">랭크</th>
          <th class="p-3 text-center font-semibold tracking-wide">추천도</th>
          <th class="p-3 text-center font-semibold tracking-wide">비고</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="(r, i) in rows"
          :key="i"
          class="border-t border-white/5 first:border-t-0 odd:bg-white/[0.02]"
        >
          <td class="p-3 text-center font-semibold text-white/90">
            {{ r.rank }}
          </td>

          <td class="p-3">
            <div class="flex justify-center gap-1">
              <template v-if="starCount(r.recommend)">
                <svg
                  v-for="n in starCount(r.recommend)"
                  :key="n"
                  viewBox="0 0 24 24"
                  class="w-4 h-4 md:w-5 md:h-5 text-amber-300"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              </template>
              <span v-else class="text-white/30">—</span>
            </div>
          </td>

          <td class="p-3">
            <div class="flex justify-center gap-2 flex-wrap">
              <template v-if="parseNotes(r.note).length">
                <span
                  v-for="(chip, j) in parseNotes(r.note)"
                  :key="j"
                  class="inline-flex items-center rounded-full px-2.5 py-0.5 text-[12px]
                         bg-white/[0.06] border border-white/15 text-white/85"
                >
                  {{ chip }}
                </span>
              </template>
              <span v-else class="text-white/30">—</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
