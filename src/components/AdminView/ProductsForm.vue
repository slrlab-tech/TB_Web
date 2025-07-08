<script setup lang="ts">
import OSS from 'ali-oss'
import { Icon } from '@iconify/vue'
import ImageUpload from '@/components/AdminView/ImageUpload.vue'
import { useDataStore } from '@/stores/data.ts'
import type { ProductInfo } from '@/stores/data.ts'
import type { PropType } from 'vue'
</script>

<script lang="ts">
export default {
  props: {
    client: {
      type: Object as PropType<OSS | null>,
      required: true,
    },
    loggedIn: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    const { products } = useDataStore()
    return {
      newProducts: JSON.parse(JSON.stringify(products)) as ProductInfo[],
      displayImage: [] as string[][],
      images: [] as File[],
    }
  },
  created() {
    this.displayImage = this.newProducts.map((product) => Array(product.images.length).fill(''))
  },
  methods: {
    uploadImage(e: Event, index: number, subIndex = 0) {
      const target = e.target as HTMLInputElement | null
      if (!target || !target.files || target.files.length === 0) {
        return
      }

      const image = target.files[0]
      this.newProducts[index].images[subIndex].path = 'data/products/' + image.name
      this.images.push(image)

      this.displayImage[index][subIndex] = URL.createObjectURL(image)
    },
    add() {
      this.newProducts.push({
        id: (this.newProducts.length + 1).toString(),
        name: '',
        featured: false,
        images: [],
      } as ProductInfo)
    },
    save() {
      console.log('Saving products data...')
      if (this.newProducts.filter((product) => product.featured).length != 1) {
        window.confirm('Error: You have not selected just one featured product.')
        return
      }
      if (this.$props.client === null || this.$props.loggedIn === false) {
        window.confirm('Error: You are not logged in.')
        return
      }

      const data = useDataStore()

      data.$patch({ products: this.newProducts })
      this.$props.client.put('products.json', new Blob([JSON.stringify(this.newProducts)]))

      this.images.forEach((image) => {
        // @ts-expect-error: client is already checked to be not null
        this.$props.client.put('data/products/' + image.name, image)
      })

      this.newProducts = JSON.parse(JSON.stringify(data.products)) as ProductInfo[]
      this.displayImage = this.newProducts.map((product) => Array(product.images.length).fill(''))
    },
  },
}
</script>

<template>
  <div style="width: 100%">
    <div class="title">
      <h2>Products</h2>
      <div>
        <Icon icon="mingcute:save-2-fill" class="icon-btn" @click="save()"></Icon>
        <Icon icon="mingcute:add-fill" class="icon-btn" @click="add()"></Icon>
      </div>
    </div>
    <div class="reverse">
      <div v-for="(product, index) in newProducts" :key="index" class="item">
        <h4>{{ $t('ID') + ': ' + product.id }}</h4>
        <div>
          <span>{{ $t('Name') }}: </span>
          <input type="text" v-model="product.name" placeholder="Enter name for product" />
        </div>
        <div>
          <span>{{ $t('Featured') }}: </span>
          <input type="checkbox" v-model="product.featured" />
        </div>
        <div>
          <div class="title">
            <span>{{ $t('Images') }}: </span>
            <Icon
              style="height: 1.2rem"
              icon="mingcute:add-fill"
              class="icon-btn"
              @click="
                product.images.push({
                  path: '',
                  name: '',
                  href: '',
                })
              "
            ></Icon>
          </div>
          <div class="reverse">
            <div v-for="(img, imgIdx) in product.images" :key="imgIdx" style="margin-left: 1rem">
              <p style="font-weight: bold">{{ $t('Image') + (imgIdx + 1) }}</p>
              <ImageUpload
                :item="{
                  ...img,
                  path: displayImage[index][imgIdx] || img.path,
                }"
                :index="index"
                :subIndex="imgIdx"
                type="products"
                :uploadImage="uploadImage"
              />
              <div class="details">
                <span>{{ $t('Image name') }}: </span>
                <input
                  type="text"
                  v-model="img.name"
                  placeholder="Optional"
                  style="margin-left: 0.5rem"
                />
              </div>
              <div class="details">
                <span>{{ $t('Image link') }}: </span>
                <input
                  type="text"
                  v-model="img.href"
                  placeholder="Optional"
                  style="margin-left: 0.5rem"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
