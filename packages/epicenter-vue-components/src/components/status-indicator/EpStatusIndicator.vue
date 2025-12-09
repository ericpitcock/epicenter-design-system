<template>
  <span class="ep-status-indicator">
    <span
      class="ep-status-indicator__dot"
      :class="{ 'ep-status-indicator__dot--pulse': pulse }"
    />
    <!-- @slot Default slot for label or text content next to the indicator. -->
    <slot />
  </span>
</template>

<script setup>
  const props = defineProps({
    /**
     * If true, the status indicator will pulse.
     */
    pulse: {
      type: Boolean,
      default: false,
    },
  })
</script>