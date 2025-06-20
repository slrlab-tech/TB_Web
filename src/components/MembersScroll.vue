<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js'
</script>
<script lang="ts">
export default {
  props: {
    members: {
      type: Array<{ name: string; position: string; description: string; image: string }>,
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
      memberImages: Array.from(Array(this.members.length).fill(true)),
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

<!-- !!!TODO: clean up -->
<template>
  <h2 v-if="title" class="title">{{ title }}</h2>
  <template v-if="members.length > 2">
    <div id="scrollArea" data-test="members">
      <div class="line-background"></div>
      <div class="line-background progress-line"></div>
      <div v-for="(member, index) in members" :key="index">
        <div :class="index % 2 ? 'member-wrapper' : 'member-wrapper inverted'">
          <div class="placeHolder"></div>
          <div class="point"></div>
          <div class="member placeHolder" data-inviewport="member">
            <div class="image-wrapper center">
              <img
                v-if="memberImages[index]"
                :src="member.image"
                :alt="member.name"
                class="member-image"
                @error="memberImages[index] = false"
              />
              <Icon
                v-else
                icon="mingcute:user-2-line"
                class="member-image"
                style="width: 80%; height: 80%"
              />
            </div>
            <h3 class="member-name">
              {{ member.name }}
            </h3>
            <p>{{ member.position }}</p>
            <p class="member-description">{{ member.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  <div v-else style="display: flex; justify-content: center; align-items: center; height: 100%">
    <div class="member placeHolder is-row" data-inviewport="member">
      <div class="image-wrapper center">
        <img
          v-if="memberImages[0]"
          :src="members[0].image"
          :alt="members[0].name"
          class="member-image"
          @error="memberImages[0] = false"
        />
        <Icon
          v-else
          icon="mingcute:user-2-line"
          class="member-image"
          style="width: 80%; height: 80%"
        />
      </div>
      <h4 class="member-name">
        {{ members[0].name }}
      </h4>
      <p>{{ members[0].position }}</p>
      <p class="member-description">{{ members[0].description }}</p>
    </div>
    <div class="member placeHolder is-row" data-inviewport="member">
      <div class="image-wrapper center">
        <img
          v-if="memberImages[1]"
          :src="members[1].image"
          :alt="members[1].name"
          class="member-image"
          @error="memberImages[1] = false"
        />
        <Icon
          v-else
          icon="mingcute:user-2-line"
          class="member-image"
          style="width: 80%; height: 80%"
        />
      </div>
      <h4 class="member-name">
        {{ members[1].name }}
      </h4>
      <p>{{ members[1].position }}</p>
      <p class="member-description">{{ members[1].description }}</p>
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
  border-top: 4px solid var(--black);
  width: 100%;
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
  padding: 1rem 0;
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

.member-wrapper.is-inViewport .member,
.is-row {
  transition:
    opacity 1s,
    transform 1s;
  animation-play-state: running;
  transform: translateY(-50px);
  opacity: 1 !important;
}
.is-row {
  transform: translateY(50px);
  height: 400px;
}

.member {
  justify-items: center;
  opacity: 0;
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
</style>
