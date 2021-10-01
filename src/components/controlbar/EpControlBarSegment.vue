<template>
  <div
    :class="['ep-control-bar__segment', { 'align-right': false }]"
    :style="{ justifyContent: justifyContent }"
  >
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'EpControlBarSegment',
    props: {
      justifyContent: {
        type: String,
        default: undefined
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ep-control-bar__segment {
    // height: 100%;
    // background: lightblue;
    flex: 1;
    display: flex;
    & + & {
      border-left: 1px solid var(--border-color);
    }
    &.align-right {
      justify-content: flex-end;
    }
  }
</style>
