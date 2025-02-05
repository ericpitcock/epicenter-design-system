<template>
  <div class="ep-badge">
    {{ label }}
  </div>
</template>

<script setup>
  defineOptions({
    name: 'EpBadge'
  })

  const props = defineProps({
    /**
     * The label to display in the badge.
     */
    label: {
      type: String,
      default: 'Badge'
    },
  })
</script>
