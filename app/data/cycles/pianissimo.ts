import type { CharacterCycles } from "./types";

export const VIDEO_BASE =
  "https://pgr-video-proxy.fullmoon2009.workers.dev/video";

const spec: CharacterCycles = {
  tabs: [
    { key: "tabA", label: "속성" },
    { key: "tabB", label: "어픽스" },
  ],
  ranks: [
    { key: "sswx", label: "SS0 (전무X)" },
    { key: "sss", label: "SSS" },
  ],
  sections: {
    "tabA:sss": {
      typeIcon: "/assets/types/physics.png",
      typeBorderCls: "border-2 border-gray-400",
      pillText: { first: "첫 출전 사이클", repeat: "반복 사이클" },
      noticeHtml: ``,
      content: {
        first: {
          video: `${VIDEO_BASE}/pianissimosssS.mp4`,
          slides: [
            {
              kind: "rows",
              rows: [
                [
                  {
                    kind: "duo",
                    left: "/assets/skillball/pianissimored.webp",
                    right: "/assets/skillball/pianissimoyellow.webp",
                    count: 3,
                    label: "스킬볼 ×3",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimobasic.webp",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 기본 공격",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoult.webp",
                    label: "필살기",
                  },
                ],
                [
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoblue.webp",
                    label: "청색 스킬볼",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoleader.webp",
                    count: 2,
                    label: "협주 스킬볼 ×2",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/dodge.png",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 회피",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoult.webp",
                    label: "필살기",
                  },
                ],
              ],
            },
            {
              kind: "text",
              lines: ["교대-3체-평꾹-1차궁", "-파볼-회피꾹-2차궁-교대"],
            },
          ],
        },
        repeat: {
          video: `${VIDEO_BASE}/pianissimosssR.mp4`,
          slides: [
            {
              kind: "rows",
              rows: [
                [
                  {
                    kind: "duo",
                    left: "/assets/skillball/pianissimored.webp",
                    right: "/assets/skillball/pianissimoyellow.webp",
                    count: 3,
                    label: "스킬볼 ×3",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimobasic.webp",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 기본 공격",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoult.webp",
                    label: "필살기",
                  },
                ],
                [
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoblue.webp",
                    label: "청색 스킬볼",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoleader.webp",
                    count: 2,
                    label: "협주 스킬볼 ×2",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/dodge.png",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 회피",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoult.webp",
                    label: "필살기",
                  },
                ],
                [
                  { kind: "arrow" },
                  {
                    kind: "duo",
                    left: "/assets/skillball/pianissimored.webp",
                    right: "/assets/skillball/pianissimoyellow.webp",
                    count: 3,
                    label: "스킬볼 ×3",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimobasic.webp",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 기본 공격",
                  },
                  { kind: "arrow" },
                  {
                    kind: "duo",
                    left: "/assets/skillball/pianissimored.webp",
                    right: "/assets/skillball/pianissimoyellow.webp",
                    count: 3,
                    label: "스킬볼 ×3(평타 홀드 유지)",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoult.webp",
                    label: "필살기",
                  },
                ],
                [
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/dodge.png",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 회피",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoult.webp",
                    label: "필살기",
                  },
                ],
              ],
            },
            {
              kind: "text",
              lines: [
                "교대-3체-평꾹-1차궁",
                "-파볼-협주볼x2-회피꾹-꽃봉오리궁",
                "-3체-평꾹-3체(평꾹 떼지말고)-1차궁",
                "-회피꾹-음악회궁",
              ],
            },
          ],
        },
      },
    },

    "tabA:sswx": {
      typeIcon: "/assets/types/physics.png",
      typeBorderCls: "border-2 border-gray-400",
      pillText: { repeat: "반복 사이클" },
      content: {
        repeat: {
          video: `${VIDEO_BASE}/pianissimosswx.mp4`,
          slides: [
            {
              kind: "rows",
              rows: [
                // line 1
                [
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimobasic.webp",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 기본 공격",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoblue.webp",
                    label: "청색 스킬볼",
                  },
                  { kind: "arrow" },
                  {
                    kind: "duo",
                    left: "/assets/skillball/pianissimored.webp",
                    right: "/assets/skillball/pianissimoyellow.webp",
                    count: 3,
                    label: "스킬볼 ×3",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoult.webp",
                    label: "필살기",
                  },
                ],
                // line 2
                [
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/dodge.png",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 회피",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimobasic.webp",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 기본 공격",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoult.webp",
                    label: "필살기",
                  },
                ],
                // line 3
                [
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoblue.webp",
                    label: "청색 스킬볼",
                  },
                  { kind: "arrow" },
                  {
                    kind: "duo",
                    left: "/assets/skillball/pianissimored.webp",
                    right: "/assets/skillball/pianissimoyellow.webp",
                    count: 3,
                    label: "스킬볼 ×3",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimobasic.webp",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 기본 공격",
                  },
                  { kind: "arrow" },
                  {
                    kind: "duo",
                    left: "/assets/skillball/pianissimored.webp",
                    right: "/assets/skillball/pianissimoyellow.webp",
                    count: 3,
                    label: "스킬볼 ×3",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoult.webp",
                    label: "필살기",
                  },
                ],
                // line 4
                [
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/dodge.png",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 회피",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimobasic.webp",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 기본 공격",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoblue.webp",
                    label: "청색 스킬볼",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoleader.webp",
                    label: "협주 스킬볼",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoult.webp",
                    label: "필살기",
                  },
                ],
              ],
            },
            // ----  텍스트 요약 ----
            {
              kind: "text" as const,
              lines: [
                "교대-평꾹-파볼-3체-1차궁",
                "-회피꾹-평꾹-음악회궁",
                "-파볼-3체-평꾹-3체-1차궁",
                "-회피꾹-평꾹-파볼-협주볼-음악회궁",
              ],
            },
          ],
        },
      },
    },

    "tabA:sscx": {
      typeIcon: "/assets/types/physics.png",
      typeBorderCls: "border-2 border-gray-400",
      pillText: { repeat: "반복 사이클" },
      content: {
        repeat: {
          video: `${VIDEO_BASE}/pianissimosscx.mp4`,
          slides: [
            {
              kind: "rows",
              rows: [
                // line 1: 3체 → 평꾹 → 3체 → 1차궁
                [
                  {
                    kind: "duo",
                    left: "/assets/skillball/pianissimored.webp",
                    right: "/assets/skillball/pianissimoyellow.webp",
                    count: 3,
                    label: "스킬볼 ×3",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimobasic.webp",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 기본 공격",
                  },
                  { kind: "arrow" },
                  {
                    kind: "duo",
                    left: "/assets/skillball/pianissimored.webp",
                    right: "/assets/skillball/pianissimoyellow.webp",
                    count: 3,
                    label: "스킬볼 ×3",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoult.webp",
                    label: "필살기",
                  },
                ],
                // line 2: 회피꾹 → 평꾹 → 협주볼×2 → 음악회궁
                [
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/dodge.png",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 회피",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimobasic.webp",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 기본 공격",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoleader.webp",
                    count: 2,
                    label: "협주 스킬볼 ×2",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoult.webp",
                    label: "필살기",
                  },
                ],
                // line 3: 3체 → 평꾹 → 3체 → 1차궁
                [
                  { kind: "arrow" },
                  {
                    kind: "duo",
                    left: "/assets/skillball/pianissimored.webp",
                    right: "/assets/skillball/pianissimoyellow.webp",
                    count: 3,
                    label: "스킬볼 ×3",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimobasic.webp",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 기본 공격",
                  },
                  { kind: "arrow" },
                  {
                    kind: "duo",
                    left: "/assets/skillball/pianissimored.webp",
                    right: "/assets/skillball/pianissimoyellow.webp",
                    count: 3,
                    label: "스킬볼 ×3",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoult.webp",
                    label: "필살기",
                  },
                ],
                // line 4: 회피꾹 → 음악회궁
                [
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/dodge.png",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 회피",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoult.webp",
                    label: "필살기",
                  },
                ],
              ],
            },
            {
              kind: "text",
              lines: [
                "교대-3체-평꾹-3체-1차궁",
                "-회피꾹-평꾹-협주볼x2-음악회궁",
                "-3체-평꾹-3체-1차궁",
                "-회피꾹-음악회궁",
              ],
            },
          ],
        },
      },
    },

    // sections에 추가
    "tabA:sswo": {
      typeIcon: "/assets/types/physics.png",
      typeBorderCls: "border-2 border-gray-400",
      pillText: { first: "첫 출전 사이클", repeat: "반복 사이클" },
      noticeHtml: ``,
      content: {
        first: {
          video: `${VIDEO_BASE}/pianissimosswo.mp4`,
          slides: [
            {
              kind: "rows",
              rows: [
                // line 1: 3체 → 평꾹 → 3체 → 1차궁
                [
                  {
                    kind: "duo",
                    left: "/assets/skillball/pianissimored.webp",
                    right: "/assets/skillball/pianissimoyellow.webp",
                    count: 3,
                    label: "스킬볼 ×3",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimobasic.webp",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 기본 공격",
                  },
                  { kind: "arrow" },
                  {
                    kind: "duo",
                    left: "/assets/skillball/pianissimored.webp",
                    right: "/assets/skillball/pianissimoyellow.webp",
                    count: 3,
                    label: "스킬볼 ×3",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoult.webp",
                    label: "필살기",
                  },
                ],
                // line 2: 회피꾹 → 평꾹 → 협주×3 → 음악회궁
                [
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/dodge.png",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 회피",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimobasic.webp",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 기본 공격",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoleader.webp",
                    count: 3,
                    label: "협주 스킬볼 ×3",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoult.webp",
                    label: "필살기",
                  },
                ],
                // line 3: 3체 → 평꾹 → 3체 → 1차궁
                [
                  { kind: "arrow" },
                  {
                    kind: "duo",
                    left: "/assets/skillball/pianissimored.webp",
                    right: "/assets/skillball/pianissimoyellow.webp",
                    count: 3,
                    label: "스킬볼 ×3",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimobasic.webp",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 기본 공격",
                  },
                  { kind: "arrow" },
                  {
                    kind: "duo",
                    left: "/assets/skillball/pianissimored.webp",
                    right: "/assets/skillball/pianissimoyellow.webp",
                    count: 3,
                    label: "스킬볼 ×3",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoult.webp",
                    label: "필살기",
                  },
                ],
                // line 4: 협주(조건부) → 회피꾹 → 음악회궁
                [
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoleader.webp",
                    label: "협주 스킬볼 (증폭 버프 내 가능 시)",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/dodge.png",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 회피",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoult.webp",
                    label: "필살기",
                  },
                ],
                // line 5: 3체
                [
                  { kind: "arrow" },
                  {
                    kind: "duo",
                    left: "/assets/skillball/pianissimored.webp",
                    right: "/assets/skillball/pianissimoyellow.webp",
                    count: 3,
                    label: "스킬볼 ×3",
                  },
                ],
              ],
            },
            {
              kind: "text",
              lines: [
                "교대-3체-평꾹-3체-1차궁",
                "-회피꾹-평꾹-협주볼x3-음악회궁",
                "-3체-평꾹-3체-1차궁",
                "-협주볼-회피꾹-음악회궁",
                "-3체-교대",
              ],
            },
          ],
        },

        repeat: {
          video: `${VIDEO_BASE}/pianissimosswo.mp4`,
          slides: [
            {
              kind: "rows",
              rows: [
                // line 1: 평꾹 → 3체 → 1차궁
                [
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimobasic.webp",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 기본 공격",
                  },
                  { kind: "arrow" },
                  {
                    kind: "duo",
                    left: "/assets/skillball/pianissimored.webp",
                    right: "/assets/skillball/pianissimoyellow.webp",
                    count: 3,
                    label: "스킬볼 ×3",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoult.webp",
                    label: "필살기",
                  },
                ],
                // line 2: 회피꾹 → 평꾹 → 협주×3 → 음악회궁
                [
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/dodge.png",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 회피",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimobasic.webp",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 기본 공격",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoleader.webp",
                    count: 3,
                    label: "협주 스킬볼 ×3",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoult.webp",
                    label: "필살기",
                  },
                ],
                // line 3: 3체 → 평꾹 → 3체 → 1차궁
                [
                  { kind: "arrow" },
                  {
                    kind: "duo",
                    left: "/assets/skillball/pianissimored.webp",
                    right: "/assets/skillball/pianissimoyellow.webp",
                    count: 3,
                    label: "스킬볼 ×3",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimobasic.webp",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 기본 공격",
                  },
                  { kind: "arrow" },
                  {
                    kind: "duo",
                    left: "/assets/skillball/pianissimored.webp",
                    right: "/assets/skillball/pianissimoyellow.webp",
                    count: 3,
                    label: "스킬볼 ×3",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoult.webp",
                    label: "필살기",
                  },
                ],
                // line 4: 협주(조건부) → 회피꾹 → 음악회궁
                [
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoleader.webp",
                    label: "협주 스킬볼 (증폭 버프 내 가능 시)",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/dodge.png",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 회피",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoult.webp",
                    label: "필살기",
                  },
                ],
                // line 5: 3체
                [
                  { kind: "arrow" },
                  {
                    kind: "duo",
                    left: "/assets/skillball/pianissimored.webp",
                    right: "/assets/skillball/pianissimoyellow.webp",
                    count: 3,
                    label: "스킬볼 ×3",
                  },
                ],
              ],
            },
            {
              kind: "text",
              lines: [
                "교대-평꾹-3체-1차궁",
                "-회피꾹-평꾹-협주볼x3-음악회궁",
                "-3체-평꾹-3체-1차궁",
                "-협주볼-회피꾹-음악회궁",
                "-3체-교대",
              ],
            },
          ],
        },
      },
    },

    // sections에 추가
    "tabA:ss3": {
      typeIcon: "/assets/types/physics.png",
      typeBorderCls: "border-2 border-gray-400",
      pillText: { repeat: "반복 사이클" },
      noticeHtml: ``,
      content: {
        repeat: {
          video: `${VIDEO_BASE}/pianissimoss3.mp4`,
          slides: [
            {
              kind: "rows",
              rows: [
                // line 1: 3체 → 평꾹 → 3체 → 1차궁
                [
                  {
                    kind: "duo",
                    left: "/assets/skillball/pianissimored.webp",
                    right: "/assets/skillball/pianissimoyellow.webp",
                    count: 3,
                    label: "스킬볼 ×3",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimobasic.webp",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 기본 공격",
                  },
                  { kind: "arrow" },
                  {
                    kind: "duo",
                    left: "/assets/skillball/pianissimored.webp",
                    right: "/assets/skillball/pianissimoyellow.webp",
                    count: 3,
                    label: "스킬볼 ×3",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoult.webp",
                    label: "필살기",
                  },
                ],
                // line 2: 협주×6 → 평꾹 → 회피꾹 → 꽃봉오리궁
                [
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoleader.webp",
                    count: 6,
                    label: "협주 스킬볼 ×6",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimobasic.webp",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 기본 공격",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/dodge.png",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 회피",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoult.webp",
                    label: "필살기",
                  },
                ],
                // line 3: 3체 → 평꾹 → 3체(평꾹 유지) → 1차궁
                [
                  { kind: "arrow" },
                  {
                    kind: "duo",
                    left: "/assets/skillball/pianissimored.webp",
                    right: "/assets/skillball/pianissimoyellow.webp",
                    count: 3,
                    label: "스킬볼 ×3",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimobasic.webp",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 기본 공격",
                  },
                  { kind: "arrow" },
                  {
                    kind: "duo",
                    left: "/assets/skillball/pianissimored.webp",
                    right: "/assets/skillball/pianissimoyellow.webp",
                    count: 3,
                    label: "스킬볼 ×3(평타 홀드 유지)",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoult.webp",
                    label: "필살기",
                  },
                ],
                // line 4: 회피꾹 → 음악회궁
                [
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/dodge.png",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 회피",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoult.webp",
                    label: "필살기",
                  },
                ],
              ],
            },
            {
              kind: "text",
              lines: [
                "교대-3체-평꾹-3체-1차궁",
                "-협주볼x6-평꾹-회피꾹-꽃봉오리궁",
                "-3체-평꾹-3체(평꾹 떼지말고)-1차궁",
                "-회피꾹-음악회궁",
              ],
            },
          ],
        },
      },
    },

    "tabB:sswo": {
      typeIcon: "/assets/types/freeze.png",
      typeBorderCls: "border-2 border-blue-500",
      pillText: { first: "첫 출전 사이클", repeat: "반복 사이클" },
      noticeHtml: ``,
      content: {
        first: {
          video: `${VIDEO_BASE}/pianissimoaffixssS.mp4`,
          slides: [
            {
              kind: "rows",
              rows: [
                [
                // line 1 교대-3체-평꾹-3체-궁꾹
                  {
                    kind: "duo",
                    left: "/assets/skillball/pianissimored.webp",
                    right: "/assets/skillball/pianissimoyellow.webp",
                    count: 3,
                    label: "스킬볼 ×3",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimobasic.webp",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 기본 공격",
                  },
                  { kind: "arrow" },
                  {
                    kind: "duo",
                    left: "/assets/skillball/pianissimored.webp",
                    right: "/assets/skillball/pianissimoyellow.webp",
                    count: 3,
                    label: "스킬볼 ×3",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    rounded: true,
                    bordered: true,
                    src: "/assets/skillball/pianissimoult.webp",
                    label: "[HOLD] 필살기",
                  },
                ],
                [
                // line 2 -회피꾹-평꾹-협주볼x6-2차궁
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/dodge.png",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 회피",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimobasic.webp",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 기본 공격",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoleader.webp",
                    count: 6,
                    label: "협주 스킬볼 ×6",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoult.webp",
                    label: "필살기",
                  },
                ],
                
              ],
            },
            {
              kind: "text",
              lines: ["교대-3체-평꾹-3체-궁꾹", "-회피꾹-평꾹-협주볼x6-2차궁-교대"],
            },
          ],
        },
        repeat: {
          video: `${VIDEO_BASE}/pianissimoaffixssR.mp4`,
          slides: [
            {
              kind: "rows",
              rows: [
                [
                    // line 1 교대-3체-평꾹-3체-궁꾹
                  {
                    kind: "duo",
                    left: "/assets/skillball/pianissimored.webp",
                    right: "/assets/skillball/pianissimoyellow.webp",
                    count: 3,
                    label: "스킬볼 ×3",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimobasic.webp",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 기본 공격",
                  },
                  { kind: "arrow" },
                  {
                    kind: "duo",
                    left: "/assets/skillball/pianissimored.webp",
                    right: "/assets/skillball/pianissimoyellow.webp",
                    count: 3,
                    label: "스킬볼 ×3",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoult.webp",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 필살기",
                  },
                ],
                [
                    // line 2 -회피꾹-평꾹-협주볼x6-회피꾹-2차궁
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/dodge.png",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 회피",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimobasic.webp",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 기본 공격",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoleader.webp",
                    count: 6,
                    label: "협주 스킬볼 ×6",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/dodge.png",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 회피",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoult.webp",
                    label: "필살기",
                  },
                ],
                
              ],
            },
            {
              kind: "text",
              lines: [
                "교대-3체-평꾹-3체-궁꾹",
                "-회피꾹-평꾹-협주볼x6-회피꾹-2차궁",
              ],
            },
          ],
        },
      },
    },

    "tabB:sss": {
      typeIcon: "/assets/types/freeze.png",
      typeBorderCls: "border-2 border-blue-500",
      pillText: { first: "첫 출전 사이클", repeat: "반복 사이클" },
      noticeHtml: ``,
      content: {
        first: {
          video: `${VIDEO_BASE}/pianissimoaffixsssR.mp4`,
          slides: [
            {
              kind: "rows",
              rows: [
                [
                // line 1 교대-3체-평꾹-궁꾹
                  {
                    kind: "duo",
                    left: "/assets/skillball/pianissimored.webp",
                    right: "/assets/skillball/pianissimoyellow.webp",
                    count: 3,
                    label: "스킬볼 ×3",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimobasic.webp",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 기본 공격",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    rounded: true,
                    bordered: true,
                    src: "/assets/skillball/pianissimoult.webp",
                    label: "[HOLD] 필살기",
                  },
                ],
                [
                // line 2 -파볼-회피꾹-협주볼x1-2차궁
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoblue.webp",
                    label: "청색 스킬볼",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/dodge.png",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 회피",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoleader.webp",
                    label: "협주 스킬볼",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoult.webp",
                    label: "필살기",
                  },
                ],
                
              ],
            },
            {
              kind: "text",
              lines: ["교대-3체-평꾹-궁꾹", "-파볼-회피꾹-협주볼x1-2차궁"],
            },
          ],
        },
        repeat: {
          video: `${VIDEO_BASE}/pianissimoaffixsssR.mp4`,
          slides: [
            {
              kind: "rows",
              rows: [
                [
                    // line 1 교대-3체-평꾹-궁꾹
                  {
                    kind: "duo",
                    left: "/assets/skillball/pianissimored.webp",
                    right: "/assets/skillball/pianissimoyellow.webp",
                    count: 3,
                    label: "스킬볼 ×3",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimobasic.webp",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 기본 공격",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoult.webp",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 필살기",
                  },
                ],
                [
                    // line 2 -파볼-회피꾹-협주볼x3-2차궁
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoblue.webp",
                    label: "청색 스킬볼",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/dodge.png",
                    rounded: true,
                    bordered: true,
                    label: "[HOLD] 회피",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoleader.webp",
                    count: 3,
                    label: "협주 스킬볼 ×3",
                  },
                  { kind: "arrow" },
                  {
                    kind: "icon",
                    src: "/assets/skillball/pianissimoult.webp",
                    label: "필살기",
                  },
                ],
                
              ],
            },
            {
              kind: "text",
              lines: [
                "교대-3체-평꾹-궁꾹",
                "-파볼-회피꾹-협주볼x3-2차궁",
              ],
            },
          ],
        },
      },
    },
  },
};

export default spec;
