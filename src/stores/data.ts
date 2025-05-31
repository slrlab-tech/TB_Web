import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', {
  state: () => ({
    members: [] as MemberInfo[],
    publications: [] as PublicationsInfo[],
    contacts: {},
    partners: [],
    products: [],
    loaded: false,
  }),
  actions: {
    async fetchAll() {
      // Need to add TB_Web/ to the path if running in testing mode
      const [members, publications, data] = await Promise.all([
        fetch('/members.json').then((res) => res.json()),
        fetch('/publications.json').then((res) => res.json()),
        fetch('/data.json').then((res) => res.json()),
      ])
      this.members = members
      this.publications = publications
      this.contacts = data.contacts
      this.partners = data.partners
      this.products = data.products

      this.loaded = true
    },
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
