<script setup>
  const props = defineProps({
    /**
     * The direction of the divider.
     * @values horizontal, vertical
     */
    direction: {
      type: String,
      default: 'horizontal'
    },
  })
</script>

<template>
  <div :class="['ep-divider', `ep-divider--${direction}`]" />
</template>
