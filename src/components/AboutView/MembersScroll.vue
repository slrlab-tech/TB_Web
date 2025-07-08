<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js'
import type { ImageInfo } from '@/stores/data'
</script>
<script lang="ts">
export default {
  props: {
    members: {
      type: Array<{ name: string; position: string; image: ImageInfo; id: number }>,
      required: true,
    },
    title: String,
  },
  data() {
    return {
      lineHeight: 0 as number,
      memberLocation: -1 as number,
      memberWrapper: null as HTMLElement | null,
      progressLine: null as HTMLElement | null,
      isTop: false as boolean,
    }
  },
  methods: {
    scroll() {
      if (!this.isTop && document.documentElement.scrollTop < 20) {
        this.isTop = true
      }
      if (this.isTop && this.progressLine) {
        const scroll = Math.max(
          0,
          document.documentElement.scrollTop - (this.progressLine.parentElement?.offsetTop || 0),
        )
        this.progressLine.style.height = `${scroll}px`

        if (this.memberWrapper && this.memberLocation < scroll) {
          this.memberWrapper.classList.add('is-inViewport')
          this.memberWrapper = document.querySelector(
            '.member-wrapper:not(.is-inViewport)',
          ) as HTMLElement
          if (this.memberWrapper)
            this.memberLocation = this.memberWrapper.offsetTop + this.memberWrapper.offsetHeight / 2
        }
      }
    },
  },
  mounted() {
    this.lineHeight = document.getElementsByClassName('line-background')[0]?.clientHeight || 0
    this.progressLine = document.querySelector('.progress-line') as HTMLElement
    this.memberWrapper = document.querySelector(
      '.member-wrapper:not(.is-inViewport)',
    ) as HTMLElement
    this.memberLocation = this.memberWrapper.offsetTop + this.memberWrapper.offsetHeight / 2

    document.addEventListener('scroll', this.scroll)
  },
}
</script>

<template>
  <div
    id="scrollArea"
    :class="{ 'with-scroll': members.length > 2, 'member-row': members.length <= 2 }"
    data-test="members"
  >
    <div v-if="members.length > 2" class="line-background"></div>
    <div v-if="members.length > 2" class="line-background progress-line"></div>
    <div v-for="(member, index) in members" :key="index">
      <div :class="index % 2 ? 'member-wrapper' : 'member-wrapper inverted'">
        <div v-if="members.length > 2" class="placeHolder"></div>
        <div v-if="members.length > 2" class="point"></div>
        <div
          :class="{ 'is-row': members.length <= 2 }"
          class="member placeHolder"
          data-inviewport="member"
        >
          <div class="image-wrapper center">
            <img
              v-if="!!member.image"
              :src="member.image.path"
              :alt="member.name"
              class="member-image"
            />
            <Icon
              v-else
              icon="mingcute:user-2-line"
              class="member-image"
              style="width: 80%; height: 80%"
            />
          </div>
          <h4 class="member-name">
            {{ $t(`members.${member.id}.name`) }}
          </h4>
          <p style="width: max-content">{{ $t(`members.${member.id}.position`) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  border-bottom: 5px solid var(--highlight-1);
  margin-block: 3rem 1px;
  padding-inline: 2rem;
  line-height: 1.2;
}

#scrollArea {
  position: relative;
  width: 100%;
  display: flex;
  &.with-scroll {
    border-top: 4px solid var(--black);
    display: block;
  }
}

.line-background {
  position: absolute;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  background-color: var(--white-soft);
}

.progress-line {
  height: 0;
  background-color: var(--black);
  max-height: 100%;
  transition: all 0.2s;
}

.image-wrapper {
  width: 200px;
  aspect-ratio: 1;
  border-radius: 50%;
  margin: 10px;
  overflow: hidden;
  background-color: var(--brand-color);
  color: var(--text-light-1);
}

@media only screen and (max-width: 768px) {
  .image-wrapper {
    width: 150px;
  }

  .member-name {
    font-size: 1.2rem;
  }
}

.member-name {
  margin-top: -1rem;
  text-align: center;
  line-height: normal;
  padding-top: 1rem;
  width: max-content;
}

.member-image {
  width: 200px;
  transition: all 0.5s;
}

.member-image:hover {
  transform: scale(1.1);
}

.member-description {
  padding-top: 1rem;
  text-align: center;
}

.member-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(50px);
}
.member-wrapper.inverted {
  flex-direction: row-reverse;
}

.member-row {
  display: flex;
  align-items: center;
  justify-content: center;
}

.member-wrapper.is-inViewport .member,
.is-row {
  transition:
    opacity 1s,
    transform 1s;
  animation-play-state: running;
  transform: translateY(-50px);
  opacity: 1 !important;
  max-width: unset !important;
}

.member {
  justify-items: center;
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.placeHolder {
  padding: 1rem 0;
  margin: 0 2rem;

  max-width: 25vw;
  width: 25vw;
}

.point {
  z-index: 1;
  border-radius: 100%;
  height: 10px;
  width: 10px;
  background-color: #f78666;
}
@media only screen and (max-width: 768px) {
  .member-row {
    flex-direction: column;
  }
  .placeHolder {
    max-width: 100%;
    width: 100%;
  }
}
</style>
