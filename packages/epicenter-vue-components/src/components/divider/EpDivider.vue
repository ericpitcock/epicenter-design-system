<template>
  <hr
    class="ep-divider"
    :style="dividerStyles"
  />
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
      }
    },
    computed: {
      dividerStyles() {
        return {
          backgroundColor: this.color,
          margin: this.margin
        }
      }
    }
  }
</script>
