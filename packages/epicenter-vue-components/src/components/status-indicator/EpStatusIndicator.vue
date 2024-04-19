<template>
  <span :class="['ep-status-indicator', `ep-status-indicator--${status}`]">
    {{ value }}
  </span>
</template>

<script setup>
  const props = defineProps({
    status: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  })
</script>