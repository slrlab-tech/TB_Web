import { defineStore } from 'pinia'

import members from './members.json'

export const useDataStore = defineStore('data', {
  state: () => {
    return {
      members: members as MemberInfo[],
      products: [] as unknown[],
      contacts: {
        'Phone number': '(852) 67715590',
        Email: 'info@tomorrowsbrain.com',
      },
      partners: [
        { image: 'partners/HKSTP.png', alt: 'logo 1', href: 'https://google.com' },
        { image: 'partners/TEC.png', alt: 'logo 2' },
      ],
    }
  },
})

interface MemberInfo {
  name: string
  position: string
  description: string
  image: string
}
