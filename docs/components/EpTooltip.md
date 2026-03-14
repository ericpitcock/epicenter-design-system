# EpTooltip



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `delay` | Delay in milliseconds before showing the tooltip on hover. | `number` | `-` |
| `disabled` | Whether the tooltip is disabled. | `boolean` | `-` |
| `dismissOnClick` | Whether to dismiss the tooltip when clicked. | `boolean` | `-` |
| `position` | Position of the tooltip relative to the trigger element. | `TooltipPosition` | `-` |

## Slots
| Name | Description |
|------|-------------|
| `tooltip` | Tooltip content to display on hover |
| `default` | Trigger element that shows the tooltip on hover |


::: info
This component does not use events.
:::

## Component Code

```vue
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
```

## Styles (SCSS)

```scss
.ep-tooltip-wrapper {
  --ep-tooltip-bg-color: var(--interface-overlay);
  --ep-tooltip-text-color: var(--text-color);
  --ep-tooltip-offset: 0.5rem;
  position: relative;
  display: inline-block;
}

.ep-tooltip {
  position: absolute;
  z-index: var(--z-index--tooltip);
  padding: 5px;
  border-radius: 4px;
  background-color: var(--ep-tooltip-bg-color);
  color: var(--ep-tooltip-text-color);
  font-size: 12px;
  opacity: 0;
  transition: opacity 0.3s ease;
  visibility: hidden;
  white-space: nowrap;

  &.ep-tooltip--visible {
    opacity: 1;
    visibility: visible;
  }

  &.ep-tooltip--top-left {
    bottom: 100%;
    left: 0;
    transform: translateX(var(--ep-tooltip-offset-x, 0px)) translateY(calc(var(--ep-tooltip-offset-y, 0px) - var(--ep-tooltip-offset)));
  }

  &.ep-tooltip--top-center {
    bottom: 100%;
    left: 50%;
    transform: translateX(calc(-50% + var(--ep-tooltip-offset-x, 0px))) translateY(calc(var(--ep-tooltip-offset-y, 0px) - var(--ep-tooltip-offset)));
  }

  &.ep-tooltip--top-right {
    right: 0;
    bottom: 100%;
    transform: translateX(var(--ep-tooltip-offset-x, 0px)) translateY(calc(var(--ep-tooltip-offset-y, 0px) - var(--ep-tooltip-offset)));
  }

  &.ep-tooltip--right-top {
    top: 0;
    left: 100%;
    transform: translateX(calc(var(--ep-tooltip-offset-x, 0px) + var(--ep-tooltip-offset))) translateY(var(--ep-tooltip-offset-y, 0px));
  }

  &.ep-tooltip--right-center {
    top: 50%;
    left: 100%;
    transform: translateX(calc(var(--ep-tooltip-offset-x, 0px) + var(--ep-tooltip-offset))) translateY(calc(-50% + var(--ep-tooltip-offset-y, 0px)));
  }

  &.ep-tooltip--right-bottom {
    bottom: 0;
    left: 100%;
    transform: translateX(calc(var(--ep-tooltip-offset-x, 0px) + var(--ep-tooltip-offset))) translateY(var(--ep-tooltip-offset-y, 0px));
  }

  &.ep-tooltip--bottom-left {
    top: 100%;
    left: 0;
    transform: translateX(var(--ep-tooltip-offset-x, 0px)) translateY(calc(var(--ep-tooltip-offset-y, 0px) + var(--ep-tooltip-offset)));
  }

  &.ep-tooltip--bottom-center {
    top: 100%;
    left: 50%;
    transform: translateX(calc(-50% + var(--ep-tooltip-offset-x, 0px))) translateY(calc(var(--ep-tooltip-offset-y, 0px) + var(--ep-tooltip-offset)));
  }

  &.ep-tooltip--bottom-right {
    top: 100%;
    right: 0;
    transform: translateX(var(--ep-tooltip-offset-x, 0px)) translateY(calc(var(--ep-tooltip-offset-y, 0px) + var(--ep-tooltip-offset)));
  }

  &.ep-tooltip--left-top {
    top: 0;
    right: 100%;
    transform: translateX(calc(var(--ep-tooltip-offset-x, 0px) - var(--ep-tooltip-offset))) translateY(var(--ep-tooltip-offset-y, 0px));
  }

  &.ep-tooltip--left-center {
    top: 50%;
    right: 100%;
    transform: translateX(calc(var(--ep-tooltip-offset-x, 0px) - var(--ep-tooltip-offset))) translateY(calc(-50% + var(--ep-tooltip-offset-y, 0px)));
  }

  &.ep-tooltip--left-bottom {
    right: 100%;
    bottom: 0;
    transform: translateX(calc(var(--ep-tooltip-offset-x, 0px) - var(--ep-tooltip-offset))) translateY(var(--ep-tooltip-offset-y, 0px));
  }
}
```