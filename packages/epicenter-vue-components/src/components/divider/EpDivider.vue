<template>
  <div
    :class="['ep-divider', `ep-divider--${direction}`]"
    :style="styles"
  />
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
    styles: {
      type: Object,
      default: () => ({})
    }
  })
</script>
