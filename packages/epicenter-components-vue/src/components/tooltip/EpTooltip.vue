<script setup lang="ts">
  import { computed, onBeforeUnmount, ref } from 'vue'

  type TooltipPosition =
    | 'top left'
    | 'top center'
    | 'top right'
    | 'right top'
    | 'right center'
    | 'right bottom'
    | 'bottom left'
    | 'bottom center'
    | 'bottom right'
    | 'left top'
    | 'left center'
    | 'left bottom'

  interface EpTooltipProps {
    /** Delay in milliseconds before showing the tooltip on hover. */
    delay?: number
    /** Whether the tooltip is disabled. */
    disabled?: boolean
    /** Whether to dismiss the tooltip when clicked. */
    dismissOnClick?: boolean
    /** Position of the tooltip relative to the trigger element. */
    position?: TooltipPosition
  }

  const {
    delay = 0,
    disabled = false,
    dismissOnClick = false,
    position = 'top center',
  } = defineProps<EpTooltipProps>()

  const visible = ref<boolean>(false)
  const timeoutId = ref<ReturnType<typeof setTimeout> | null>(null)

  onBeforeUnmount(() => {
    if (timeoutId.value !== null) clearTimeout(timeoutId.value)
  })

  const showTooltip = (): void => {
    if (disabled) return
    timeoutId.value = setTimeout(() => {
      visible.value = true
    }, delay)
  }

  const hideTooltip = (): void => {
    if (timeoutId.value !== null) clearTimeout(timeoutId.value)
    visible.value = false
  }

  const onClick = (): void => {
    if (dismissOnClick) {
      hideTooltip()
    }
  }

  const positionClass = computed(() => {
    return `ep-tooltip--${position.replace(' ', '-')}`
  })
</script>

<template>
  <div
    class="ep-tooltip-wrapper"
    @mouseenter="showTooltip"
    @mouseleave="hideTooltip"
    @click="onClick"
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