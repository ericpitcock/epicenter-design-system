<template>
  <div class="ep-control-bar">
    <slot />
  </div>
</template>

<script>
  import EpControlBarSegment from './EpControlBarSegment'
  import EpButton from './EpButton'

  export default {
    name: 'EpControlBar',
    components: {
      EpControlBarSegment,
      EpButton
    }
  }
</script>

<style lang="scss" scoped>
  .ep-control-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    background-attachment: $white;
    padding: 0 30px;
    border: 1px solid $light-gray;
  }
</style>