<template>
  <div class="ep-badge">
    <!-- @slot Default slot for badge content. Falls back to label prop if not provided. -->
    <slot>{{ label }}</slot>
  </div>
</template>

<script setup>
  defineOptions({
    name: 'EpBadge'
  })

  defineProps({
    /**
     * The label to display in the badge.
     */
    label: {
      type: String,
      default: '',
    },
  })
</script>
