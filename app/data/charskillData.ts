export type SkillTier = 'orb' | 'active' | 'passive'

export type SkillDetail = {
  title: string
  levelText?: string            
  badges?: { text: string; cls?: string }[]  
  body: string[]                
}

export type SkillItem = {
  id: string
  tier: SkillTier
  name: string
  icon: string                  
  subText?: string              
  accent?: string               
  detail: SkillDetail           
}

export type SkillSection = { label: string; tier: SkillTier; items: SkillItem[] }


export type CharSkillMap = Record<string, SkillSection[]>

export const charSkillData: CharSkillMap = {
  geiravor: [
    {
      label: '스킬볼',
      tier: 'orb',
      items: [
        {
          id: 'flame_slasher',
          tier: 'orb',
          name: '불꽃의 절단',
          icon: '/assets/skillball/geiravorred.png',
          subText: '적색 스킬볼',
          accent: 'ring-1 ring-rose-400/40 bg-white/5',
          detail: {
            title: '불꽃의 절단',
            levelText: 'Level 19',
            badges: [
              { text: '적색 스킬볼', cls: 'bg-red-500/15 border-red-400/30 text-red-300' },
            ],
            body: [
              `<span class="text-[17px] font-bold">솟구치는 화염-<span class="text-blue-400 font-semibold">솟구치는 화염 연계 미진입+적색 스킬볼 터치</span></span><br>
               베라 · 작망이 장창을 휘둘러 불속성 피해를 입히고 <span class="text-red-400 font-semibold">솟구치는 화염 연계</span>에 진입한다.`,
               `-소모한 스킬볼 개수에 따라 <span class="text-red-400 font-semibold">205.88%</span>/<span class="text-red-400 font-semibold">411.76%</span>/<span class="text-red-400 font-semibold">617.65%</span>의 불속성 피해를 입힌다.`,
              `-소모한 스킬볼 개수에 따라 최대 HP의 <span class="text-red-400 font-semibold">2%</span>/<span class="text-red-400 font-semibold">5%</span>/<span class="text-red-400 font-semibold">10%</span>에 해당하는 HP를 회복한다.`,
              `-적색 스킬볼 1세트마다 <span class="text-red-400 font-semibold">단절의 불꽃</span> 지속 시간이 <span class="text-red-400 font-semibold">1초</span> 연장되며, <span class="text-red-400 font-semibold">단절의 불꽃</span>의 최대 지속 시간은 <span class="text-red-400 font-semibold">10초</span>까지이다.`,
              `-적색 스킬볼 1개당 <span class="text-red-400 font-semibold">10 불꽃 재연</span>을 획득하며, <span class="text-red-400 font-semibold">불꽃 재연</span>의 상한은 <span class="text-red-400 font-semibold">60</span>이다. <span class="text-red-400 font-semibold">영혼의 불길</span>, <span class="text-red-400 font-semibold">창날의 춤</span>, <span class="text-red-400 font-semibold">살육의 참격</span> 상태에서 <span class="text-red-400 font-semibold">불꽃 재연</span>을 획득할 수 없다.`,
              `-베라·작망이 <span class="text-red-400 font-semibold">징계의 침몰</span>을 보유하고 있으면, <span class="text-red-400 font-semibold">102.94%</span>/<span class="text-red-400 font-semibold">205.88%</span>/<span class="text-red-400 font-semibold">308.82%</span>의 암연 피해를 입히고, 적색 스킬볼 <span class="text-red-400 font-semibold">1</span>개를 소모할 때마다 <span class="text-red-400 font-semibold">200</span> 암연 축적치를 획득한다.<br><br><br>
              <span class="text-[17px] font-bold">파동의 화염-<span class="text-blue-400 font-semibold">솟구치는 화염 연계 상태+적색 스킬볼 터치</span></span><br>
              베라·작망이 장창을 휘둘러 적을 계속 공격하여, 불속성 피해를 입히고 <span class="text-red-400 font-semibold">솟구치는 화염 연계</span> 상태를 종료한다.`,
              `-소모한 스킬볼 개수에 따라 <span class="text-red-400 font-semibold">411.76%</span>/<span class="text-red-400 font-semibold">823.53%</span>/<span class="text-red-400 font-semibold">1235.29%</span>의 불속성 피해를 입힌다.`,
              `-소모한 스킬볼 개수에 따라 최대 HP의 <span class="text-red-400 font-semibold">2%</span>/<span class="text-red-400 font-semibold">5%</span>/<span class="text-red-400 font-semibold">10%</span>에 해당하는 HP를 회복한다.`,
              `-적색 스킬볼 1세트마다 <span class="text-red-400 font-semibold">단절의 불꽃</span> 지속 시간이 <span class="text-red-400 font-semibold">1초</span> 연장되며, <span class="text-red-400 font-semibold">단절의 불꽃</span>의 최대 지속 시간은 <span class="text-red-400 font-semibold">10초</span>까지이다.`,
              `-적색 스킬볼 1개당 <span class="text-red-400 font-semibold">10 불꽃 재연</span>을 획득하며, <span class="text-red-400 font-semibold">불꽃 재연</span>의 상한은 <span class="text-red-400 font-semibold">60</span>이다.`,
              `-베라·작망이 <span class="text-red-400 font-semibold">징계의 침몰</span>을 보유하고 있으면, <span class="text-red-400 font-semibold">102.94%</span>/<span class="text-red-400 font-semibold">205.88%</span>/<span class="text-red-400 font-semibold">308.82%</span>의 암연 피해를 입히고, 적색 스킬볼 <span class="text-red-400 font-semibold">1</span>개를 소모할 때마다 <span class="text-red-400 font-semibold">200</span> 암연 축적치를 획득한다.`
            ],
          },
        },
        {
          id: 'flame_contract',
          tier: 'orb',
          name: '불의 계약',
          icon: '/assets/skillball/geiravoryellow.png',
          subText: '황색 스킬볼',
          accent: 'ring-1 ring-amber-300/40 bg-white/5',
          detail: {
            title: '불의 계약',
            levelText: 'Level 19',
            badges: [{ text: '황색 스킬볼', cls: 'bg-amber-400/15 border-amber-400/30 text-amber-200' }],
            body: [
              `황오브 사용 시 추가 피해 및 게이지 보정.`,
              `연계 중 발동하면 <span class="text-amber-200">점화 중첩</span>을 더 빠르게 쌓음.`,
            ],
          },
        },
        {
          id: 'blue_orb',
          tier: 'orb',
          name: '찬란한 불빛',
          icon: '/assets/skillball/geiravorblue.png',
          subText: '청색 스킬볼',
          accent: 'ring-1 ring-sky-300/40 bg-white/5',
          detail: {
            title: '찬란한 불빛',
            levelText: 'Level 19',
            badges: [{ text: '청색 스킬볼', cls: 'bg-sky-400/15 border-sky-400/30 text-sky-200' }],
            body: [`푸른 오브로 적을 밀쳐내고 <span class="text-sky-200">경직</span>을 유발.`],
          },
        },
      ],
    },
    {
      label: '액티브 스킬',
      tier: 'active',
      items: [
        {
          id: 'basic_attack',
          tier: 'active',
          name: '화염 격류',
          icon: '/assets/skillball/geiravorbasic.png',
          subText: '일반 공격',
          accent: 'ring-1 ring-white/20 bg-white/5',
          detail: {
            title: '화염 격류',
            levelText: 'Level 19',
            badges: [{ text: '일반 공격', cls: 'bg-white/10 border-white/20' }],
            body: [
              `연속 공격으로 적에게 불속성 피해를 입힌다.`,
              `콤보 중 <span class="text-rose-300">적색 오브</span> 소비 시 추가타 발동.`,
            ],
          },
        },
        {
          id: 'signature',
          tier: 'active',
          name: '영원한 불길',
          icon: '/assets/skillball/geiravorult.png',
          subText: '필살기',
          accent: 'ring-1 ring-rose-300/40 bg-white/5',
          detail: {
            title: '영원한 불길',
            levelText: 'Level 19',
            badges: [{ text: '필살기', cls: 'bg-rose-500/15 border-rose-400/30 text-rose-200' }],
            body: [
              `게이지를 소모해 강력한 일격을 가한다.`,
              `명중 시 <span class="text-rose-300">단장의 불꽃</span> 중첩 증가.`,
            ],
          },
        },
        {
          id: 'qte',
          tier: 'active',
          name: '불꽃의 그림자',
          icon: '/assets/skillball/qte.webp',
          subText: 'QTE',
          accent: 'ring-1 ring-rose-300/40 bg-white/5',
          detail: {
            title: '불꽃의 그림자',
            levelText: 'Level 19',
            badges: [{ text: 'QTE', cls: 'bg-white-500/15 border-white-400/30 text-white-200' }],
            body: [
              `게이지를 소모해 강력한 일격을 가한다.`,
              `명중 시 <span class="text-rose-300">단장의 불꽃</span> 중첩 증가.`,
            ],
          },
        },
        {
          id: 'qte',
          tier: 'active',
          name: '증폭형',
          icon: '/assets/skillball/geiravorcore.png',
          subText: '직업 스킬',
          accent: 'ring-1 ring-rose-300/40 bg-white/5',
          detail: {
            title: '증폭형',
            levelText: 'Level 19',
            badges: [{ text: '직업 스킬', cls: 'bg-white-500/15 border-white-400/30 text-white-200' }],
            body: [
              `게이지를 소모해 강력한 일격을 가한다.`,
              `명중 시 <span class="text-rose-300">단장의 불꽃</span> 중첩 증가.`,
            ],
          },
        },
        {
          id: 'qte',
          tier: 'active',
          name: '최종 해방',
          icon: '/assets/skillball/haebang.webp',
          subText: '최종 해방',
          accent: 'ring-1 ring-rose-300/40 bg-white/5',
          detail: {
            title: '최종 해방',
            levelText: 'Level 1',
            badges: [{ text: '최종 해방', cls: 'bg-white-500/15 border-white-400/30 text-white-200' }],
            body: [
              `게이지를 소모해 강력한 일격을 가한다.`,
              `명중 시 <span class="text-rose-300">단장의 불꽃</span> 중첩 증가.`,
            ],
          },
        },
      ],
    },
    {
      label: '패시브 스킬',
      tier: 'passive',
      items: [
        {
          id: 'core_passive',
          tier: 'passive',
          name: '심판의 불꽃',
          icon: '/assets/skillball/geiravorcore.png',
          subText: '코어 패시브',
          accent: 'ring-1 ring-white/20 bg-white/5',
          detail: {
            title: '심판의 불꽃',
            levelText: 'Level 19',
            badges: [{ text: '코어 패시브', cls: 'bg-white/10 border-white/20' }],
            body: [
              `코어 게이지가 가득 차면 다음 <span class="text-rose-300">서명기</span>의 피해가 증가.`,
            ],
          },
        },
        {
          id: 'leader',
          tier: 'passive',
          name: '대장·불꽃의 징벌',
          icon: '/assets/skillball/geiravorleader.webp',
          subText: '대장 스킬',
          accent: 'ring-1 ring-fuchsia-300/40 bg-white/5',
          detail: {
            title: '대장·불꽃의 징벌',
            levelText: 'Level 1',
            badges: [{ text: '대장 스킬', cls: 'bg-red-500/15 border-red-400/30 text-red-200' }],
            body: [
              `파티 불속성 피해 <span class="font-semibold">+10%</span>.`,
              `자신의 치명타 확률 <span class="font-semibold">+5%</span>.`,
            ],
          },
        },
        {
          id: 'core_passive',
          tier: 'passive',
          name: '꺼지지 않는 불길',
          icon: '/assets/skillball/geiravors.webp',
          subText: 'SS 승급 패시브',
          accent: 'ring-1 ring-white/20 bg-white/5',
          detail: {
            title: '꺼지지 않는 불길',
            levelText: 'Level 2',
            badges: [{ text: 'SS 승급 패시브', cls: 'bg-red-500/15 border-red-400/30 text-red-200' }],
            body: [
              `코어 게이지가 가득 차면 다음 <span class="text-rose-300">서명기</span>의 피해가 증가.`,
            ],
          },
        },
        {
          id: 'core_passive',
          tier: 'passive',
          name: '화염의 울림',
          icon: '/assets/skillball/geiravorss.webp',
          subText: 'SSS 승급 패시브',
          accent: 'ring-1 ring-white/20 bg-white/5',
          detail: {
            title: '화염의 울림',
            levelText: 'Level 2',
            badges: [{ text: 'SSS 승급 패시브', cls: 'bg-amber-400/15 border-amber-400/30 text-amber-200' }],
            body: [
              `코어 게이지가 가득 차면 다음 <span class="text-rose-300">서명기</span>의 피해가 증가.`,
            ],
          },
        },
        {
          id: 'core_passive',
          tier: 'passive',
          name: '붉은 불꽃의 각성',
          icon: '/assets/skillball/geiravorsss.webp',
          subText: 'SSS+ 승급 패시브',
          accent: 'ring-1 ring-white/20 bg-white/5',
          detail: {
            title: '붉은 불꽃의 각성',
            levelText: 'Level 3',
            badges: [{ text: 'SSS+ 승급 패시브', cls: 'bg-red-500/15 border-red-400/30 text-red-300' }],
            body: [
              `코어 게이지가 가득 차면 다음 <span class="text-rose-300">서명기</span>의 피해가 증가.`,
            ],
          },
        },
      ],
    },
  ],
}
