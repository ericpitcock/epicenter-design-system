<template>
  <div class="ep-badge">
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
