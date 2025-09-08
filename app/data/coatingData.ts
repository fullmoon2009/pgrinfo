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
]
