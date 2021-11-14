<template>
  <div
    class="ep-control-bar"
    :style="{ flexBasis, justifyContent, gap }"
  >
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'EpControlBar',
    props: {
      flexBasis: {
        type: String,
        default: '61px'
      },
      justifyContent: {
        type: String,
        default: 'flex-start'
        //flex-start, flex-end, space-between, space-around, space-evenly
      },
      gap: {
        type: String,
        default: '20px'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ep-control-bar {
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    align-items: center;
    padding: 0 30px;
    border-bottom: 1px solid var(--border-color);
  }
</style>
