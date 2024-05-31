<template>
  <div
    :class="['ep-badge', classes]"
    :style="styles"
  >
    {{ label }}
  </div>
</template>

<script setup>
  defineOptions({
    name: 'EpBadge'
  })

  const props = defineProps({
    classes: {
      type: [Array, Object, String],
      default: ''
    },
    label: {
      type: String,
      default: 'Badge'
    },
    styles: {
      type: Object,
      default: () => ({})
    },
  })
</script>
