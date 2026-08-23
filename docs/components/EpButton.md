# EpButton



`EpButton` is a button. It's very exciting. It's used in many places throughout Epicenter Design System. Okay, just a couple places. But it could be used in many places.

## Usage

### Basic Button
```vue
<template>
  <ep-button @click="handleClick">
    Click me
  </ep-button>
</template>

<script setup>
  import { EpButton } from '@ericpitcock/epicenter-components-vue'

  const handleClick = () => {
    console.log('Button clicked!')
  }
</script>
```

### With Icons
```vue
<template>
  <ep-button>
    <template #icon-left>
      <icon-plus />
    </template>
    Add Item
    <template #icon-right>
      <icon-arrow-right />
    </template>
  </ep-button>
</template>

<script setup>
  import { EpButton } from '@ericpitcock/epicenter-components-vue'
  import { IconPlus, IconArrowRight } from '@epicenter/icons'
</script>
```

### Sizes and States
```vue
<template>
  <ep-button size="small">Small</ep-button>
  <ep-button size="default">Default</ep-button>
  <ep-button size="large">Large</ep-button>
  <ep-button size="xlarge">X-Large</ep-button>
  <ep-button disabled>Disabled</ep-button>
</template>

<script setup>
  import { EpButton } from '@ericpitcock/epicenter-components-vue'
</script>
```
    

## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `ariaLabel` | The aria-label of the button. | `string` | `-` |
| `disabled` | If `true`, the button will be disabled. | `boolean` | `-` |
| `size` | The size of the button. | `Size` | `-` |
| `type` | The type of the button. | `ButtonType` | `-` |

## Slots
| Name | Description |
|------|-------------|
| `icon-left` | Icon displayed on the left side of the button label |
| `default` | No description available. |
| `icon-right` | Icon displayed on the right side of the button label |


::: info
This component does not use events.
:::

## CSS Custom Properties

Set any of these with a selector that matches `.ep-button` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-button {
  --ep-button-active-bg-color: /* … */;
}
```

### Surface

| Property | Default | State |
|---|---|---|
| `--ep-button-active-bg-color` | `var(--interface-foreground)` | active |
| `--ep-button-bg-color` | `var(--interface-foreground)` | — |
| `--ep-button-disabled-bg-color` | `var(--interface-foreground)` | disabled |
| `--ep-button-hover-bg-color` | `var(--interface-foreground)` | hover |
| `--ep-button-selected-bg-color` | `var(--primary-color-up-15-base)` | selected |

### Border

| Property | Default | State |
|---|---|---|
| `--ep-button-active-border-color` | `var(--border-color)` | active |
| `--ep-button-border-color` | `var(--border-color)` | — |
| `--ep-button-border-radius` | `var(--border-radius--default)` | — |
| `--ep-button-border-style` | `solid` | — |
| `--ep-button-border-width` | `var(--border-width--hairline)` | — |
| `--ep-button-disabled-border-color` | `var(--border-color--disabled)` | disabled |
| `--ep-button-hover-border-color` | `var(--border-color)` | hover |
| `--ep-button-selected-border-color` | `var(--primary-color-base)` | selected |

### Text

| Property | Default | State |
|---|---|---|
| `--ep-button-active-text-color` | `var(--text-color)` | active |
| `--ep-button-disabled-text-color` | `var(--text-color--disabled)` | disabled |
| `--ep-button-font-size` | `var(--font-size--small)` | — |
| `--ep-button-hover-text-color` | `var(--text-color--loud)` | hover |
| `--ep-button-label-line-height` | `2rem` | — |
| `--ep-button-label-text-align` | `left` | — |
| `--ep-button-line-height` | `1` | — |
| `--ep-button-selected-text-color` | `var(--text--white)` | selected |
| `--ep-button-text-color` | `var(--text-color--loud)` | — |

### Spacing

| Property | Default | State |
|---|---|---|
| `--ep-button-gap` | `0.6rem` | — |
| `--ep-button-icon-padding-inline` | `var(--space--2)` | — |
| `--ep-button-label-padding-inline` | `var(--space--3)` | — |
| `--ep-button-padding-inline-end` | `var(--ep-button-label-padding-inline)` | — |
| `--ep-button-padding-inline-start` | `var(--ep-button-label-padding-inline)` | — |

### Box

| Property | Default | State |
|---|---|---|
| `--ep-button-height` | `var(--control-height--default)` | — |
| `--ep-button-icon-height` | `70%` | — |
| `--ep-button-icon-max-height` | `2.4rem` | — |

## Component Code

```vue
<script setup lang="ts">
  import { computed, useAttrs } from 'vue'

  import type { ButtonType, Size } from '../../types'

  interface Props {
    /** The aria-label of the button. */
    ariaLabel?: string
    /** If `true`, the button will be disabled. */
    disabled?: boolean
    /** The size of the button. */
    size?: Size
    /** The type of the button. */
    type?: ButtonType
  }

  const {
    size = 'default',
    ariaLabel = '',
    disabled = false,
    type = 'button',
  } = defineProps<Props>()

  defineOptions({ name: 'EpButton' })

  const element = computed(() => {
    const { to, href } = useAttrs()
    return to ? 'router-link' : href ? 'a' : 'button'
  })

  const computedClasses = computed(() => ({
    [`ep-button--${size}`]: size !== 'default',
    'ep-button--disabled': disabled,
  }))
</script>

<template>
  <component
    :is="element"
    :type
    :class="['ep-button', computedClasses]"
    :aria-label="ariaLabel ? ariaLabel : null"
    :disabled="disabled"
  >
    <span
      v-if="$slots['icon-left']"
      class="ep-button__icon ep-button__icon--left"
    >
      <!-- @slot Icon displayed on the left side of the button label -->
      <slot name="icon-left" />
    </span>
    <!-- @slot Default slot for button text/content -->
    <span
      v-if="$slots.default"
      class="ep-button__label"
    >
      <slot />
    </span>
    <span
      v-if="$slots['icon-right']"
      class="ep-button__icon ep-button__icon--right"
    >
      <!-- @slot Icon displayed on the right side of the button label -->
      <slot name="icon-right" />
    </span>
  </component>
</template>

```

## Styles (SCSS)

```scss
@use '../mixins/mixins' as *;

.ep-button {
  // Box
  --ep-button-height: var(--control-height--default);
  --ep-button-gap: 0.6rem;

  // A button's inline padding depends on what sits at each edge: an icon sits
  // closer to the edge than a label does. Rather than enumerate every
  // size × icon-permutation, the two source values below are picked per side.
  --ep-button-icon-padding-inline: var(--space--2);
  --ep-button-label-padding-inline: var(--space--3);
  --ep-button-padding-inline-start: var(--ep-button-label-padding-inline);
  --ep-button-padding-inline-end: var(--ep-button-label-padding-inline);

  // Surface
  --ep-button-bg-color: var(--interface-foreground);
  --ep-button-hover-bg-color: var(--interface-foreground);
  --ep-button-active-bg-color: var(--interface-foreground);
  --ep-button-selected-bg-color: var(--primary-color-up-15-base);
  --ep-button-disabled-bg-color: var(--interface-foreground);

  // Border
  --ep-button-border-width: var(--border-width--hairline);
  --ep-button-border-style: solid;
  --ep-button-border-radius: var(--border-radius--default);
  --ep-button-border-color: var(--border-color);
  --ep-button-hover-border-color: var(--border-color);
  --ep-button-active-border-color: var(--border-color);
  --ep-button-selected-border-color: var(--primary-color-base);
  --ep-button-disabled-border-color: var(--border-color--disabled);

  // Text
  --ep-button-font-size: var(--font-size--small);
  --ep-button-line-height: 1;
  --ep-button-text-color: var(--text-color--loud);
  --ep-button-hover-text-color: var(--text-color--loud);
  --ep-button-active-text-color: var(--text-color);
  // Selected sits on a primary-coloured fill in both themes, so it takes the
  // fixed light text rather than the theme's loud text colour.
  --ep-button-selected-text-color: var(--text--white);
  --ep-button-disabled-text-color: var(--text-color--disabled);

  // Parts
  --ep-button-icon-height: 70%;
  --ep-button-icon-max-height: 2.4rem;
  --ep-button-label-line-height: 2rem;
  --ep-button-label-text-align: left;

  display: inline-flex;
  max-width: max-content;
  height: var(--ep-button-height);
  flex-shrink: 0;
  align-items: center;
  border-width: var(--ep-button-border-width);
  border-style: var(--ep-button-border-style);
  border-color: var(--ep-button-border-color);
  border-radius: var(--ep-button-border-radius);
  appearance: none;
  background: var(--ep-button-bg-color);
  color: var(--ep-button-text-color);
  cursor: pointer;
  font-size: var(--ep-button-font-size);
  gap: var(--ep-button-gap);
  line-height: var(--ep-button-line-height);
  padding-inline: var(--ep-button-padding-inline-start) var(--ep-button-padding-inline-end);
  text-decoration: none;
  user-select: none;
  vertical-align: top;
  white-space: nowrap;

  // An icon at an edge pulls that side in to the tighter icon padding.
  &:has(.ep-button__icon--left) {
    --ep-button-padding-inline-start: var(--ep-button-icon-padding-inline);
  }

  &:has(.ep-button__icon--right) {
    --ep-button-padding-inline-end: var(--ep-button-icon-padding-inline);
  }

  &:not(:has(.ep-button__label)) {
    --ep-button-padding-inline-start: var(--ep-button-icon-padding-inline);
    --ep-button-padding-inline-end: var(--ep-button-icon-padding-inline);
  }

  @include hover {
    &:not([class$='--selected']):not(.ep-button--disabled):hover {
      border-color: var(--ep-button-hover-border-color);
      background: var(--ep-button-hover-bg-color);
      color: var(--ep-button-hover-text-color);
    }
  }

  &:not([class$='--selected']):active {
    border-color: var(--ep-button-active-border-color);
    background: var(--ep-button-active-bg-color);
    color: var(--ep-button-active-text-color);
  }

  &--disabled {
    border-color: var(--ep-button-disabled-border-color);
    background: var(--ep-button-disabled-bg-color);
    color: var(--ep-button-disabled-text-color);
    pointer-events: none;
  }

  &--selected {
    border-color: var(--ep-button-selected-border-color);
    background: var(--ep-button-selected-bg-color);
    color: var(--ep-button-selected-text-color);
  }

  &__icon {
    display: inline-flex;
    height: var(--ep-button-icon-height);
    max-height: var(--ep-button-icon-max-height);
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }

  &__label {
    flex: 1;
    line-height: var(--ep-button-label-line-height);
    pointer-events: none;
    text-align: var(--ep-button-label-text-align);
  }
}

// Each size reassigns the ladder; the padding rules above do the rest.
.ep-button--small {
  --ep-button-height: var(--control-height--small);
  --ep-button-font-size: var(--font-size--tiny);
  --ep-button-gap: 0.4rem;
  --ep-button-icon-padding-inline: 0.3rem;
  --ep-button-label-padding-inline: 0.6rem;
}

.ep-button--large {
  --ep-button-height: var(--control-height--large);
  --ep-button-font-size: var(--font-size--default);
  --ep-button-gap: 0.8rem;
  --ep-button-icon-padding-inline: 1rem;
  --ep-button-label-padding-inline: 1.4rem;
}

.ep-button--xlarge {
  --ep-button-height: var(--control-height--xlarge);
  --ep-button-font-size: var(--font-size--body);
  --ep-button-gap: 1rem;
  --ep-button-icon-padding-inline: var(--space--3);
  --ep-button-label-padding-inline: 1.8rem;
}

// async/loading button pattern
.ep-button__async-label {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.ep-button__async-text {
  transition: opacity var(--duration--slow) ease;
}

.ep-button__async-label--loading > .ep-button__async-text {
  opacity: 0;
}

.ep-button__async-loader {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0;
}


```