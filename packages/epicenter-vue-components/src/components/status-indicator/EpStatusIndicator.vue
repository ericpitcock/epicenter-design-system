<template>
  <span
    class="ep-status-indicator"
    :style="styles"
  >
    <span class="ep-status-indicator__dot" />
    <slot />
  </span>
</template>

<script>
  export default {
    name: 'EpStatusIndicator',
    props: {
      styles: {
        type: Object,
        default: () => ({}),
      },
    }
  }
</script>
