<template>
  <hr
    :class="['ep-divider', { 'ep-divider--vertical': vertical }]"
    :style="dividerStyles"
  >
</template>

<script>
  export default {
    name: 'EpDivider',
    props: {
      color: {
        type: String,
        default: 'var(--border-color)'
      },
      margin: {
        type: String,
        default: '0'
      },
      vertical: {
        type: Boolean,
        default: false
      },
      verticalWidth: {
        type: String,
        default: '1px'
      },
      verticalHeight: {
        type: String,
        default: '100%'
      }
    },
    computed: {
      dividerStyles() {
        return this.vertical
          ? {
            width: this.verticalWidth,
            height: this.verticalHeight,
            backgroundColor: this.color,
            margin: this.margin
          }
          : {
            backgroundColor: this.color,
            margin: this.margin
          }
      }
    }
  }
</script>
