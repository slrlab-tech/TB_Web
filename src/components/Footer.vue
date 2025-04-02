<script lang="ts">
export default {
  props: ['data'],
  mounted() {
    console.log('contacts', this.data)
  },
}
</script>

<template>
  <div class="wrapper">
    <div class="padding">
      <h2>Contact Us</h2>
      <div class="contacts">
        <div v-for="(value, key) in data.items" :key="key">
          <p>{{ key }}: {{ value }}</p>
        </div>
      </div>
    </div>
    <hr />
    <div class="padding">
      <a href="http://google.com" target="_blank" rel="noopener noreferrer">
        Terms and Conditions
      </a>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  color: var(--vt-c-white);
  margin-bottom: 4rem;
}

.contacts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.padding {
  padding: 2rem 1rem;
}
</style>
