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
        img: '/assets/petskills/redwolf1.png',
        label: '그림자 추적·불',
        kind: 'active',
        level: 5,
        desc:
          '임의로 기본 스킬볼 6개를 소모하면 보조기가 활성화됩니다. 목표를 향해 레이저를 발사하여 <span class="text-orange-400 font-semibold">불속성 피해</span>를 4회 가합니다.',
      },
      {
        img: '/assets/petskills/redwolf2.png',
        label: '질주의 흔적',
        kind: 'passive',
        level: 5,
        desc: '장착한 캐릭터의 <span class="text-emerald-300">액티브 스킬 피해</span>가 증가합니다.',
      },
      {
        img: '/assets/petskills/redwolf3.png',
        label: '작열의 발톱',
        kind: 'passive',
        level: 5,
        desc: '장착한 캐릭터의 <span class="text-emerald-300">공격력</span>이 증가합니다.',
      },
    ],
  },


}
