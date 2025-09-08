export type WeaponTooltip = {
  title: string
  description: string  
}

export const weaponData: Record<string, WeaponTooltip> = {
  
  deathlessflame: {
    title: '불멸의 불길',
    description: '공격력이 10% 증가하고, 하늘을 태우는 창의 기본 피해가 2배가 된다.'
  },

  devilsworddante: {
    title: '인간과 악마의 검',
    description:
      '공격력이 10% 증가한다. 진 마인·지진 광염 또는 진 마인·최종 심판 시전 시, 스킬볼 1개를 획득하며 남은 진 마인 게이지가 마인 게이지로 전환된다.\n' +
      '30% 전환될 때마다 스킬볼 1개를 추가로 획득하며, 60% 전환 시 6 데빌 암 에너지를 획득한다.'
  },

  yamato: {
    title: '어둠과 빛을 가르는 검',
    description: '치명타 피해가 30% 증가한다. Sin Devil Trigger 시전 시, 쿨타임 상태가 아닌 초산 공간을 발동한다. 참살 포인트 획득 효율이 2배로 증가한다.'
  }

  
}
