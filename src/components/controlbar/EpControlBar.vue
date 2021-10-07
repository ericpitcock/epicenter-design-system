<template>
  <div class="ep-control-bar">
    <slot />
  </div>
</template>

<script>
  import EpControlBarSegment from '@/components/controlbar/EpControlBarSegment'
  import EpButton from '@/components/button/EpButton'

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
    background-attachment: var(--component-background-level-2);
    padding: 0 30px;
    border: 1px solid var(--border-color);
  }
</style>
