<script setup lang="ts">
import OSS from 'ali-oss'
import { Icon } from '@iconify/vue'
import ImageUpload from '@/components/AdminView/ImageUpload.vue'
import { useDataStore } from '@/stores/data.ts'
import type { ImageInfo } from '@/stores/data.ts'
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
    const { partners } = useDataStore()
    return {
      newPartners: JSON.parse(JSON.stringify(partners)) as ImageInfo[],
      displayImage: [] as string[],
      images: [] as File[],
    }
  },
  created() {
    this.displayImage = Array(this.newPartners.length).fill('')
  },
  methods: {
    uploadImage(e: Event, index: number) {
      const target = e.target as HTMLInputElement | null
      if (!target || !target.files || target.files.length === 0) {
        return
      }

      const image = target.files[0]
      this.newPartners[index].path = 'data/partners/' + image.name
      this.images.push(image)

      this.displayImage[index] = URL.createObjectURL(image)
    },
    add() {
      this.newPartners.push({
        path: '',
        name: '',
        href: '',
      } as ImageInfo)
      this.displayImage.push('')
    },
    save() {
      console.log('Saving partners data...')

      if (this.$props.client === null || this.$props.loggedIn === false) {
        window.confirm('Error: You are not logged in.')
        return
      }

      const data = useDataStore()

      data.$patch({ partners: this.newPartners })
      this.$props.client.put(
        'data/data.json',
        new Blob([JSON.stringify({ partners: this.newPartners, contacts: data.contacts })], {
          type: 'application/json',
        }),
      )

      this.images.forEach((image) => {
        // @ts-expect-error: client is already checked to be not null
        this.$props.client.put('data/members/' + image.name, image)
      })

      this.newPartners = JSON.parse(JSON.stringify(data.partners)) as ImageInfo[]
      this.displayImage = Array(this.newPartners.length).fill('')
    },
  },
}
</script>

<template>
  <div style="width: 100%">
    <div class="title">
      <h2>Partners</h2>
      <div>
        <Icon icon="mingcute:save-2-fill" class="icon-btn" @click="save()"></Icon>
        <Icon icon="mingcute:add-fill" class="icon-btn" @click="add()"></Icon>
      </div>
    </div>
    <div class="reverse">
      <div v-for="(partner, index) in newPartners" :key="index" class="item">
        <div>
          <h4>{{ $t('Item') + (index + 1) }}</h4>
          <ImageUpload
            :item="{
              ...partner,
              path: displayImage[index] || partner.path,
            }"
            :index="index"
            type="partners"
            :uploadImage="uploadImage"
          />
          <div class="details">
            <div>
              <span>{{ $t('Alt Text') }}: </span>
              <input type="text" v-model="partner.name" placeholder="Optional" />
            </div>
            <div>
              <span>{{ $t('URL') }}: </span>
              <input type="text" v-model="partner.href" placeholder="Optional" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
