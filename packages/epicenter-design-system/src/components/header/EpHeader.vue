<template>
  <div class="ep-header">
    <div class="ep-header__content">
      <div
        v-if="hasLeftContent"
        class="ep-header__content__left"
      >
        <slot name="left" />
      </div>
      <div
        v-if="hasCenterContent"
        class="ep-header__content__center"
      >
        <slot name="center" />
      </div>
      <div
        v-if="hasRightContent"
        class="ep-header__content__right"
      >
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
      centerFlex: {
        type: String,
        default: '1'
      },
      rightFlex: {
        type: String,
        default: '1'
      },
      sticky: {
        type: Boolean,
        default: false
      },
      stickyTop: {
        type: String,
        default: '0'
      },
      zIndex: {
        type: String,
        default: '1'
      }
    },
    computed: {
      hasLeftContent() {
        return !!this.$slots.left
      },
      hasCenterContent() {
        return !!this.$slots.center
      },
      hasRightContent() {
      return !!this.$slots.right
    },
    headerPosition() {
      return this.sticky ? 'sticky' : 'relative'
    }
  }
}
</script>
