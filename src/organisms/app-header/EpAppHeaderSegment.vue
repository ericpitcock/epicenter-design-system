<template>
  <div
    class="ep-app-header__segment"
    :style="{ gap }"
    v-bind="$attrs"
  >
    <div
      v-if="divideLeft"
      class="ep-app-header__divider"
    ></div>
    <slot />
    <div
      v-if="divideRight"
      class="ep-app-header__divider"
    ></div>
  </div>
</template>

<script>
  export default {
    name: 'EpAppHeaderSegment',
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
  .ep-app-header__segment {
    display: flex;
    align-items: center;
  }
  .ep-app-header__divider {
    width: 1px;
    height: 24px;
    background-color: var(--border-color);
  }
</style>
