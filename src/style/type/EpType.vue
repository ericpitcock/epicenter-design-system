<template>
  <div>
    <p class="font-size--jumbo">This is font size jumbo</p>
    <p class="font-size--large">This is font size large</p>
    <p class="font-size--body">This is a font size body</p>
    <p class="font-size--default">This is a font size default</p>
    <p class="font-size--small">This is a font size small</p>
    <p class="font-size--tiny">This is a font size tiny</p>
    <p class="font-size--body">{{ faker.lorem.paragraph(4) }}</p>
  </div>
</template>

<script>
  import faker from 'faker'

  export default {
    data() {
      return {
        faker
      }
    } 
  }
</script>

<style lang="scss" scoped>
  div > p + p {
    margin-top: 3rem;
  }
</style>