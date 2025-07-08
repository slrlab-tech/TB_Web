<script setup lang="ts">
import OSS from 'ali-oss'
import { Icon } from '@iconify/vue'
import ImageUpload from '@/components/AdminView/ImageUpload.vue'
import { useDataStore } from '@/stores/data.ts'
import type { MemberInfo } from '@/stores/data.ts'
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
    const { members } = useDataStore()
    return {
      newMembers: JSON.parse(JSON.stringify(members)) as MemberInfo[],
      displayImage: [] as string[],
      images: [] as File[],
    }
  },
  created() {
    this.displayImage = Array(this.newMembers.length).fill('')
  },
  methods: {
    uploadImage(e: Event, index: number) {
      const target = e.target as HTMLInputElement | null
      if (!target || !target.files || target.files.length === 0) {
        return
      }

      const image = target.files[0]
      this.newMembers[index].image.path = 'data/member/' + image.name
      this.images.push(image)

      this.displayImage[index] = URL.createObjectURL(image)
    },
    add() {
      this.newMembers.push({
        image: { path: '' },
        name: '',
        position: '',
      } as MemberInfo)
    },
    save() {
      console.log('Saving members data...')

      if (this.$props.client === null || this.$props.loggedIn === false) {
        window.confirm('Error: You are not logged in.')
        return
      }

      const data = useDataStore()

      data.$patch({ members: this.newMembers })
      this.$props.client.put('members.json', new Blob([JSON.stringify(this.newMembers)]))

      this.images.forEach((image) => {
        // @ts-expect-error: client is already checked to be not null
        this.$props.client.put('data/partners/' + image.name, image)
      })

      this.newMembers = JSON.parse(JSON.stringify(data.members)) as MemberInfo[]
      this.displayImage = Array(this.newMembers.length).fill('')
    },
  },
}
</script>

<template>
  <div style="width: 100%">
    <div class="title">
      <h2>Members</h2>
      <div>
        <Icon icon="mingcute:save-2-fill" class="icon-btn" @click="save()"></Icon>
        <Icon icon="mingcute:add-fill" class="icon-btn" @click="add()"></Icon>
      </div>
    </div>
    <div class="reverse">
      <div v-for="(member, index) in newMembers" :key="index" class="item">
        <h4>{{ $t('ID: ') + member.id }}</h4>
        <ImageUpload
          :item="{ ...member.image, path: displayImage[index] || member.image.path }"
          :index="index"
          type="members"
          :uploadImage="uploadImage"
          rounded
        />
        <div class="details">
          <div>
            <span>{{ $t('Name') }}: </span>
            <input type="text" v-model="member.name" placeholder="Enter name for member" />
          </div>
          <div>
            <span>{{ $t('Position') }}: </span>
            <input type="text" v-model="member.position" placeholder="Enter position for member" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
