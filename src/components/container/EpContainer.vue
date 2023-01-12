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
      borderStyle: {
        type: String,
        default: 'solid'
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
        // if (this.calculateHeight) {
        //   this.tableHeight = `${window.innerHeight - 60}px`
        // } else if (!this.calculateHeight) {
        //   this.tableHeight = this.height
        // }
        this.tableHeight = (this.calculateHeight) ? `${window.innerHeight - 60}px` : this.height
      }
    },
    mounted() {
      this.calculatedHeight()
      if (this.calculateHeight) {
        window.addEventListener('resize', this.calculatedHeight)
      }
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
    border-width: v-bind(borderWidth);
    border-style: v-bind(borderStyle);
    border-color: v-bind(borderColor);
  }
</style>
