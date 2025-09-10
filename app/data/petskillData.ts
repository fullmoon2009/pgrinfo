export type PetModalSkill = {
  img: string
  label: string
  kind: 'active' | 'passive'
  desc: string
  level?: number | string
}

export type PetModal = {
  level?: number | string
  skills: PetModalSkill[]
}


export const petSkillData: Record<string, PetModal> = {
  soa: {
    level: 30,
    skills: [
      {
        img: '/assets/petskills/redwolfactive.webp',
        label: '그림자 추적.불',
        kind: 'active',
        level: 5,
        desc:
          '임의로 기본 스킬볼 6개를 소모하면, 보조기 버튼이 활성화된다. 시전하면 소아가 목표를 향해 레이저를 발사하여 <span class="text-orange-400 font-semibold">불속성 피해</span>의 불속성 피해를 4회 입힌다.',
      },

      {
        img: '/assets/petskills/redwolfactive.webp',
        label: '달빛 사냥.불',
        kind: 'active',
        level: 5,
        desc:
          '임의로 기본 스킬볼 6개를 소모하면, 보조기 버튼이 활성화된다. 시전하면 소아가 광날을 물고 목표를 공격하며, 주위의 적 유닛을 끌어모아 <span class="text-orange-400 font-semibold">1000%</span>의 불속성 피해를 2회 입힌다.',
      },

      {
        img: '/assets/petskills/redwolf5.webp',
        label: '질주의 흔적',
        kind: 'passive',
        level: 5,
        desc:
          '소아의 액티브 스킬 피해가 <span class="text-sky-400 font-semibold">70%</span> 증가한다.',
      },

      {
        img: '/assets/petskills/redwolf4.webp',
        label: '작열의 발톱',
        kind: 'passive',
        level: 5,
        desc: '장착한 캐릭터의 공격력이 <span class="text-sky-400 font-semibold">100</span> 증가한다.',
      },
      {
        img: '/assets/petskills/redwolf3.png',
        label: '야밤의 사냥',
        kind: 'passive',
        level: 5,
        desc: '소아가 액티브 스킬을 시전하면 장착한 캐릭터의 추가 피해 버프가 <span class="text-sky-400 font-semibold">5%</span> 상승한다. 8초간 지속. 중복 발동 시 지속 시간이 초기화된다.',
      },

      {
        img: '/assets/petskills/redwolf2.png',
        label: '송곳니 기습',
        kind: 'passive',
        level: 5,
        desc: '장착한 캐릭터의 불속성 피해가 <span class="text-sky-400 font-semibold">10%</span> 상승한다. <span class="text-sky-400 font-semibold">암연 단계 수가 1 이상</span>이면 암흑속성 피해가 <span class="text-sky-400 font-semibold">10%</span> 상승한다.',
      },

      {
        img: '/assets/petskills/redwolf1.png',
        label: '광기의 사냥',
        kind: 'passive',
        level: 5,
        desc: '베라·작망이 소아를 장착한 상태에서 <span class="text-sky-400 font-semibold">영혼의 불길</span>을 시전한 후, 소아를 소환하여 협력 공격을 하고, 주위의 적 유닛을 끌어모아 <span class="text-sky-400 font-semibold">1500%</span>의 불속성 피해를 2회 입힌다. <span class="text-sky-400 font-semibold">야밤의 불꽃</span> 시전 시, 제거한 황색 스킬볼 개수 <span class="text-sky-400 font-semibold">1/2/3/4/5/6</span>에 따라, <span class="text-sky-400 font-semibold">야밤의 불꽃</span>의 기본 피해가 <span class="text-sky-400 font-semibold">10%/20%/30%/40%/50%/60%</span> 상승한다.',
      }
    ],
  },

  speaker: {
    level: 30,
    skills: [
      {
        img: '/assets/petskills/speakeractive.webp',
        label: '정예 행진곡.물리',
        kind: 'active',
        level: 5,
        desc:
          '임의로 기본 스킬볼 6개를 소모하면, 보조기 버튼이 활성화된다. 시전 시 설가가 목표에게 참격을 가해 <span class="text-orange-400 font-semibold">2050%</span>의 물리 피해를 1회 입힌다.',
      },

      {
        img: '/assets/petskills/speakeractive.webp',
        label: '광휘의 선율.물리',
        kind: 'active',
        level: 5,
        desc:
          '임의로 기본 스킬볼 6개를 소모하면, 보조기 버튼이 활성화된다. 시전 후 설가가 주변으로 칼날을 발사하고 이를 회수하며,  주위의 적 유닛을 끌어모아 <span class="text-orange-400 font-semibold">1000%</span>의 물리 피해를 2회 입힌다.',
      },

      {
        img: '/assets/petskills/speaker5.webp',
        label: '전장의 나팔',
        kind: 'passive',
        level: 5,
        desc:
          '설가의 액티브 스킬 피해가 <span class="text-sky-400 font-semibold">70%</span> 증가한다.',
      },

      {
        img: '/assets/petskills/speaker4.webp',
        label: '승리의 노래',
        kind: 'passive',
        level: 5,
        desc: '장착한 캐릭터의 공격력이 <span class="text-sky-400 font-semibold">100</span> 증가한다.',
      },
      {
        img: '/assets/petskills/speaker3.webp',
        label: '환희의 연주',
        kind: 'passive',
        level: 5,
        desc: '설가가 액티브 스킬을 시전하면 장착한 캐릭터의 추가 피해 버프가 <span class="text-sky-400 font-semibold">5%</span> 상승한다. 8초간 지속. 중복 발동 시 지속 시간이 초기화된다.',
      },

      {
        img: '/assets/petskills/speaker2.webp',
        label: '명암의 조화',
        kind: 'passive',
        level: 5,
        desc: '장착한 캐릭터의 물리 피해가 <span class="text-sky-400 font-semibold">10%</span> 상승한다. <span class="text-sky-400 font-semibold">얼음 가시</span>이 지속 기간 동안 결빙 속성 피해가 <span class="text-sky-400 font-semibold">10%</span> 증가한다.',
      },

      {
        img: '/assets/petskills/speaker1.webp',
        label: '종소리의 울림',
        kind: 'passive',
        level: 5,
        desc: '세레나·희성이 설가를 장착한 상태에서 <span class="text-sky-400 font-semibold">격정의 선율</span> 시전 시, 설가를 소환하여 협력 공격을 진행하고 <span class="text-sky-400 font-semibold">1000%</span>의 물리 피해를 3회 입힌다. <span class="text-sky-400 font-semibold">일반 공격-음검의 울림</span> 시전 시, 자신의 공격력이 8초간 40% 상승한다. 중복 발동 시 지속 시간이 초기화된다.',
      }
    ],
  },


}
