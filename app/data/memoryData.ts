export type ResonanceSlot = {
  label: string;     
  face: string;      
  full: string;      
};

export type MemorySetData = {
  id: string;                   
  name: string;                 
  rarity: number;                
  banner: string;               
  stats: { hp: number; crit: number; atk: number; def: number };
  resonanceSlots: ResonanceSlot[];   
  effects: { two: string; four: string }; 
  bannerObjectPosition?: string   
  bannerScale?: number            
  bannerOrigin?: string    
  bannerShiftY?: string      
};


export const memoryData: Record<string, MemorySetData> = {
  'davinci': {
    id: 'davinci',
    name: '다빈치',
    rarity: 6,
    banner: '/assets/memory/davincifull1.png',
    bannerObjectPosition: '0% 30%',
    bannerScale: 0.8,
    bannerOrigin: '160% 0%',
    bannerShiftY: '28px',
    stats: { hp: 1491, crit: 66, atk: 135, def: 218 },
    resonanceSlots: [
      { label: '1/4', face: '/assets/memory/davincifull1.png', full: '/assets/memory/davinci1.png' },
      { label: '2/5', face: '/assets/memory/davincifull2.png', full: '/assets/memory/davinci2.png' },
      { label: '3/6', face: '/assets/memory/davincifull3.png', full: '/assets/memory/davinci3.png' },
    ],
    effects: {
      two: 'QTE를 사용하면 조작중인 캐릭터의 공격력 10%, 방어력 20%가 상승. 8초간 지속. 중첩 시 지속시간 초기화.',
      four: 'QTE 출전 시, 다른 캐릭터 1명의 QTE를 활성화시킨다. 쿨타임 8초. 3명의 캐릭터가 동시에 전장에 있을 시 모든 캐릭터의 공격력이 20% 증가한다. 2초간 지속.',
    },
  },

  'guinevere': {
    id: 'guinevere',
    name: '퀴니',
    rarity: 6,
    banner: '/assets/memory/guinefull1.png',
    bannerObjectPosition: '0% 45%',
    bannerScale: 0.8,
    bannerOrigin: '160% 0%',
    bannerShiftY: '28px',
    stats: { hp: 1528, crit: 64, atk: 132, def: 223 },
    resonanceSlots: [
      { label: '1/4', face: '/assets/memory/guinefull1.png', full: '/assets/memory/guine1.png' },
      { label: '2/5', face: '/assets/memory/guinefull2.png', full: '/assets/memory/guine2.png' },
      { label: '3/6', face: '/assets/memory/guinefull3.png', full: '/assets/memory/guine3.png' },
    ],
    effects: {
      two: '치료 효과가 10% 증가하며, 치료한 목표의 전체 원소 속성 피해, 전체 원소 속성 저항을 10% 증가시킨다. 5초간 지속, 쿨타임 8초.',
      four: '치료 효과를 시전할 때마다 무인기 에너지 충전을 진행한다. 최대까지 충전한 후 다음 치료 시, 에너지를 비워 원소 속성 무인기 1개를 소환하며, 치료 무인기는 자동으로 HP 비율이 가장 낮은 파티원을 따라간다. 무인기의 5m 원형 범위에서 초당 파티원 2%의 최대 HP가 지속적으로 회복되고, 범위 내 전체 원소 속성 공격력이 15% 증가한다. 5초간 지속, 쿨타임 12초.',
    },
  },
  
  'adolf': {
    id: 'adolf',
    name: '후루루',
    rarity: 6,
    banner: '/assets/memory/adolffull1.webp',
    bannerObjectPosition: '0% 47%',
    bannerScale: 0.8,
    bannerOrigin: '160% 0%',
    bannerShiftY: '28px',
    stats: { hp: 1453, crit: 66, atk: 135, def: 223 },
    resonanceSlots: [
      { label: '1/4', face: '/assets/memory/adolffull1.webp', full: '/assets/memory/adolf1.webp' },
      { label: '2/5', face: '/assets/memory/adolffull2.webp', full: '/assets/memory/adolf2.webp' },
      { label: '3/6', face: '/assets/memory/adolffull3.webp', full: '/assets/memory/adolf3.webp' },
    ],
    effects: {
      two: '스킬볼 사용 시 20%의 에너지를 추가 획득하고, 필살기에 필요한 에너지가 20% 감소한다.',
      four: '필살기 시전 시 추가 피해 효과가 15% 상승한다. 10초간 지속. 중첩 시 지속시간 초기화. 발동 후에는 상태이상 면역 상태가 되어, 피해 경감 효과가 20% 상승한다. 5초간 지속. 중첩 시 지속시간 초기화.',
    },
  },

  'shakespeare': {
    id: 'shakespeare',
    name: '셰익스피어',
    rarity: 6,
    banner: '/assets/memory/shakefull1.png',
    bannerObjectPosition: '0% 23%',
    bannerScale: 0.8,
    bannerOrigin: '160% 0%',
    bannerShiftY: '28px',
    stats: { hp: 1491, crit: 64, atk: 134, def: 223 },
    resonanceSlots: [
      { label: '1/4', face: '/assets/memory/shakefull1.png', full: '/assets/memory/shake1.png' },
      { label: '2/5', face: '/assets/memory/shakefull2.png', full: '/assets/memory/shake2.png' },
      { label: '3/6', face: '/assets/memory/shakefull3.png', full: '/assets/memory/shake3.png' },
    ],
    effects: {
      two: '전체 공격이 3%, 불속성 피해가 7% 증가한다.',
      four: '추가 피해 버프가 10% 상승한다. 공격 시 목표를 연소 상태로 만들며, 해당 기간에 목표의 불속성 저항이 15% 감소한다. 연소 상태는 8초간 지속되며, 동일 목표에 대해 10초의 쿨타임이 있다. 연소 상태의 목표를 공격할 시 폭발이 발생하여 600%의 불속성 피해를 입히며, 동일 목표에 대해 6초의 쿨타임이 있다.',
    },
  },

  'einsteina': {
    id: 'einsteina',
    name: '아인슈타나',
    rarity: 6,
    banner: '/assets/memory/einfull1.png',
    bannerObjectPosition: '0% 32%',
    bannerScale: 0.8,
    bannerOrigin: '160% 0%',
    bannerShiftY: '28px',
    stats: { hp: 1521, crit: 66, atk: 132, def: 219 },
    resonanceSlots: [
      { label: '1/4', face: '/assets/memory/einfull1.png', full: '/assets/memory/ein1.png' },
      { label: '2/5', face: '/assets/memory/einfull2.png', full: '/assets/memory/ein2.png' },
      { label: '3/6', face: '/assets/memory/einfull3.png', full: '/assets/memory/ein3.png' },
    ],
    effects: {
      two: 'QTE, 3체인 스킬이 목표와 관련된 원소 속성 저항을 8초간 15% 감소시킨다. 쿨타임 10초.',
      four: '피해를 받을 시 원소 속성 광환을 펼치고, 20%의 전체 원소 속성 저항을 획득한다. 5초간 지속. 광환 존재 시 입히는 전체 원소 속성 피해가 15% 증가한다. 쿨타임 8초.',
    },
  },

  'samantha': {
    id: 'samantha',
    name: '사만다',
    rarity: 5,
    banner: '/assets/memory/samfull1.png',
    bannerObjectPosition: '0% 20%',
    bannerScale: 0.8,
    bannerOrigin: '160% 0%',
    bannerShiftY: '28px',
    stats: { hp: 1208, crit: 51, atk: 107, def: 181 },
    resonanceSlots: [
      { label: '1/4', face: '/assets/memory/samfull1.png', full: '/assets/memory/sam1.png' },
      { label: '2/5', face: '/assets/memory/samfull2.png', full: '/assets/memory/sam2.png' },
      { label: '3/6', face: '/assets/memory/samfull3.png', full: '/assets/memory/sam3.png' },
    ],
    effects: {
      two: '치료 효과가 5% 증가하며, 다음 치료 시 목표의 전체 원소 속성 피해를 8% 증가시킨다. 4초간 지속, 쿨타임 5초.',
      four: '다음 치료 스킬 시전 시 원소 속성 광환을 남기며, 구역 내의 아군 유닛은 8%의 전체 원소 속성 피해와 5%의 전체 원소 속성 저항이 증가한다. 쿨타임 10초.',
    },
  },
};
