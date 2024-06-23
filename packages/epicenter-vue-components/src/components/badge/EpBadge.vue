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
    label: {
      type: String,
      default: 'Badge'
    },
  })
</script>
