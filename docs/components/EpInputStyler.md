# EpInputStyler



`EpInputStyler` is a style wrapper for `<input>` elements. It provides icons and common appearance for `EpInput` and `EpSelect` components.
    

## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `id` | - | `string` | `''` |
| `hasFocus` | - | `boolean` | `false` |
| `hasInput` | - | `boolean` | `false` |
| `inputValue` | - | `string` | `''` |
| `label` | - | `string` | `''` |
| `clearable` | - | `boolean` | `false` |
| `disabled` | - | `boolean` | `false` |
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
    <div
      :class="[
        'ep-input-styler',
        { 'ep-input-styler--disabled': disabled }
      ]"
      :style="containerStyles"
    >
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
          v-if="$slots['icon-right']"
          :class="[
            'ep-input-styler__icon-right',
            `ep-input-styler__icon-right--${size}`
          ]"
        >
          <slot name="icon-right" />
          <Cancel01
            v-if="clearable && hasInput"
            class="ep-input-styler__icon-right--clickable"
            @click="$emit('click')"
          />
        </div>
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup>
  import Cancel01 from '@ericpitcock/epicenter-icons/icons/Cancel01'
  import { computed } from 'vue'

  defineOptions({
    name: 'EpInputStyler',
  })

  const props = defineProps({
    id: {
      type: String,
      default: ''
    },
    hasFocus: {
      type: Boolean,
      default: false
    },
    hasInput: {
      type: Boolean,
      default: false
    },
    inputValue: {
      type: String,
      default: ''
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
    // iconRightClickable: {
    //   type: Boolean,
    //   default: false
    // },
    // iconRightVisible: {
    //   type: Boolean,
    //   default: false
    // },
    size: {
      type: String,
      default: 'default'
    },
  })

  defineEmits(['click'])

  const sizes = {
    small: '22',
    default: '30',
    large: '38',
    xlarge: '46'
  }

  const containerStyles = computed(() => {
    return {
      height: `${sizes[props.size]}px`
    }
  })

  // const onClick = () => {
  //   if (!props.iconRightVisible) return
  //   emit('click')
  // }
</script>
```

## Styles (SCSS)

```scss
.ep-input-styler__container {
  width: 100%;
  position: relative;
}

.ep-input-styler--disabled {
  color: var(--text-color--disabled);
  pointer-events: none;
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

  &--small {
    width: 2.5rem;
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
```