<template>
  <div
    class="ep-control-bar__segment"
    :style="{ gap }"
    v-bind="$attrs"
  >
    <div
      v-if="divideLeft"
      class="ep-control-bar__divider"
    ></div>
    <slot />
    <div
      v-if="divideRight"
      class="ep-control-bar__divider"
    ></div>
  </div>
</template>

<script>
  export default {
    name: 'EpControlBarSegment',
    props: {
      gap: {
        type: String,
        default: '10px',
      },
      divideRight: {
        type: Boolean
      },
      divideLeft: {
        type: Boolean
      },
    }
  }
</script>

<style lang="scss" scoped>
  .ep-control-bar__segment {
    display: flex;
    align-items: center;
  }
  .ep-control-bar__divider {
    width: 1px;
    height: 24px;
    background-color: var(--border-color);
  }
</style>
