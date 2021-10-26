<template>
  <div class="ep-control-bar">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'EpControlBar'
  }
</script>

<style lang="scss" scoped>
  .ep-control-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    // background: var(--component-background);
    padding: 0 30px;
    border-bottom: 1px solid var(--border-color);
  }
</style>
