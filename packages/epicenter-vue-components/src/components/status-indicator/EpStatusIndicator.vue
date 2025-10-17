<template>
  <span class="ep-status-indicator">
    <span
      class="ep-status-indicator__dot"
      :class="{ 'ep-status-indicator__dot--pulse': pulse }"
    />
    <slot />
  </span>
</template>

<script setup>
  defineOptions({
    name: 'EpStatusIndicator',
  })

  const props = defineProps({
    pulse: {
      type: Boolean,
      default: false,
    },
  })
</script>