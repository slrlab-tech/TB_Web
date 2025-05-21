import { defineStore } from 'pinia'

import members from './members.json'

export const useDataStore = defineStore('data', {
  state: () => {
    return {
      members: members as MemberInfo[],
      products: [] as unknown[],
    }
  },
})

interface MemberInfo {
  name: string
  position: string
  description: string
  image: string
}
