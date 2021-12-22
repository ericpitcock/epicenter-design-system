<template>
  <div class="ep-container" :style="{ height: tableHeight }">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'EpContainer',
    props: {
      // position: {
      //   type: String,
      //   default: 'static'
      // },
      calculateHeight: {
        type: Boolean,
        default: false
      },
      display: {
        type: String,
        default: 'block'
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: 'auto'
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
      borderRadius: {
        type: String,
        default: 'var(--border-radius--large)'
      },
      borderWidth: {
        type: String,
        default: '0.1rem'
      },
      borderColor: {
        type: String,
        default: 'var(--border-color)'
      }
    },
    data() {
      return {
        tableHeight: ''
      }
    },
    methods: {
      calculatedHeight() {
        if (this.calculateHeight) {
          this.tableHeight = `${window.innerHeight - 60}px`
        } else if (!this.calculateHeight) {
          this.tableHeight = 'fit-content'
        }
      }
    },
    mounted() {
      this.calculatedHeight()
      if (this.calculateHeight) {
        window.addEventListener('resize', this.calculatedHeight)
      }
      console.log(this.height)
    },
    beforeDestroy() {
      if (this.calculateHeight) {
        window.removeEventListener('resize', this.calculatedHeight)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ep-container {
    position: relative;
    display: v-bind(display);
    width: v-bind(width);
    // height: v-bind(height);
    padding: v-bind(padding);
    margin: v-bind(margin);
    border-radius: v-bind(borderRadius);
    background-color: v-bind(backgroundColor);
    border: v-bind(borderWidth) solid v-bind(borderColor);
  }
</style>
