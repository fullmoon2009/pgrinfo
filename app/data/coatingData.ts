export type CoatingItem = {
  id: string
  char: string
  type: 'normal' | 'special' | 'gacha' | 'dorm'
  name: string
  release: string
  price: string
  tag?: string
  images: {
    verticals?: string[]
    banner?: string
    portraits?: string[]
    fullBody?: string
    long?: string
  }
}

export const coatingData: CoatingItem[] = [
  // ===== 작망 (geiravor)
  {
    id: 'geiravor-special-01',
    char: 'geiravor',
    type: 'special',
    name: '불꽃과 고독의 왕관',
    release: '2025-06-13',
    price: '168 레인보우 카드',
    tag: '특수 코팅',
    images: {
      banner: '/assets/coatings/geiravorspcoatbg.png',
      portraits: [
        '/assets/coatings/geiravorspcoat1.png',
        '/assets/coatings/geiravorspcoatw1.png',
      ],
      fullBody: '/assets/coatings/geiravorspcoats1.png',
      long: '/assets/coatings/geiravorspcoatl1.png'
    },
  },
  {
    id: 'geiravor-normal',
    char: 'geiravor',
    type: 'normal',
    name: '초기 시리즈',
    release: '2024-08-15',
    price: '',
    tag: '',
    images: {
      banner: '/assets/coatings/geiravornmbg.png',
      verticals: [
        '/assets/coatings/geiravornm1.png',
        '/assets/coatings/geiravornm2.png',
        '/assets/coatings/geiravornm3.png'
      ],
    },
  },

  // ===== 희성 (pianissimo)
  {
    id: 'pianissimo-gacha-02',
    char: 'pianissimo',
    type: 'gacha',
    name: '운명의 실타래',
    release: '2025-08-26',
    price: '500 레인보우 카드',
    tag: '가챠 코팅',
    images: {
      banner: '/assets/coatings/pianissimospcoatbg2.jpg',
      portraits: [
        '/assets/coatings/pianissimospcoat2.png',
        '/assets/coatings/pianissimospcoatw2.png',
      ],
      fullBody: '/assets/coatings/pianissimospcoats2.png',
      long: '/assets/coatings/pianissimospcoatl2.jpg'
    },
  },
  {
    id: 'pianissimo-special-01',
    char: 'pianissimo',
    type: 'special',
    name: '검은 현의 운율',
    release: '2025-06-06',
    price: '168 레인보우 카드',
    tag: '특수 코팅',
    images: {
      banner: '/assets/coatings/pianissimospcoatbg1.png',
      portraits: [
        '/assets/coatings/pianissimospcoat1.png',
        '/assets/coatings/pianissimospcoatw1.png',
      ],
      fullBody: '/assets/coatings/pianissimospcoats1.png',
      long: '/assets/coatings/pianissimospcoatl1.jpg'
    },
  },
  {
    id: 'pianissimo-normal',
    char: 'pianissimo',
    type: 'normal',
    name: '초기 시리즈',
    release: '2024-06-06',
    price: '',
    tag: '',
    images: {
      banner: '/assets/coatings/pianissimonmbg.jpeg',
      verticals: [
        '/assets/coatings/pianissimonm1.png',
        '/assets/coatings/pianissimonm2.png',
        '/assets/coatings/pianissimonm3.png'
      ],
    },
  },

  // ===== 데모니사 (daemonissa)
  {
    id: 'daemonissa-special-01',          
    char: 'daemonissa',
    type: 'special',
    name: '팜므 파탈',
    release: '2025-06-10',
    price: '168 레인보우 카드',
    tag: '특수 코팅',
    images: {
      banner: '/assets/coatings/daemonissaspcoatbg1.jpg',
      portraits: [
        '/assets/coatings/daemonissaspcoat1.png',
        '/assets/coatings/daemonissaspcoatw1.png',
      ],
      fullBody: '/assets/coatings/daemonissaspcoats1.png',
      long: '/assets/coatings/daemonissaspcoatl1.jpg'
    },
  },
  {
    id: 'daemonissa-dorm-01',             
    char: 'daemonissa',
    type: 'dorm',
    name: '환상의 신기루',
    release: '2025-06-06',
    price: '숙소 코인',
    tag: '숙소 코팅',
    images: {
      banner: '/assets/coatings/daemonissadormcoatbg1.jpg',
      portraits: [
        '/assets/coatings/daemonissadormcoat1.png',
        '/assets/coatings/daemonissadormcoatw1.png',
      ],
      fullBody: '/assets/coatings/daemonissadormcoats1.png',
    },
  },
  {
    id: 'daemonissa-normal',
    char: 'daemonissa',
    type: 'normal',
    name: '초기 시리즈',
    release: '2024-06-06',
    price: '',
    tag: '',
    images: {
      banner: '/assets/coatings/daemonissanmbg.jpg',
      verticals: [
        '/assets/coatings/daemonissanm1.png',
        '/assets/coatings/daemonissanm2.png',
        '/assets/coatings/daemonissanm3.png'
      ],
    },
  },

  // ===== 환일 (parhelion)
  {
    id: 'parhelion-special-02',          
    char: 'parhelion',
    type: 'special',
    name: '영혼의 제례',
    release: '2025-07-15',
    price: '168 레인보우 카드',
    tag: '특수 코팅',
    images: {
      banner: '/assets/coatings/parhelionspcoatbg2.png',
      portraits: [
        '/assets/coatings/parhelionspcoat2.png',
        '/assets/coatings/parhelionspcoatw2.png',
      ],
      fullBody: '/assets/coatings/parhelionspcoats2.png',
      long: '/assets/coatings/parhelionspcoatl2.jpg'
    },
  },
  {
    id: 'parhelion-special-01',             
    char: 'parhelion',
    type: 'special',
    name: '성스러운 균형의 날개',
    release: '2025-04-28',
    price: '168 레인보우 카드',
    tag: '특수 코팅',
    images: {
      banner: '/assets/coatings/parhelionspcoatbg1.png',
      portraits: [
        '/assets/coatings/parhelionspcoat1.png',
        '/assets/coatings/parhelionspcoatw1.png',
      ],
      fullBody: '/assets/coatings/parhelionspcoats1.png',
      long: '/assets/coatings/parhelionspcoatl1.png'
    },
  },
  {
    id: 'parhelion-normal',
    char: 'parhelion',
    type: 'normal',
    name: '초기 시리즈',
    release: '2024-04-28',
    price: '',
    tag: '',
    images: {
      banner: '/assets/coatings/parhelionnmbg.png',
      verticals: [
        '/assets/coatings/parhelionnm1.png',
        '/assets/coatings/parhelionnm2.png',
        '/assets/coatings/parhelionnm3.png'
      ],
    },
  },

  // ===== 망성 (startrail)
  {
    id: 'startrail-special-02',          
    char: 'startrail',
    type: 'special',
    name: '스타워드 드래곤',
    release: '2025-06-13',
    price: '168 레인보우 카드',
    tag: '특수 코팅',
    images: {
      banner: '/assets/coatings/startrailspcoatbg2.png',
      portraits: [
        '/assets/coatings/startrailspcoat2.png',
        '/assets/coatings/startrailspcoatw2.png',
      ],
      fullBody: '/assets/coatings/startrailspcoats2.png',
      long: '/assets/coatings/startrailspcoatl2.png'
    },
  },
  {
    id: 'startrail-special-01',             
    char: 'startrail',
    type: 'special',
    name: '캔디 라이더',
    release: '2025-03-24',
    price: '168 레인보우 카드',
    tag: '특수 코팅',
    images: {
      banner: '/assets/coatings/startrailspcoatbg1.png',
      portraits: [
        '/assets/coatings/startrailspcoat1.png',
        '/assets/coatings/startrailspcoatw1.png',
      ],
      fullBody: '/assets/coatings/startrailspcoats1.png',
      long: '/assets/coatings/startrailspcoatl1.png'
    },
  },
  {
    id: 'startrail-normal',
    char: 'startrail',
    type: 'normal',
    name: '초기 시리즈',
    release: '2024-03-24',
    price: '',
    tag: '',
    images: {
      banner: '/assets/coatings/startrailnmbg.png',
      verticals: [
        '/assets/coatings/startrailnm1.png',
        '/assets/coatings/startrailnm2.png',
        '/assets/coatings/startrailnm3.png'
      ],
    },
  },

  // ===== 서염 (pyroath)
  {
    id: 'pyroath-special-02',          
    char: 'pyroath',
    type: 'special',
    name: '청해의 유광',
    release: '2025-08-26',
    price: '168 레인보우 카드',
    tag: '특수 코팅',
    images: {
      banner: '/assets/coatings/pyroathspcoatbg3.jpg',
      portraits: [
        '/assets/coatings/pyroathspcoat3.png',
        '/assets/coatings/pyroathspcoatw3.png',
      ],
      fullBody: '/assets/coatings/pyroathspcoats3.png',
      long: '/assets/coatings/pyroathspcoatl3.jpg'
    },
  },

  {
    id: 'pyroath-gacha-01',             
    char: 'pyroath',
    type: 'gacha',
    name: '여명의 약속',
    release: '2025-06-06',
    price: '500 레인보우 카드',
    tag: '가챠 코팅',
    images: {
      banner: '/assets/coatings/pyroathspcoatbg2.jpg',
      portraits: [
        '/assets/coatings/pyroathspcoat2.png',
        '/assets/coatings/pyroathspcoatw2.png',
      ],
      fullBody: '/assets/coatings/pyroathspcoats2.png',
      long: '/assets/coatings/pyroathspcoatl2.jpg'
    },
  },

  {
    id: 'pyroath-special-01',             
    char: 'pyroath',
    type: 'special',
    name: '빛의 찬가',
    release: '2025-03-17',
    price: '168 레인보우 카드',
    tag: '특수 코팅',
    images: {
      banner: '/assets/coatings/pyroathspcoatbg1.jpg',
      portraits: [
        '/assets/coatings/pyroathspcoat1.png',
        '/assets/coatings/pyroathspcoatw1.png',
      ],
      fullBody: '/assets/coatings/pyroathspcoats1.png',
      long: '/assets/coatings/pyroathspcoatl1.jpg'
    },
  },
  {
    id: 'pyroath-normal',
    char: 'pyroath',
    type: 'normal',
    name: '초기 시리즈',
    release: '2024-03-17',
    price: '',
    tag: '',
    images: {
      banner: '/assets/coatings/pyroathnmbg.png',
      verticals: [
        '/assets/coatings/pyroathnm1.png',
        '/assets/coatings/pyroathnm2.png',
        '/assets/coatings/pyroathnm3.png'
      ],
    },
  },

  // ===== 루시드 (lucid)
  {
    id: 'lucid-dorm-01',             
    char: 'lucid',
    type: 'dorm',
    name: '엄한 속의 추적자',
    release: '2025-02-13',
    price: '숙소 코인',
    tag: '숙소 코팅',
    images: {
      banner: '/assets/coatings/luciddormcoatbg1.jpg',
      portraits: [
        '/assets/coatings/luciddormcoat1.png',
        '/assets/coatings/luciddormcoatw1.png',
      ],
      fullBody: '/assets/coatings/luciddormcoats1.png',
      long: '/assets/coatings/luciddormcoatl1.jpg'
    },
  },
  {
    id: 'lucid-normal',
    char: 'lucid',
    type: 'normal',
    name: '초기 시리즈',
    release: '2024-02-13',
    price: '',
    tag: '',
    images: {
      banner: '/assets/coatings/lucidnmbg.jpg',
      verticals: [
        '/assets/coatings/lucidnm1.png',
        '/assets/coatings/lucidnm2.png',
        '/assets/coatings/lucidnm3.png'
      ],
    },
  },

  // ===== 단심 (solacetune)
  {
    id: 'solacetune-special-03',             
    char: 'solacetune',
    type: 'special',
    name: '봄날 선율',
    release: '2025-06-06',
    price: '168 레인보우 카드',
    tag: '특수 코팅',
    images: {
      banner: '/assets/coatings/solacetunespcoatbg3.jpg',
      portraits: [
        '/assets/coatings/solacetunespcoat3.png',
        '/assets/coatings/solacetunespcoatw3.png',
      ],
      fullBody: '/assets/coatings/solacetunespcoats3.png',
      long: '/assets/coatings/solacetunespcoatl3.jpg'
    },
  },
  {
    id: 'solacetune-special-02',             
    char: 'solacetune',
    type: 'special',
    name: '아련한 푸른빛',
    release: '2025-03-17',
    price: '168 레인보우 카드',
    tag: '특수 코팅',
    images: {
      banner: '/assets/coatings/solacetunespcoatbg2.jpg',
      portraits: [
        '/assets/coatings/solacetunespcoat2.png',
        '/assets/coatings/solacetunespcoatw2.png',
      ],
      fullBody: '/assets/coatings/solacetunespcoats2.png',
      long: '/assets/coatings/solacetunespcoatl2.jpg'
    },
  },
  {
    id: 'solacetune-special-01',             
    char: 'solacetune',
    type: 'special',
    name: '봄날 선율',
    release: '2025-02-06',
    price: '168 레인보우 카드',
    tag: '특수 코팅',
    images: {
      banner: '/assets/coatings/solacetunespcoatbg1.png',
      portraits: [
        '/assets/coatings/solacetunespcoat1.png',
        '/assets/coatings/solacetunespcoatw1.png',
      ],
      fullBody: '/assets/coatings/solacetunespcoats1.png',
      long: '/assets/coatings/solacetunespcoatl1.jpg'
    },
  },
  {
    id: 'solacetune-normal',
    char: 'solacetune',
    type: 'normal',
    name: '초기 시리즈',
    release: '2025-02-06',
    price: '',
    tag: '',
    images: {
      banner: '/assets/coatings/solacetunenmbg.jpeg',
      verticals: [
        '/assets/coatings/solacetunenm1.png',
        '/assets/coatings/solacetunenm2.png',
        '/assets/coatings/solacetunenm3.png'
      ],
    },
  },

  // ===== 계명 (shukra)
  {
    id: 'shukra-special-02',             
    char: 'shukra',
    type: 'special',
    name: '희곡의 서막',
    release: '2025-05-05',
    price: '168 레인보우 카드',
    tag: '특수 코팅',
    images: {
      banner: '/assets/coatings/shukraspcoatbg2.jpg',
      portraits: [
        '/assets/coatings/shukraspcoat2.png',
        '/assets/coatings/shukraspcoatw2.png',
      ],
      fullBody: '/assets/coatings/shukraspcoats2.png',
      long: '/assets/coatings/shukraspcoatl2.jpg'
    },
  },
  {
    id: 'shukra-special-01',             
    char: 'shukra',
    type: 'special',
    name: '불멸의 깃털',
    release: '2024-11-15',
    price: '168 레인보우 카드',
    tag: '특수 코팅',
    images: {
      banner: '/assets/coatings/shukraspcoatbg1.jpg',
      portraits: [
        '/assets/coatings/shukraspcoat1.png',
        '/assets/coatings/shukraspcoatw1.png',
      ],
      fullBody: '/assets/coatings/shukraspcoats1.png',
    },
  },
  {
    id: 'shukra-normal',
    char: 'shukra',
    type: 'normal',
    name: '초기 시리즈',
    release: '2024-11-15',
    price: '',
    tag: '',
    images: {
      banner: '/assets/coatings/shukranmbg.png',
      verticals: [
        '/assets/coatings/shukranm1.png',
        '/assets/coatings/shukranm2.png',
        '/assets/coatings/shukranm3.png'
      ],
    },
  },


  // ===== 종언 (oblivion)
  {
    id: 'oblivion-gacha-01',             
    char: 'oblivion',
    type: 'gacha',
    name: '타락한 달빛',
    release: '2025-04-28',
    price: '350 레인보우 카드',
    tag: '가챠 코팅',
    images: {
      banner: '/assets/coatings/oblivionspcoatbg3.png',
      portraits: [
        '/assets/coatings/oblivionspcoat3.png',
        '/assets/coatings/oblivionspcoatw3.png',
      ],
      fullBody: '/assets/coatings/oblivionspcoats3.png',
      long: '/assets/coatings/oblivionspcoatl3.png'
    },
  },
  {
    id: 'oblivion-special-02',             
    char: 'oblivion',
    type: 'special',
    name: '푸른빛 물결의 응시',
    release: '2025-03-17',
    price: '168 레인보우 카드',
    tag: '특수 코팅',
    images: {
      banner: '/assets/coatings/oblivionspcoatbg2.png',
      portraits: [
        '/assets/coatings/oblivionspcoat2.png',
        '/assets/coatings/oblivionspcoatw2.png',
      ],
      fullBody: '/assets/coatings/oblivionspcoats2.png',
      long: '/assets/coatings/oblivionspcoatl2.png'
    },
  },
  {
    id: 'oblivion-special-01',             
    char: 'oblivion',
    type: 'special',
    name: '한겨울의 달빛',
    release: '2024-12-23',
    price: '168 레인보우 카드',
    tag: '특수 코팅',
    images: {
      banner: '/assets/coatings/oblivionspcoatbg1.png',
      portraits: [
        '/assets/coatings/oblivionspcoat1.png',
        '/assets/coatings/oblivionspcoatw1.png',
      ],
      fullBody: '/assets/coatings/oblivionspcoats1.png',
      long: '/assets/coatings/oblivionspcoatl1.jpg'
    },
  },
  {
    id: 'oblivion-normal',
    char: 'oblivion',
    type: 'normal',
    name: '초기 시리즈',
    release: '2024-12-23',
    price: '',
    tag: '',
    images: {
      banner: '/assets/coatings/oblivionnmbg.png',
      verticals: [
        '/assets/coatings/oblivionnm1.png',
        '/assets/coatings/oblivionnm2.png',
        '/assets/coatings/oblivionnm3.png'
      ],
    },
  },

]
