<template>
  <div
    class="ep-container"
    :style="{ height: tableHeight }"
  >
    <div
      v-if="useHeader"
      class="ep-contaniner__header"
    >
      <slot name="header" />
    </div>
    <div class="ep-container__content">
      <slot />
    </div>
    <div
      v-if="useFooter"
      class="ep-contaniner__footer"
    >
      <slot name="footer" />
    </div>
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
      useHeader: {
        type: Boolean,
        default: false
      },
      useFooter: {
        type: Boolean,
        default: false
      },
      calculateHeight: {
        type: Boolean,
        default: false
      },
      calculateHeightOffset: {
        type: Number,
        default: 0
      },
      display: {
        type: String,
        default: 'block'
      },
      width: {
        type: String,
        default: '100%'
      },
      maxWidth: {
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
      },
      overflow: {
        type: String,
        default: 'visible'
      }
    },
    data() {
      return {
        tableHeight: ''
      }
    },
    methods: {
      // this should be a mixin, shared with table, etc
      calculatedHeight() {
        const offsetBottom = this.calculateHeightOffset || 0
        this.tableHeight = this.calculateHeight ? `${window.innerHeight - this.$el.getBoundingClientRect().top - offsetBottom}px` : 'auto'

        // clean up the above code
        // const offsetBottom = this.calculateHeightOffset || 0
        // const offsetTop = this.$el.getBoundingClientRect().top
        // const windowHeight = window.innerHeight
        // const tableHeight = windowHeight - offsetTop - offsetBottom
        // this.tableHeight = this.calculateHeight ? `${tableHeight}px` : this.height
      }
    },
    mounted() {
      if (this.calculateHeight) {
        this.calculatedHeight()
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
    display: flex;
    flex-flow: column nowrap;
    width: v-bind(width);
    height: v-bind(height);
    margin: v-bind(margin);
    max-width: v-bind(maxWidth);
    border-radius: v-bind(borderRadius);
    background-color: v-bind(backgroundColor);
    border-width: v-bind(borderWidth);
    border-style: v-bind(borderStyle);
    border-color: v-bind(borderColor);
    overflow: v-bind(overflow);

    &__header {
      flex: 0 0 auto;
      z-index: var(--z-index--fixed);
    }

    &__content {
      position: relative;
      flex: 1 1 auto;
      padding: v-bind(padding);
      overflow: v-bind(overflow);
      -ms-overflow-style: none; // Internet Explorer, Edge
      scrollbar-width: none; // Firefox

      &::-webkit-scrollbar {
        display: none; // Chrome, Safari, Opera
      }

      // so that dropdowns overlap sticky table headers
      z-index: var(--z-index--default);
    }

    &__footer {
      flex: 0 0 auto;
  }
}</style>
