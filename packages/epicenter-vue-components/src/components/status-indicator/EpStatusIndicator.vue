<template>
  <span
    class="ep-status-indicator"
    :style="styles"
  >
    <span class="ep-status-indicator__dot" />
    <slot />
  </span>
</template>

<script setup>
  defineOptions({
    name: 'EpStatusIndicator',
  })

  const props = defineProps({
    styles: {
      type: Object,
      default: () => ({}),
    },
  })
</script>
