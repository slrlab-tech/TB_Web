import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', {
  state: () => ({
    members: [] as MemberInfo[],
    publications: [] as PublicationsInfo[],
    contacts: {},
    partners: [],
    products: [] as ProductsInfo[],
    loaded: false,
  }),
  actions: {
    async fetchAll() {
      if (!this.loaded) {
        const [members, publications, products, data] = await Promise.all([
          fetch('/members.json').then((res) => res.json()),
          fetch('/publications.json').then((res) => res.json()),
          fetch('/products.json').then((res) => res.json()),
          fetch('/data.json').then((res) => res.json()),
        ])

        this.members = members
        this.publications = publications
        this.products = products
        this.contacts = data.contacts
        this.partners = data.partners // TODO: update partners path to be in public folder

        this.loaded = true
      }
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

interface ProductsInfo {
  id: string
  name: string
  description: string
  category: string
  images: { image: string; alt: string }[]
  functions: {
    url: string
    isVideo: boolean
    name: string
    description: string
  }[]
}
