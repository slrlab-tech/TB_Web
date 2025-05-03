<script lang="ts">
export default {
  props: ['data'],
}
</script>

<template>
  <div class="wrapper">
    <div class="padding">
      <h2>{{ $t('Contact Us') }}</h2>
      <div class="contacts" data-test="contacts">
        <div v-for="(value, key) in data?.items" :key="key">
          <p>{{ $t(String(key)) }}: {{ value }}</p>
        </div>
      </div>
    </div>
    <hr style="width: 100%" />
    <div class="padding">
      <a href="http://google.com" target="_blank" rel="noopener noreferrer">
        <!-- TODO: change terms and condition to proper one -->
        {{ $t('Terms and Conditions') }}
      </a>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  color: var(--white);
  margin-bottom: 4rem;
}

.contacts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.padding {
  width: 100%;
  padding: 2rem 1rem;
}
</style>
