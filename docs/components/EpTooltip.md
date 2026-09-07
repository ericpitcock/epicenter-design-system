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

## CSS Custom Properties

Set any of these with a selector that matches `.ep-tooltip-wrapper` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-tooltip-wrapper {
  --ep-tooltip-bg-color: /* … */;
}
```

### Surface

| Property | Default | State |
|---|---|---|
| `--ep-tooltip-bg-color` | `var(--interface-overlay)` | — |

### Border

| Property | Default | State |
|---|---|---|
| `--ep-tooltip-border-radius` | `var(--border-radius--default)` | — |

### Effect

| Property | Default | State |
|---|---|---|
| `--ep-tooltip-box-shadow` | `var(--shadow--tooltip)` | — |
| `--ep-tooltip-duration` | `var(--duration--default)` | — |
| `--ep-tooltip-transition` | `opacity var(--ep-tooltip-duration) ease` | — |
| `--ep-tooltip-translate-x` | `0rem` | — |
| `--ep-tooltip-translate-y` | `0rem` | — |

### Text

| Property | Default | State |
|---|---|---|
| `--ep-tooltip-font-size` | `var(--font-size--small)` | — |
| `--ep-tooltip-font-variation-settings` | `var(--font-weight--regular)` | — |
| `--ep-tooltip-text-color` | `var(--text-color)` | — |

### Layout

| Property | Default | State |
|---|---|---|
| `--ep-tooltip-offset` | `0.5rem` | — |
| `--ep-tooltip-offset-x` | `0rem` | — |
| `--ep-tooltip-offset-y` | `0rem` | — |
| `--ep-tooltip-z-index` | `var(--z-index--tooltip)` | — |

### Spacing

| Property | Default | State |
|---|---|---|
| `--ep-tooltip-padding` | `0.5rem` | — |

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

  interface Props {
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
  } = defineProps<Props>()

  defineOptions({ name: 'EpTooltip' })

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
// @block tooltip
// @root .ep-tooltip-wrapper
.ep-tooltip-wrapper {
  --ep-tooltip-padding: 0.5rem;
  --ep-tooltip-bg-color: var(--interface-overlay);
  --ep-tooltip-text-color: var(--text-color);
  --ep-tooltip-border-radius: var(--border-radius--default);
  --ep-tooltip-font-size: var(--font-size--small);

  // The bubble is its own surface, so it sets its own weight rather than
  // inheriting the trigger's. Without this a tooltip on a table header or any
  // other bold element came out bold.
  --ep-tooltip-font-variation-settings: var(--font-weight--regular);

  // --shadow--tooltip has existed since the shadow scale was written and was
  // wired to nothing, so a tooltip had no edge at all: --interface-overlay sits
  // two steps from --interface-surface in both themes, and with no border and
  // no shadow the bubble read as text printed onto whatever was behind it.
  --ep-tooltip-box-shadow: var(--shadow--tooltip);
  --ep-tooltip-z-index: var(--z-index--tooltip);
  --ep-tooltip-duration: var(--duration--default);
  --ep-tooltip-transition: opacity var(--ep-tooltip-duration) ease;

  // Gap between the tooltip and its trigger.
  --ep-tooltip-offset: 0.5rem;

  // Consumer nudge on either axis. Previously these existed only as var()
  // fallbacks, so there was nothing to discover and nothing to override.
  --ep-tooltip-offset-x: 0rem;
  --ep-tooltip-offset-y: 0rem;

  // Set by the placement modifiers below. A placement's main axis and its cross
  // axis are always different axes, so one pair covers both: `top-center` sets Y
  // to clear the trigger and X to centre. That is what collapses twelve
  // placements into two independent rule groups.
  --ep-tooltip-translate-x: 0rem;
  --ep-tooltip-translate-y: 0rem;

  position: relative;
  display: inline-block;
}

.ep-tooltip {
  position: absolute;
  z-index: var(--ep-tooltip-z-index);
  // An idle bubble is not laid out at all. This was `visibility: hidden`, which
  // hides the paint but keeps the box — and an absolutely positioned box inside
  // a scroll container counts toward that container's scrollable overflow, so
  // every idle tooltip in a scrolling region added scroll distance nobody could
  // see the cause of. `display` is the only property that removes the box, and
  // `visibility` was only ever standing in for it because `display` could not
  // be transitioned. `allow-discrete` now flips it at the right end of each
  // transition — on entry immediately, on exit once the fade has finished —
  // which is exactly the behaviour `visibility` was chosen for.
  display: none;
  padding: var(--ep-tooltip-padding);
  border-radius: var(--ep-tooltip-border-radius);
  background-color: var(--ep-tooltip-bg-color);
  box-shadow: var(--ep-tooltip-box-shadow);
  color: var(--ep-tooltip-text-color);
  font-size: var(--ep-tooltip-font-size);
  font-variation-settings: var(--ep-tooltip-font-variation-settings);
  opacity: 0;
  transform: translate(
    calc(var(--ep-tooltip-translate-x) + var(--ep-tooltip-offset-x)),
    calc(var(--ep-tooltip-translate-y) + var(--ep-tooltip-offset-y))
  );
  transition: var(--ep-tooltip-transition), display var(--ep-tooltip-duration) allow-discrete;
  white-space: nowrap;

  &.ep-tooltip--visible {
    display: block;
    opacity: 1;

    // An element that was not being rendered has no previous value to
    // transition from, so without a starting style it would appear at full
    // opacity on the first show. Browsers without @starting-style or
    // allow-discrete simply skip the fade; the tooltip still shows and hides.
    @starting-style {
      opacity: 0;
    }
  }

  // Main axis — which side of the trigger the tooltip sits on.
  &--top-left,
  &--top-center,
  &--top-right {
    bottom: 100%;
    --ep-tooltip-translate-y: calc(var(--ep-tooltip-offset) * -1);
  }

  &--bottom-left,
  &--bottom-center,
  &--bottom-right {
    top: 100%;
    --ep-tooltip-translate-y: var(--ep-tooltip-offset);
  }

  &--left-top,
  &--left-center,
  &--left-bottom {
    right: 100%;
    --ep-tooltip-translate-x: calc(var(--ep-tooltip-offset) * -1);
  }

  &--right-top,
  &--right-center,
  &--right-bottom {
    left: 100%;
    --ep-tooltip-translate-x: var(--ep-tooltip-offset);
  }

  // Cross axis — how it lines up along that side.
  &--top-left,
  &--bottom-left {
    left: 0;
  }

  &--top-right,
  &--bottom-right {
    right: 0;
  }

  &--top-center,
  &--bottom-center {
    left: 50%;
    --ep-tooltip-translate-x: -50%;
  }

  &--left-top,
  &--right-top {
    top: 0;
  }

  &--left-bottom,
  &--right-bottom {
    bottom: 0;
  }

  &--left-center,
  &--right-center {
    top: 50%;
    --ep-tooltip-translate-y: -50%;
  }
}

```