# EpInputStyler



`EpInputStyler` is a style wrapper for `<input>` elements. It provides icons and common appearance for `EpInput` and `EpSelect` components.
    

## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `clearable` | - | `boolean` | `-` |
| `disabled` | - | `boolean` | `-` |
| `error` | - | `boolean` | `-` |
| `errorEnabled` | - | `boolean` | `-` |
| `errorMessage` | - | `string` | `-` |
| `hasInput` | - | `boolean` | `-` |
| `id` | - | `string` | `-` |
| `label` | - | `string` | `-` |
| `size` | - | `Size` | `-` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `click` | - | - |

## Slots
| Name | Description |
|------|-------------|
| `icon-left` | No description available. |
| `icon-right` | No description available. |
| `default` | No description available. |

## CSS Custom Properties

Set any of these with a selector that matches `.ep-input-styler__container` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-input-styler__container {
  --ep-input-styler-disabled-text-color: /* … */;
}
```

### Text

| Property | Default | State |
|---|---|---|
| `--ep-input-styler-disabled-text-color` | `var(--text-color--disabled)` | disabled |
| `--ep-input-styler-error-font-size` | `var(--font-size--small)` | error |
| `--ep-input-styler-error-text-color` | `var(--status-danger-text-color)` | error |
| `--ep-input-styler-label-text-color` | `var(--text-color--loud)` | — |

### Border

| Property | Default | State |
|---|---|---|
| `--ep-input-styler-error-border-color` | `var(--status-danger-border-color)` | error |

### Spacing

| Property | Default | State |
|---|---|---|
| `--ep-input-styler-error-margin-block` | `0.5rem 0` | error |
| `--ep-input-styler-label-margin-block` | `0 1rem` | — |

### Box

| Property | Default | State |
|---|---|---|
| `--ep-input-styler-height` | `var(--control-height--default)` | — |
| `--ep-input-styler-icon-size` | `45%` | — |
| `--ep-input-styler-icon-width` | `var(--control-icon-width--default)` | — |
| `--ep-input-styler-width` | `100%` | — |

## Component Code

```vue
<script setup lang="ts">
  import Cancel01 from '@ericpitcock/epicenter-icons-vue/Cancel01'
  import { computed } from 'vue'

  import type { Size } from '../../types'

  interface Props {
    clearable?: boolean
    disabled?: boolean
    error?: boolean
    errorEnabled?: boolean
    errorMessage?: string
    hasInput?: boolean
    id?: string
    label?: string
    size?: Size
  }

  const {
    clearable = false,
    disabled = false,
    error = false,
    errorEnabled = false,
    errorMessage = '',
    hasInput = false,
    id = '',
    label = '',
    size = 'default',
  } = defineProps<Props>()

  defineEmits<{
    click: []
  }>()

  defineOptions({ name: 'EpInputStyler' })

  const computedClasses = computed(() => ({
    [`ep-input-styler--${size}`]: size !== 'default',
    'ep-input-styler--disabled': disabled,
    'ep-input-styler--error': error,
  }))
</script>

<template>
  <div class="ep-input-styler__container">
    <label
      v-if="label"
      class="ep-input-styler__label"
      :for="id"
    >
      {{ label }}
    </label>
    <div :class="['ep-input-styler', computedClasses]">
      <div class="ep-input-styler__inner">
        <div
          v-if="$slots['icon-left']"
          :class="[
            'ep-input-styler__icon-left',
            `ep-input-styler__icon-left--${size}`
          ]"
        >
          <slot name="icon-left" />
        </div>
        <div
          v-if="$slots['icon-right'] || clearable"
          :class="[
            'ep-input-styler__icon-right',
            `ep-input-styler__icon-right--${size}`
          ]"
        >
          <slot
            v-if="$slots['icon-right'] && !clearable"
            name="icon-right"
          />
          <Cancel01
            v-if="clearable && hasInput && !disabled"
            class="ep-input-styler__icon-right--clickable"
            @click="$emit('click')"
          />
        </div>
      </div>
      <slot />
    </div>
    <p
      v-if="errorEnabled"
      class="ep-input-styler__error-message"
    >
      {{ errorMessage || '\u00A0' }}
    </p>
  </div>
</template>
```

## Styles (SCSS)

```scss
// The wrapper every input and select renders inside. It owns the control's
// outer size and the icon slots; the field itself owns its border and text.
// @root .ep-input-styler__container
.ep-input-styler__container {
  --ep-input-styler-width: 100%;
  --ep-input-styler-height: var(--control-height--default);
  --ep-input-styler-icon-width: var(--control-icon-width--default);
  --ep-input-styler-icon-size: 45%;
  --ep-input-styler-label-margin-block: 0 1rem;
  --ep-input-styler-label-text-color: var(--text-color--loud);
  --ep-input-styler-disabled-text-color: var(--text-color--disabled);
  --ep-input-styler-error-text-color: var(--status-danger-text-color);
  --ep-input-styler-error-border-color: var(--status-danger-border-color);
  --ep-input-styler-error-margin-block: 0.5rem 0;
  --ep-input-styler-error-font-size: var(--font-size--small);

  width: var(--ep-input-styler-width);
}

.ep-input-styler {
  position: relative;
  height: var(--ep-input-styler-height);

  &--small {
    --ep-input-styler-height: var(--control-height--small);
    --ep-input-styler-icon-width: var(--control-icon-width--small);
  }

  &--large {
    --ep-input-styler-height: var(--control-height--large);
    --ep-input-styler-icon-width: var(--control-icon-width--large);
  }

  &--xlarge {
    --ep-input-styler-height: var(--control-height--xlarge);
    --ep-input-styler-icon-width: var(--control-icon-width--xlarge);
  }
}

.ep-input-styler--disabled {
  color: var(--ep-input-styler-disabled-text-color);
  user-select: none;
}

.ep-input-styler__inner {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  pointer-events: none;

  &:has(.ep-input-styler__icon-left) {
    justify-content: flex-start;
  }

  &:has(.ep-input-styler__icon-right) {
    justify-content: flex-end;
  }

  &:has(.ep-input-styler__icon-left):has(.ep-input-styler__icon-right) {
    display: flex;
    justify-content: space-between;
  }
}

.ep-input-styler__label {
  display: block;
  color: var(--ep-input-styler-label-text-color);
  margin-block: var(--ep-input-styler-label-margin-block);
  user-select: none;
  white-space: nowrap;
}

.ep-input-styler__icon-left,
.ep-input-styler__icon-right {
  display: flex;
  width: var(--ep-input-styler-icon-width);
  height: 100%;
  align-items: center;
  justify-content: center;

  .ep-icon {
    --ep-icon-width: var(--ep-input-styler-icon-size);
    --ep-icon-height: var(--ep-input-styler-icon-size);
  }

  // The size modifier lands on the icon element itself as well as the wrapper,
  // so both routes to a width are kept.
  &--large {
    --ep-input-styler-icon-width: var(--control-icon-width--large);
  }

  &--xlarge {
    --ep-input-styler-icon-width: var(--control-icon-width--xlarge);
  }
}

.ep-input-styler__icon-right--clickable {
  cursor: pointer;
  pointer-events: auto;
}

.ep-input-styler--error .ep-input,
.ep-input-styler--error .ep-select {
  border-color: var(--ep-input-styler-error-border-color);

  &:focus-visible {
    outline-color: var(--ep-input-styler-error-border-color);
  }
}

.ep-input-styler__error-message {
  color: var(--ep-input-styler-error-text-color);
  font-size: var(--ep-input-styler-error-font-size);
  margin-block: var(--ep-input-styler-error-margin-block);
}

```