<template>
  <div class="ep-header">
    <div class="ep-header__content">
      <div class="ep-header__content__left">
        <slot name="left" />
      </div>
      <div class="ep-header__content__right">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EpHeader',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '6.1rem'
    },
    padding: {
      type: String,
      default: '0 3rem'
    },
    margin: {
      type: String,
      default: '0'
    },
    backgroundColor: {
      type: String,
      default: 'var(--background-2)'
    },
    borderRadius: {
      type: String,
      default: 'var(--border-radius--large)'
    },
    borderWidth: {
      type: String,
      default: '0.1rem'
    },
    borderStyle: {
      type: String,
      default: 'solid'
    },
    borderColor: {
      type: String,
      default: 'var(--border-color)'
    },
    overflow: {
      type: String,
      default: 'hidden'
    },
    itemGap: {
      type: String,
      default: '3rem'
    },
    leftFlex: {
      type: String,
      default: '1'
    },
    rightFlex: {
      type: String,
      default: '1'
    }
  }
}
</script>

<style lang="scss" scoped>
  .ep-header {
    width: 100%;
    height: v-bind(height);
    padding: v-bind(padding);
    background-color: v-bind(backgroundColor);
    border-bottom: v-bind(borderWidth) v-bind(borderStyle) v-bind(borderColor);
    &__content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: v-bind(itemGap);
      height: 100%;
      &__left, &__right {
        display: flex;
        height: 100%;
        align-items: center;
        gap: v-bind(itemGap);
      }
      &__left {
        flex: v-bind(leftFlex);
        justify-content: flex-start;
      }
      &__right {
        flex: v-bind(rightFlex);
        justify-content: flex-end;
      }
    }
  }
</style>