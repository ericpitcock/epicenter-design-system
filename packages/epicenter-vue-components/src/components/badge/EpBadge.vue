<template>
  <div
    :class="['ep-badge', classes]"
    :style="styles"
  >
    {{ label }}
  </div>
</template>

<script setup>
  // eslint-disable-next-line no-unused-vars
  const props = defineProps({
    classes: {
      type: Object,
      default: () => ({})
    },
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
