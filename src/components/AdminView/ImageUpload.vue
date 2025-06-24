<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<{ image: string; name?: string }>,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    subIndex: {
      type: Number || null,
      default: null,
    },
    type: {
      type: String as PropType<'partners' | 'products' | 'members'>,
      required: true,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    uploadImage: {
      type: Function as PropType<
        (
          e: Event,
          type: 'partners' | 'products' | 'members',
          index: number,
          subIndex?: number,
        ) => void
      >,
      required: true,
    },
  },
})
</script>

<template>
  <img :src="item.image" class="image" :alt="item.name" :class="{ rounded }" />
  <input
    style="padding-block: 1rem"
    type="file"
    accept="image/jpeg"
    @change="(e) => uploadImage(e, type, index, subIndex)"
  />
</template>

<style scoped>
.image {
  max-height: 150px;
  object-fit: contain;
  align-self: baseline;
}
.rounded {
  width: fit-content;
  aspect-ratio: 1;
  border-radius: 100%;
}
</style>
