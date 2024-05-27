<template>
  <div
    class="ep-tooltip-wrapper"
    @mouseenter="showTooltip"
    @mouseleave="hideTooltip"
  >
    <div :class="['ep-tooltip', { 'ep-tooltip--visible': visible }]">
      <slot name="tooltip" />
    </div>
    <slot />
  </div>
</template>

<script setup>
  import { onBeforeUnmount, ref } from 'vue'

  defineOptions({
    name: 'EpTooltip',
  })

  const props = defineProps({
    delay: {
      type: Number,
      default: 0
    }
  })

  const visible = ref(false)
  const timeoutId = ref(null)

  onBeforeUnmount(() => {
    clearTimeout(timeoutId.value)
  })

  const showTooltip = () => {
    timeoutId.value = setTimeout(() => {
      visible.value = true
    }, props.delay)
  }

  const hideTooltip = () => {
    clearTimeout(timeoutId.value)
    visible.value = false
  }
</script>
