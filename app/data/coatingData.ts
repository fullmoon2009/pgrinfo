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
      banner: '/assets/coatings/pianissimonmbg.jpg',
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
    name: '운명의 실타래',
    release: '2025-08-26',
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
    release: '2025-08-26',
    price: '168 레인보우 카드',
    tag: '특수 코팅',
    images: {
      banner: '/assets/coatings/parhelionspcoatbg2.jpg',
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
    release: '2025-06-06',
    price: '168 레인보우 카드',
    tag: '특수 코팅',
    images: {
      banner: '/assets/coatings/parhelionspcoatbg1.jpg',
      portraits: [
        '/assets/coatings/parhelionspcoat1.png',
        '/assets/coatings/parhelionspcoatw1.png',
      ],
      fullBody: '/assets/coatings/parhelionspcoats1.png',
    },
  },
  {
    id: 'parhelion-normal',
    char: 'parhelion',
    type: 'normal',
    name: '초기 시리즈',
    release: '2024-06-06',
    price: '',
    tag: '',
    images: {
      banner: '/assets/coatings/parhelionnmbg.jpg',
      verticals: [
        '/assets/coatings/parhelionnm1.png',
        '/assets/coatings/parhelionnm2.png',
        '/assets/coatings/parhelionnm3.png'
      ],
    },
  },

]
