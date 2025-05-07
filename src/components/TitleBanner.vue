<script lang="ts">
export default {
  props: ['title', 'home'],
}
</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Tomorrow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
  />
  <div class="banner">
    <div v-if="home">
      <h1 class="title">明日腦教育科技有限公司<br />TOMORROW’S BRAIN</h1>
    </div>
    <div v-if="!home">
      <h1 style="margin-bottom: 2rem">{{ $t(title) }}</h1>
    </div>
  </div>
</template>

<style scoped>
.title {
  padding: 1rem 0 4rem 0;
  font-family: 'Tomorrow', sans-serif;
  font-size: 5rem;
}

.banner {
  padding: 8rem 0 1rem 0;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
