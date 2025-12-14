# EpTooltip



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `delay` | Delay in milliseconds before showing the tooltip on hover. | `number` | `0` |
| `position` | Position of the tooltip relative to the trigger element. | `string` | `'top center'` |

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
  background-color: var(--ep-tooltip-bg-color);
  color: var(--ep-tooltip-text-color);
  padding: 5px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: var(--z-index--tooltip);

  &.ep-tooltip--visible {
    visibility: visible;
    opacity: 1;
  }

  &.ep-tooltip--top-left {
    bottom: 100%;
    left: 0;
    transform: translateY(calc(-1 * var(--ep-tooltip-offset)));
  }

  &.ep-tooltip--top-center {
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(calc(-1 * var(--ep-tooltip-offset)));
  }

  &.ep-tooltip--top-right {
    bottom: 100%;
    right: 0;
    transform: translateY(calc(-1 * var(--ep-tooltip-offset)));
  }

  &.ep-tooltip--right-top {
    top: 0;
    left: 100%;
    transform: translateX(var(--ep-tooltip-offset));
  }

  &.ep-tooltip--right-center {
    top: 50%;
    left: 100%;
    transform: translateX(var(--ep-tooltip-offset)) translateY(-50%);
  }

  &.ep-tooltip--right-bottom {
    bottom: 0;
    left: 100%;
    transform: translateX(var(--ep-tooltip-offset));
  }

  &.ep-tooltip--bottom-left {
    top: 100%;
    left: 0;
    transform: translateY(var(--ep-tooltip-offset));
  }

  &.ep-tooltip--bottom-center {
    top: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(var(--ep-tooltip-offset));
  }

  &.ep-tooltip--bottom-right {
    top: 100%;
    right: 0;
    transform: translateY(var(--ep-tooltip-offset));
  }

  &.ep-tooltip--left-top {
    top: 0;
    right: 100%;
    transform: translateX(calc(-1 * var(--ep-tooltip-offset)));
  }

  &.ep-tooltip--left-center {
    top: 50%;
    right: 100%;
    transform: translateX(calc(-1 * var(--ep-tooltip-offset))) translateY(-50%);
  }

  &.ep-tooltip--left-bottom {
    bottom: 0;
    right: 100%;
    transform: translateX(calc(-1 * var(--ep-tooltip-offset)));
  }
}
```