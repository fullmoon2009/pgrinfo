// /src/data/coatingData.ts
export type CoatingItem = {
  id: string
  char: string         
  type: 'normal' | 'special' | 'gacha'
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
  // 작망
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
      verticals: [
        '/assets/coatings/geiravornm1.png',
        '/assets/coatings/geiravornm2.png',
        '/assets/coatings/geiravornm3.png'
      ],
    },
  },





//   희성
{

    id: 'geiravor-special-02',
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

    id: 'geiravor-special-01',
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
    id: 'geiravor-normal',
    char: 'pianissimo',                      
    type: 'normal',
    name: '초기 시리즈',
    release: '2024-06-06',
    price: '',
    tag: '',
    images: {
      verticals: [
        '/assets/coatings/pianissimonm1.png',
        '/assets/coatings/pianissimonm2.png',
        '/assets/coatings/pianissimonm3.png'
      ],
    },
  },



  
]
