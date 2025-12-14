# EpInputStyler



`EpInputStyler` is a style wrapper for `<input>` elements. It provides icons and common appearance for `EpInput` and `EpSelect` components.
    

## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `id` | - | `string` | `''` |
| `hasInput` | - | `boolean` | `false` |
| `label` | - | `string` | `''` |
| `clearable` | - | `boolean` | `false` |
| `disabled` | - | `boolean` | `false` |
| `error` | - | `boolean` | `false` |
| `errorMessage` | - | `string` | `''` |
| `size` | - | `string` | `'default'` |

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
            v-if="clearable && hasInput"
            class="ep-input-styler__icon-right--clickable"
            @click="$emit('click')"
          />
        </div>
      </div>
      <slot />
    </div>
    <p class="ep-input-styler__error-message">
      {{ errorMessage || '\u00A0' }}
    </p>
  </div>
</template>

<script setup>
  import Cancel01 from '@ericpitcock/epicenter-icons/epicenter-icons/Cancel01'
  import { computed } from 'vue'

  const props = defineProps({
    id: {
      type: String,
      default: ''
    },
    hasInput: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    errorMessage: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'default'
    },
  })

  const computedClasses = computed(() => ({
    [`ep-input-styler--${props.size}`]: props.size !== 'default',
    'ep-input-styler--disabled': props.disabled,
    'ep-input-styler--error': props.error,
  }))

  defineEmits(['click'])
</script>
```

## Styles (SCSS)

```scss
.ep-input-styler__container {
  --ep-input-height: 3rem;
  width: 100%;
}

.ep-input-styler {
  position: relative;
  height: var(--ep-input-height);

  &--large {
    --ep-input-height: 3.8rem;
  }

  &--xlarge {
    --ep-input-height: 4.6rem;
  }
}

.ep-input-styler--disabled {
  color: var(--text-color--disabled);
}

.ep-input-styler__inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  pointer-events: none;

  &:has(.ep-input-styler__icon-left):has(.ep-input-styler__icon-right) {
    display: flex;
    justify-content: space-between;
  }

  &:has(.ep-input-styler__icon-left) {
    justify-content: flex-start;
  }

  &:has(.ep-input-styler__icon-right) {
    justify-content: flex-end;
  }
}

.ep-input-styler__label {
  display: block;
  margin-bottom: 1rem;
  color: var(--text-color--loud);
}

.ep-input-styler__icon-left,
.ep-input-styler__icon-right {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.8rem;
  height: 100%;

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

.ep-input-styler__error-message {
  margin-top: 1rem;
  font-size: var(--font-size--small);
  color: var(--error-color);
}
```