import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', {
  state: () => ({
    members: [] as MemberInfo[],
    publications: [] as PublicationInfo[],
    contacts: {},
    partners: [] as ImageInfo[],
    products: [] as ProductInfo[],
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
  image: ImageInfo
}

export interface PublicationInfo {
  name: string
  year: string
  description: string
  image: ImageInfo
  functions: { name: string }[]
}

export interface ProductInfo {
  id: string
  name: string
  images: ImageInfo[]
  featured: boolean
}

export interface ImageInfo {
  path: string
  name?: string
  href?: string
}
