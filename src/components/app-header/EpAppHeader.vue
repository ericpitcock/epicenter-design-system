<template>
  <div class="ep-app-header">
    <ep-flex-container
      justify-content="flex-end"
      align-items="center"
    >
      <slot />
    </ep-flex-container>
  </div>
</template>

<script>
  import EpFlexContainer from '../flexbox/EpFlexContainer'

  export default {
    name: 'EpAppHeader',
    components: {
      EpFlexContainer
    },
    props: {
      // flexBasis: {
      //   type: String,
      //   default: '61px'
      // },
      // justifyContent: {
      //   type: String,
      //   default: 'flex-start'
      //   //flex-start, flex-end, space-between, space-around, space-evenly
      // },
      // gap: {
      //   type: String,
      //   default: '20px'
      // }
    }
  }
</script>

<style lang="scss" scoped>
  .ep-app-header {
    // display: flex;
    height: 100%;
    // flex-grow: 0;
    // flex-shrink: 0;
    // align-items: center;
    // justify-content: center;
    padding: 0 30px;
    border-bottom: 1px solid var(--border-color);
  }
</style>
