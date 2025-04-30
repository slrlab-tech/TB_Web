<script lang="ts">
export default {
  props: ['members', 'title'],
  data() {
    return {
      lineHeight: 0 as number,
      memberObj: null as HTMLElement | null,
    }
  },
  methods: {
    scroll() {
      const progressLine = document.querySelector('.progress-line') as HTMLElement

      if (progressLine) {
        const scroll =
          document.documentElement.scrollTop -
          (progressLine.parentElement?.offsetTop || 0) +
          Math.floor(screen.height * 0.2)
        progressLine.style.height = `${Math.max(0, scroll)}px`

        if (
          this.memberObj &&
          this.memberObj.offsetTop + this.memberObj.offsetHeight / 2 <
            parseInt(progressLine.style.height.replace('px', ''))
        ) {
          this.memberObj.classList.add('is-inViewport')
          this.memberObj = document.querySelectorAll(
            '.member:not(.is-inViewport)',
          )[0] as HTMLElement
        }
      }
    },
  },
  mounted() {
    this.lineHeight = document.getElementsByClassName('line-background')[0]?.clientHeight || 0
    this.memberObj = document.querySelectorAll('.member:not(.is-inViewport)')[0] as HTMLElement

    document.addEventListener('scroll', this.scroll)
  },
}
</script>

<template>
  <h2 style="padding-bottom: 4.5rem">{{ title }}</h2>
  <div id="scrollArea" data-test="members">
    <div class="line-background"></div>
    <div class="line-background progress-line"></div>
    <div v-for="(member, index) in members" :key="index">
      <div :class="index % 2 ? 'memberWrapper' : 'memberWrapper inverted'">
        <div class="placeHolder"></div>
        <div class="point"></div>
        <div class="member placeHolder" data-inviewport="member">
          <div class="image-wrapper">
            <img :src="member.image" :alt="member.name" class="member-image" />
          </div>
          <h2 style="margin-top: -1rem">{{ member.name }}</h2>
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
  max-height: 100%;
  transition: all 0.2s;
}

.is-inViewport {
  transition:
    opacity 1s,
    transform 1s;
  animation-play-state: running;
  transform: translateY(-50px);
  opacity: 1 !important;
}

.image-wrapper {
  width: 200px;
  aspect-ratio: 1;
  border-radius: 50%;
  margin: 10px;
  overflow: hidden;
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

.memberWrapper {
  display: flex;
  align-items: center;
}
.memberWrapper.inverted {
  flex-direction: row-reverse;
}

.member {
  justify-items: center;
  opacity: 0;
}

.placeHolder {
  padding: 1rem 0;
  margin: -3rem 2rem;

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
