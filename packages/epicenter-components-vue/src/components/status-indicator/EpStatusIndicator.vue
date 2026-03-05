<script setup lang="ts">
  interface EpStatusIndicatorProps {
    /**
     * If true, the status indicator will pulse.
     */
    pulse?: boolean
  }

  const props = withDefaults(defineProps<EpStatusIndicatorProps>(), {
    pulse: false,
  })
</script>

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