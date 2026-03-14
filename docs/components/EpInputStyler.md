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

## Component Code

```vue
<script setup lang="ts">
  import Cancel01 from '@ericpitcock/epicenter-icons-vue/Cancel01'
  import { computed } from 'vue'

  import type { Size } from '../../types'

  interface EpInputStylerProps {
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
  } = defineProps<EpInputStylerProps>()

  defineEmits<{
    click: []
  }>()

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
.ep-input-styler__container {
  --ep-input-width: 100%;
  --ep-input-height: 3rem;
  width: var(--ep-input-width);
}

.ep-input-styler {
  position: relative;
  height: var(--ep-input-height);

  &--small {
    --ep-input-height: 2.2rem;
  }

  &--large {
    --ep-input-height: 3.8rem;
  }

  &--xlarge {
    --ep-input-height: 4.6rem;
  }
}

.ep-input-styler--disabled {
  color: var(--text-color--disabled);
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
  margin-bottom: 1rem;
  color: var(--text-color--loud);
  user-select: none;
  white-space: nowrap;
}

.ep-input-styler__icon-left,
.ep-input-styler__icon-right {
  display: flex;
  width: 2.8rem;
  height: 100%;
  align-items: center;
  justify-content: center;

  .ep-icon {
    --ep-icon-width: 45%;
    --ep-icon-height: 45%;
  }

  &--large {
    width: 3.6rem;
  }

  &--xlarge {
    width: 4.4rem;
  }
}

.ep-input-styler__icon-right--clickable {
  cursor: pointer;
  pointer-events: auto;
}

.ep-input-styler--error .ep-input,
.ep-input-styler--error .ep-select {
  border-color: var(--error-color--border);

  &:focus-visible {
    outline-color: var(--error-color--border);
  }
}

.ep-input-styler__error-message {
  margin-top: 0.5rem;
  color: var(--error-color--text);
  font-size: var(--font-size--small);
}
```