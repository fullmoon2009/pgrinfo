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
          '소아의 액티브 스킬 피해가 <span class="text-sky-400 font-semibold">14%</span> 증가한다.',
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


}
