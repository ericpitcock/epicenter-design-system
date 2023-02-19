<template>
  <footer
    class="ep-footer"
    :style="footerStyles"
  >
    <slot />
  </footer>
</template>

<script>
  export default {
    name: 'EpFooter',
    props: {
      height: {
        type: String,
        default: '5.1rem'
      },
      padding: {
        type: String,
        default: '0'
      },
      margin: {
        type: String,
        default: '0'
      },
      backgroundColor: {
        type: String,
        default: 'var(--background-2)'
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
      }
    },
    computed: {
      footerStyles() {
        return {
          height: this.height,
          padding: this.padding,
          margin: this.margin,
          backgroundColor: this.backgroundColor,
          borderTop: `${this.borderWidth} ${this.borderStyle} ${this.borderColor}`
        }
      }
    }
  }
</script>
