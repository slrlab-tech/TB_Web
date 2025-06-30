import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', {
  state: () => ({
    members: [] as MemberInfo[],
    publications: [] as PublicationInfo[],
    contacts: {},
    partners: [] as PartnersInfo[],
    products: [] as ProductsInfo[],
    loaded: false,
  }),
  actions: {
    async fetchAll() {
      if (!this.loaded) {
        const [members, publications, products, data] = await Promise.all([
          fetch('/data/members.json').then((res) => res.json()),
          fetch('/data/publications.json').then((res) => res.json()),
          fetch('/data/products.json').then((res) => res.json()),
          fetch('/data/data.json').then((res) => res.json()),
        ])

        this.members = members
        this.publications = publications
        this.products = products
        this.contacts = data.contacts
        this.partners = data.partners

        this.loaded = true
      }
    },
  },
})

export interface MemberInfo {
  id: number
  name: string
  position: string
  image: string
}

export interface PublicationInfo {
  name: string
  year: string
  description: string
  image: string
  functions: { name: string }[]
}

export interface ProductsInfo {
  id: string
  name: string
  images: { image: string; name?: string; link?: string }[]
  featured: boolean
}

export interface PartnersInfo {
  name: string
  image: string
  href?: string
}
