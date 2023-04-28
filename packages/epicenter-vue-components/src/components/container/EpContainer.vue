<template>
  <div
    class="ep-container"
    :style="containerStyles"
  >
    <div
      v-if="$slots.header"
      class="ep-contaniner__header"
    >
      <slot name="header" />
    </div>
    <div
      class="ep-container__content"
      :style="contentStyles"
    >
      <slot />
    </div>
    <div
      v-if="$slots.footer"
      class="ep-contaniner__footer"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
  import calculateHeight from '../../mixins/calculateHeight'

  export default {
    name: 'EpContainer',
    mixins: [calculateHeight],
    props: {
      width: {
        type: String,
        default: '100%'
      },
      minWidth: {
        type: String,
        default: '0'
      },
      maxWidth: {
        type: String,
        default: 'none'
      },
      height: {
        type: String,
        default: 'auto'
      },
      minHeight: {
        type: String,
        default: 'auto'
      },
      maxHeight: {
        type: String,
        default: 'none'
      },
      containerPadding: {
        type: String,
        default: '0'
      },
      contentPadding: {
        type: String,
        default: '0'
      },
      backgroundColor: {
        type: String,
        default: 'var(--interface-surface)'
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
        default: 'visible'
      }
    },
    computed: {
      containerStyles() {
        return {
          width: this.width,
          minWidth: this.minWidth,
          maxWidth: this.maxWidth,
          height: this.dynamicHeight || this.height,
          minHeight: this.minHeight,
          maxHeight: this.maxHeight,
          backgroundColor: this.backgroundColor,
          padding: this.containerPadding,
          borderRadius: this.borderRadius,
          border: `${this.borderWidth} ${this.borderStyle} ${this.borderColor}`,
          overflow: this.overflow
        }
      },
      contentStyles() {
        return {
          padding: this.contentPadding,
          overflow: this.overflow
        }
      }
    }
  }
</script>
