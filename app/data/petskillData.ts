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
        label: '그림자 추적∙불',
        kind: 'active',
        level: 5,
        desc:
          '임의로 기본 스킬볼 6개를 소모하면, 보조기 버튼이 활성화된다. 시전하면 소아가 목표를 향해 레이저를 발사하여 <span class="text-orange-400 font-semibold">불속성 피해</span>의 불속성 피해를 4회 입힌다.',
      },

      {
        img: '/assets/petskills/redwolfactive.webp',
        label: '달빛 사냥∙불',
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
        label: '정예 행진곡∙물리',
        kind: 'active',
        level: 5,
        desc:
          '임의로 기본 스킬볼 6개를 소모하면, 보조기 버튼이 활성화된다. 시전 시 설가가 목표에게 참격을 가해 <span class="text-orange-400 font-semibold">2050%</span>의 물리 피해를 1회 입힌다.',
      },

      {
        img: '/assets/petskills/speakeractive.webp',
        label: '광휘의 선율∙물리',
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


  crown: {
    level: 30,
    skills: [
      {
        img: '/assets/petskills/crownactive.webp',
        label: '구시대의 춤∙암흑',
        kind: 'active',
        level: 5,
        desc:
          '임의로 기본 스킬볼 6개를 소모하면, 보조기 버튼이 활성화된다. 시전하면 빌리가 공중으로 도약하여 목표를 사격해 <span class="text-orange-400 font-semibold">150%</span>의 암흑속성 피해를 9회 입힌다. 그 후 룰렛은 과부하로 폭발하여 <span class="text-orange-400 font-semibold">225%</span>의 암흑속성 피해를 9회 입힌다.',
      },
      
        {
        img: '/assets/petskills/crownactive.webp',
        label: '운명의 실린더∙암흑',
        kind: 'active',
        level: 5,
        desc:
          '임의로 기본 스킬볼 6개를 소모하면 보조기 버튼이 활성화된다. 시전하면 빌리가 공중에서 내려와 회전 룰렛을 소환하고 주위의 적 유닛을 끌어모아 <span class="text-orange-400 font-semibold">150%</span>의 암흑속성 피해를 9회 입힌다. 그 후 룰렛은 과부하로 폭발하여 <span class="text-orange-400 font-semibold">650%</span>의 암흑속성 피해를 1회 입힌다.',
      },

      {
        img: '/assets/petskills/crown5.webp',
        label: '현란한 조명',
        kind: 'passive',
        level: 5,
        desc:
          '빌리의 액티브 스킬 피해가 <span class="text-sky-400 font-semibold">70%</span> 증가한다.',
      },

      {
        img: '/assets/petskills/crown4.webp',
        label: '심취의 블루스',
        kind: 'passive',
        level: 5,
        desc: '장착한 캐릭터의 공격력이 <span class="text-sky-400 font-semibold">100</span> 증가한다.',
      },
      {
        img: '/assets/petskills/crown3.webp',
        label: '과잉 선물',
        kind: 'passive',
        level: 5,
        desc: '빌리가 액티브 스킬을 시전하면 장착한 캐릭터의 추가 피해 버프가 <span class="text-sky-400 font-semibold">5%</span> 상승한다. 8초간 지속. 중복 발동 시 지속 시간이 초기화된다.',
      },

      {
        img: '/assets/petskills/crown2.webp',
        label: '넘치는 행운',
        kind: 'passive',
        level: 5,
        desc: '장착한 캐릭터의 암흑속성 피해가 <span class="text-sky-400 font-semibold">10%</span> 상승하며, <span class="text-sky-400 font-semibold">수상한 흔적</span> 보유 시 번개속성 피해가 <span class="text-sky-400 font-semibold">10%</span> 상승한다.',
      },

      {
        img: '/assets/petskills/crown1.webp',
        label: '잘자, 로프라도스',
        kind: 'passive',
        level: 5,
        desc: '릴리스 · 데모니사가 빌리를 장착한 상태에서 <span class="text-sky-400 font-semibold">카니발 매치</span>를 시작하고 <span class="text-sky-400 font-semibold">어둠의 포옹</span> 또는 <span class="text-sky-400 font-semibold">신비로운 그림자</span>를 처음 시전할 시, 빌리를 소환해 협력 공격을 전개하고, <span class="text-sky-400 font-semibold">3000%</span>의 암흑속성 피해를 1회 입힌다. <span class="text-sky-400 font-semibold">꿈의 서막</span>의 기본 피해가 <span class="text-sky-400 font-semibold">75%</span> 상승한다. 카드 단계가 <span class="text-sky-400 font-semibold">C</span>/<span class="text-sky-400 font-semibold">B</span>/<span class="text-sky-400 font-semibold">A</span>/<span class="text-sky-400 font-semibold">S</span>/<span class="text-sky-400 font-semibold">SS</span>에 도달하면, 기본 피해가 추가로 <span class="text-sky-400 font-semibold">10%</span>/<span class="text-sky-400 font-semibold">20%</span>/<span class="text-sky-400 font-semibold">30%</span>/<span class="text-sky-400 font-semibold">40%</span>/<span class="text-sky-400 font-semibold">50%</span> 상승한다.',
      }
    ],
  },

  pandora: {
    level: 30,
    skills: [
      {
        img: '/assets/petskills/pandoraactive.webp',
        label: '혜성 궤적∙공허',
        kind: 'active',
        level: 5,
        desc:
          '임의로 기본 스킬볼 6개를 소모하면, 보조기 버튼이 활성화된다. 시전하면 서능이 목표를 향해 돌진하여 <span class="text-orange-400 font-semibold">2000%</span>의 공허속성 피해를 1회 입힌다.',
      },
      
        {
        img: '/assets/petskills/pandoraactive.webp',
        label: '태양의 쇠락∙공허',
        kind: 'active',
        level: 5,
        desc:
          '임의로 기본 스킬볼 6개를 소모하면, 보조기 버튼이 활성화된다. 시전하면 서능이 주위의 적 유닛을 끌어모으고 아래로 내리찍어 <span class="text-orange-400 font-semibold">1800%</span>의 공허속성 피해를 1회 입힌다.',
      },

      {
        img: '/assets/petskills/pandora5.webp',
        label: '순행 섬광',
        kind: 'passive',
        level: 5,
        desc:
          '서능의 액티브 스킬 피해가 <span class="text-sky-400 font-semibold">70%</span> 증가한다.',
      },

      {
        img: '/assets/petskills/pandora4.webp',
        label: '소멸 배열',
        kind: 'passive',
        level: 5,
        desc: '장착한 캐릭터의 공격력이 <span class="text-sky-400 font-semibold">100</span> 증가한다.',
      },
      {
        img: '/assets/petskills/pandora3.webp',
        label: '유성 소멸',
        kind: 'passive',
        level: 5,
        desc: '서능이 액티브 스킬을 시전하면 장착한 캐릭터의 추가 피해 버프가 <span class="text-sky-400 font-semibold">5%</span> 상승한다. 8초간 지속. 중복 발동 시 지속 시간이 초기화된다.',
      },

      {
        img: '/assets/petskills/pandora2.webp',
        label: '운명 통합',
        kind: 'passive',
        level: 5,
        desc: '장착한 캐릭터의 공허속성 피해가 <span class="text-sky-400 font-semibold">10%</span> 상승하며, <span class="text-sky-400 font-semibold">수상한 흔적</span> 보유 시 번개속성 피해가 <span class="text-sky-400 font-semibold">10%</span> 상승한다.',
      },

      {
        img: '/assets/petskills/pandora1.webp',
        label: '별의 귀환',
        kind: 'passive',
        level: 5,
        desc: '이스마엘·환일이 서능을 장착한 상태에서 <span class="text-sky-400 font-semibold">흐릿한 잔상</span> 4단계 시전 시, 서능을 소환하여 협력 공격을 진행하고 <span class="text-sky-400 font-semibold">500%</span>의 공허속성 피해를 6회 입힌다. <span class="text-sky-400 font-semibold">붕괴 각인</span> 획득 시, 5초간 자신의 공격력이 <span class="text-sky-400 font-semibold">40%</span> 상승한다. 중복 발동 시 지속 시간이 초기화된다.',
      }
    ],
  },


}
