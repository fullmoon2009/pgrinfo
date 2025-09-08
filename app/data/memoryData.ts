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
      { label: '2/5', face: '/assets/memory/davinci2.png', full: '/assets/memorysets/davinci/full_2.png' },
      { label: '3/6', face: '/assets/memory/davinci3.png', full: '/assets/memorysets/davinci/full_3.png' },
    ],
    effects: {
      two: '치료 효과가 10% 증가하며, 치료한 목표의 전체 원소 속성 피해, 전체 원소 속성 저항을 10% 증가시킨다. 5초간 지속, 쿨타임 8초.',
      four: '치료 효과를 시전할 때마다 무인의 에너지 충전을 진행한다',
    },
  },
  
};
