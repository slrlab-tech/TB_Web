<script lang="ts">
export default {
  props: ['data'],
  mounted() {
    console.log('contact', this.data)
  },
}
</script>

<template>
  <div>Contact Us</div>
  <div>
    <div>Phone number: 12345678</div>
    <div>Email: test@email.com</div>
    <div>Address: HKU</div>
  </div>
</template>

<style scoped></style>
