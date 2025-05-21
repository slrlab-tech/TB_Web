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
    }
  },
})

interface MemberInfo {
  name: string
  position: string
  description: string
  image: string
}
