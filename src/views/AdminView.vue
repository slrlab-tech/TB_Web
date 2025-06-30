<script setup lang="ts">
import { Icon } from '@iconify/vue'
import ImageUpload from '@/components/AdminView/ImageUpload.vue'
</script>

<script lang="ts">
import { useDataStore } from '@/stores/data.ts'
import type { PartnersInfo, ProductsInfo, MemberInfo } from '@/stores/data.ts'

type dataType = 'partners' | 'products' | 'members'

export default {
  name: 'imageUpload',
  data() {
    const { partners, products, members } = useDataStore()
    return {
      currentTab: '',
      newPartners: JSON.parse(JSON.stringify(partners)) as PartnersInfo[],
      newProducts: JSON.parse(JSON.stringify(products)) as ProductsInfo[],
      newMembers: JSON.parse(JSON.stringify(members)) as MemberInfo[],
      previewImage: '' as string,
    }
  },
  methods: {
    uploadImage(e: Event, type: dataType, index: number, subIndex?: number) {
      const target = e.target as HTMLInputElement | null
      if (!target || !target.files || target.files.length === 0) {
        return
      }
      const image = target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onload = (e) => {
        if (e.target?.result) {
          if (type === 'partners') {
            this.newPartners[index].image = e.target.result as string
          } else if (type === 'products') {
            if (typeof subIndex === 'number')
              this.newProducts[index].images[subIndex].image = e.target.result as string
          } else if (type === 'members') {
            this.newMembers[index].image = e.target.result as string
          }
        }
      }
    },
    goBack() {
      const answer = window.confirm(
        'Are you sure you want to leave this page? Any unsaved changes will be lost.',
      )
      if (answer) {
        this.currentTab = ''
        this.refetch()
      }
    },
    refetch() {
      const { partners, products, members } = useDataStore()
      this.newMembers = JSON.parse(JSON.stringify(members)) as MemberInfo[]
      this.newPartners = JSON.parse(JSON.stringify(partners)) as PartnersInfo[]
      this.newProducts = JSON.parse(JSON.stringify(products)) as ProductsInfo[]
    },
    add(type: dataType) {
      if (type === 'partners') {
        this.newPartners.push({
          image: '',
          name: '',
          href: '',
        } as PartnersInfo)
      } else if (type === 'products') {
        this.newProducts.push({
          id: (this.newProducts.length + 1).toString(),
          name: '',
          featured: false,
          images: [
            {
              image: '',
              name: '',
              link: '',
            },
          ],
        } as ProductsInfo)
      } else if (type === 'members') {
        this.newMembers.push({
          image: '',
          name: '',
          position: '',
        } as MemberInfo)
      }
      this.$forceUpdate() // Force Vue to re-render the component
    },
    saveData(type: dataType) {
      console.log('Saving data...', type)
      const data = useDataStore()
      if (type === 'products') {
        if (this.newProducts.filter((product) => product.featured).length != 1) {
          window.confirm('Error: You have not selected just one featured product.')
          return
        }
        data.$patch({ products: this.newProducts })
      } else if (type === 'partners') {
        data.$patch({ partners: this.newPartners })
      } else if (type === 'members') {
        data.$patch({ members: this.newMembers })
      }
      this.refetch()
      // TODO: call aliyun OSS API to save data
      // be careful with the image!
    },
  },
  beforeRouteLeave: function (to, from, next) {
    const answer = window.confirm(
      'Are you sure you want to leave this page? Any unsaved changes will be lost.',
    )
    if (answer) {
      next()
    } else {
      next(false)
    }
  },
}
</script>

<template>
  <!-- TODO: STS authorization -->
  <!-- TODO: add delete -->
  <div class="wrapper">
    <div class="tab-buttons" v-if="currentTab == ''">
      <button
        v-for="tab in ['partners', 'products', 'members']"
        :key="tab"
        @click="currentTab = tab"
        class="tab-btn"
      >
        {{ tab.charAt(0).toUpperCase() + tab.slice(1) }}
      </button>
    </div>
    <div class="btn-container" v-if="currentTab !== ''">
      <Icon class="icon-btn" icon="mingcute:back-2-fill" @click="goBack"></Icon>
      <Icon
        icon="mingcute:save-2-fill"
        class="icon-btn"
        @click="saveData(currentTab as dataType)"
      ></Icon>
    </div>
    <div v-if="currentTab === 'partners'" style="width: 100%">
      <div class="title">
        <h2>Partners</h2>
        <Icon icon="mingcute:add-fill" class="icon-btn" @click="add('partners')"></Icon>
      </div>
      <div class="partners-list">
        <div v-for="(partner, index) in newPartners.slice().reverse()" :key="index" class="item">
          <h4>{{ $t('Item') + (index + 1) }}</h4>
          <ImageUpload
            :item="partner"
            :index="newPartners.length - 1 - index"
            type="partners"
            :uploadImage="uploadImage"
          />
          <div class="details">
            <div>
              <span>{{ $t('Alt Text') }}: </span>
              <input
                type="text"
                v-model="partner.name"
                placeholder="Enter alt text for the image"
              />
            </div>
            <div>
              <span>{{ $t('URL') }}: </span>
              <input type="text" v-model="partner.href" placeholder="Enter URL for the image" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="currentTab === 'products'" style="width: 100%">
      <div class="title">
        <h2>Products</h2>
        <Icon icon="mingcute:add-fill" class="icon-btn" @click="add('products')"></Icon>
      </div>
      <div v-for="(product, index) in newProducts.slice().reverse()" :key="index" class="item">
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
                  image: '',
                  name: '',
                  link: '',
                })
              "
            ></Icon>
          </div>
          <div
            v-for="(img, imgIdx) in product.images?.slice().reverse()"
            :key="imgIdx"
            style="margin-left: 1rem"
          >
            <p style="font-weight: bold">{{ $t('Image') + (imgIdx + 1) }}</p>
            <ImageUpload
              :item="img"
              :index="product.images.length - 1 - index"
              :subIndex="product.images.length - 1 - imgIdx"
              type="products"
              :uploadImage="uploadImage"
            />
            <div class="details">
              <span>{{ $t('Image name') }}: </span>
              <input
                type="text"
                v-model="img.name"
                placeholder="Image name"
                style="margin-left: 0.5rem"
              />
            </div>
            <div class="details">
              <span>{{ $t('Image link') }}: </span>
              <input
                type="text"
                v-model="img.link"
                placeholder="Image link"
                style="margin-left: 0.5rem"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="currentTab === 'members'" style="width: 100%">
      <div class="title">
        <h2>Members</h2>
        <Icon icon="mingcute:add-fill" class="icon-btn" @click="add('members')"></Icon>
      </div>
      <div v-for="(member, index) in newMembers.slice().reverse()" :key="index" class="item">
        <h4>{{ $t('ID: ') + member.id }}</h4>
        <ImageUpload
          :item="member"
          :index="newMembers.length - 1 - index"
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

<style scoped>
.tab-btn {
  padding: 0.5rem 1rem;
  border: none;
  background-color: var(--brand-color);
  cursor: pointer;
  font-size: 1rem;
  margin: 1rem;
  border-radius: 0.5rem;
}
.tab-btn:hover {
  filter: brightness(0.9);
}
.tab-btn:active {
  filter: brightness(0.7);
}

.btn-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.icon-btn {
  height: 2rem;
  width: 2rem;
  cursor: pointer;
  border-radius: 0.5rem;
}
.icon-btn:hover {
  background-color: lightgray;
}
.icon-btn:active {
  background-color: gray;
}

.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.item {
  display: flex;
  flex-direction: column;
  margin-block: 1rem;
}

.details {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.details div {
  flex: 1;
  display: flex;
  align-items: center;
}

input[type='text'] {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--brand-color);
  border-radius: 0.5rem;
  margin: 0.5rem;
}
span {
  text-wrap: nowrap;
}
</style>
