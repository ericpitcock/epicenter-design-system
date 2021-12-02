<template>
  <ep-container padding="30px">
    <p class="font-size--jumbo">This is font size jumbo</p>
    <p class="font-size--large">This is font size large</p>
    <p class="font-size--body">This is a font size body</p>
    <p class="font-size--default">This is a font size default</p>
    <p class="font-size--small">This is a font size small</p>
    <p class="font-size--tiny">This is a font size tiny</p>
    <!-- <p class="font-size--body">{{ faker.lorem.paragraph(4) }}</p> -->
  </ep-container>
</template>

<script>
  // import faker from 'faker'

  import EpContainer from '@/components/container/EpContainer'

  export default {
    components: {
      EpContainer
    },
    data() {
      return {
        // faker
      }
    } 
  }
</script>

<style lang="scss" scoped>
  div > p + p {
    margin-top: 3rem;
  }
</style>