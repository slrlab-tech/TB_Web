import { defineStore } from 'pinia'

import members from './members.json'
import publications from './publications.json'
// TODO: extract all the data into json files
// call them internally(so no traffic) from cloud
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
      publications: publications as PublicationsInfo[],
    }
  },
})

interface MemberInfo {
  name: string
  position: string
  description: string
  image: string
}

interface PublicationsInfo {
  name: string
  year: string
  description: string
  image: string
  functions: { name: string }[]
}
