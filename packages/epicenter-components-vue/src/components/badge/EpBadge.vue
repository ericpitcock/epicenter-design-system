<script setup lang="ts">
  interface EpBadgeProps {
    /**
     * The label to display in the badge.
     */
    label?: string
  }

  const { label = '' } = defineProps<EpBadgeProps>()
</script>

<template>
  <div class="ep-badge">
    <!-- @slot Default slot for badge content. Falls back to label prop if not provided. -->
    <slot>{{ label }}</slot>
  </div>
</template>
