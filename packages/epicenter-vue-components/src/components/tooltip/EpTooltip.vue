<template>
  <div
    class="ep-tooltip-wrapper"
    @mouseenter="showTooltip"
    @mouseleave="hideTooltip"
  >
    <div :class="['ep-tooltip', { 'ep-tooltip--visible': visible }]">
      <slot name="tooltip" />
    </div>
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'EpTooltip',
    props: {
      delay: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        visible: false,
        timeoutId: null
      }
    },
    beforeUnmount() {
      clearTimeout(this.timeoutId)
    },
    methods: {
      showTooltip() {
        this.timeoutId = setTimeout(() => {
          this.visible = true
        }, this.delay)
      },
      hideTooltip() {
        clearTimeout(this.timeoutId)
        this.visible = false
      }
    },
  }
</script>
