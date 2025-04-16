<script lang="ts">
export default {
  props: ['members', 'title'],
  data() {
    return {
      observer: null as IntersectionObserver | null,
      lineHeight: 0 as number,
    }
  },
  created() {
    this.observer = new IntersectionObserver(this.onElementObserved, {
      root: this.$el,
      threshold: 0.6,
    })
  },
  methods: {
    onElementObserved(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-inViewport')
      })
    },
    scroll() {
      const scrollTop = document.documentElement.scrollTop
      const progressLine = document.querySelector('.progress-line') as HTMLElement
      if (progressLine) {
        progressLine.style.height = `${scrollTop > this.lineHeight ? this.lineHeight : scrollTop}px`
      }
    },
  },
  mounted() {
    if (!this.observer) return
    document.querySelectorAll('[data-inViewport]').forEach((el) => {
      this.observer?.observe(el)
    })

    this.lineHeight = document.getElementsByClassName('line-background')[0]?.clientHeight || 0
    document.addEventListener('scroll', this.scroll)
  },
}
</script>

<template>
  <h2 style="padding-bottom: 4.5rem">{{ title }}</h2>
  <div id="scrollArea" data-test="members">
    <div class="line-background"></div>
    <div class="line-background progress-line"></div>
    <div v-for="(member, index) in members" :key="index" ref="test">
      <div :class="index % 2 ? 'memberWrapper' : 'memberWrapper inverted'">
        <div class="member"></div>
        <div class="point"></div>
        <div class="member" data-inviewport="member">
          <img :src="member.image" :alt="member.name" class="member-image" />
          <h2 style="margin-block: -1rem">{{ member.name }}</h2>
          <p>{{ member.position }}</p>
          <p class="member-description">{{ member.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#scrollArea {
  margin-block: 3rem;
  position: relative;
}

.line-background {
  position: absolute;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  background-color: #f0f0f0;
}

.progress-line {
  height: 0;
  background-color: #000;
}

.is-inViewport {
  transition: all 1s;
  animation-play-state: running;
  transform: translateY(-50px);
  opacity: 1 !important;
}

.member-image {
  width: 200px;
  aspect-ratio: 1;
  border-radius: 50%;
  margin: 10px;
}

.member-description {
  padding-top: 1rem;
}

.memberWrapper {
  display: flex;
  align-items: center;
}
.memberWrapper.inverted {
  flex-direction: row-reverse;
}
.member {
  justify-items: center;
  padding: 1rem 0;
  margin: -3rem 2rem;

  max-width: 25vw;
  width: 25vw;
  opacity: 0;
}

.point {
  z-index: 1;
  border-radius: 100%;
  height: 10px;
  width: 10px;
  background-color: #f78666;
}
</style>
