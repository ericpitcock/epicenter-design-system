<script setup lang="ts">
  interface Props {
    /**
     * The label to display in the badge.
     */
    label?: string
  }

  const { label = '' } = defineProps<Props>()

  defineOptions({ name: 'EpBadge' })
</script>

<template>
  <div class="ep-badge">
    <!-- @slot Default slot for badge content. Falls back to label prop if not provided. -->
    <slot>{{ label }}</slot>
  </div>
</template>
