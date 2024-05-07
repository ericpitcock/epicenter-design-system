<template>
  <div
    class="ep-badge"
    :style="props.styles"
  >
    {{ props.label }}
  </div>
</template>

<script setup>
  const props = defineProps({
    label: {
      type: String,
      default: 'Badge'
    },
    styles: {
      type: Object,
      default: () => ({})
    }
  })
</script>
