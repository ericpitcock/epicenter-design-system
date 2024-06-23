<template>
  <div :class="['ep-divider', `ep-divider--${direction}`]" />
</template>

<script setup>
  defineOptions({
    name: 'EpDivider'
  })

  const props = defineProps({
    direction: {
      type: String,
      default: 'horizontal'
    },
  })
</script>
