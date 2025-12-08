<template>
  <div
    class="ep-tooltip-wrapper"
    @mouseenter="showTooltip"
    @mouseleave="hideTooltip"
  >
    <div
      :class="['ep-tooltip', positionClass, { 'ep-tooltip--visible': visible }]"
    >
      <!-- @slot Tooltip content to display on hover -->
      <slot name="tooltip" />
    </div>
    <!-- @slot Trigger element that shows the tooltip on hover -->
    <slot />
  </div>
</template>

<script setup>
  import { computed, onBeforeUnmount, ref } from 'vue'

  defineOptions({
    name: 'EpTooltip',
  })

  const props = defineProps({
    /**
     * Delay in milliseconds before showing the tooltip on hover.
     */
    delay: {
      type: Number,
      default: 0,
    },
    /**
     * Position of the tooltip relative to the trigger element.
     * @values 'top left', 'top center', 'top right', 'right top', 'right center', 'right bottom', 'bottom left', 'bottom center', 'bottom right', 'left top', 'left center', 'left bottom'
     */
    position: {
      type: String,
      default: 'top center',
      validator: (value) =>
        [
          'top left',
          'top center',
          'top right',
          'right top',
          'right center',
          'right bottom',
          'bottom left',
          'bottom center',
          'bottom right',
          'left top',
          'left center',
          'left bottom',
        ].includes(value),
    },
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

  const positionClass = computed(() => {
    return `ep-tooltip--${props.position.replace(' ', '-')}`
  })
</script>