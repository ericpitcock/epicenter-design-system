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
| `disabled` | - | `boolean` | `false` |
| `width` | - | `string` | `'100%'` |
| `iconLeft` | - | `object` | `null` |
| `iconRight` | - | `object` | `null` |
| `iconRightClickable` | - | `boolean` | `false` |
| `iconRightVisible` | - | `boolean` | `false` |
| `size` | - | `string` | `'default'` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `click` | - | - |

## Slots
| Name | Description |
|------|-------------|
| `default` | No description available. |

## Component Code

```vue
<template>
  <div
    :class="['ep-input-styler', { 'ep-input-styler--disabled': disabled }]"
    :style="containerStyles"
  >
    <div class="ep-input-styler__inner">
      <div
        v-if="iconLeft"
        :class="['ep-input-styler__icon-left', `ep-input-styler__icon-left--${size}`]"
        :style="iconStyles"
      >
        <ep-icon v-bind="iconLeft" />
      </div>
      <div
        v-if="iconRight"
        :class="[
          'ep-input-styler__icon-right',
          `ep-input-styler__icon-right--${size}`,
          { 'ep-input-styler__icon-right--clickable': iconRightClickable }
        ]"
        :style="iconStyles"
        @click="onClick"
      >
        <ep-icon
          v-show="iconRightVisible"
          v-bind="iconRight"
        />
      </div>
    </div>
    <label
      v-show="label && hasInput || label && inputValue || hasFocus"
      class="ep-input-styler__label"
      :for="id"
    >
      {{ label }}
    </label>
    <slot />
  </div>
</template>

<script setup>
  import EpIcon from '../icon/EpIcon.vue'
  import { ref, computed } from 'vue'

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
    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '100%'
    },
    iconLeft: {
      type: Object,
      default: null
    },
    iconRight: {
      type: Object,
      default: null
    },
    iconRightClickable: {
      type: Boolean,
      default: false
    },
    iconRightVisible: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default'
    },
  })

  const emit = defineEmits(['click'])

  const sizes = ref({
    small: '22',
    default: '30',
    large: '38',
    xlarge: '46'
  })

  const containerStyles = computed(() => {
    return {
      width: props.width,
      height: `${sizes.value[props.size]}px`
    }
  })

  const iconStyles = computed(() => {
    return {
      cursor: 'pointer'
    }
  })

  const onClick = () => {
    if (!props.iconRightVisible) return
    emit('click')
  }
</script>
```

## Styles (SCSS)

```scss
.ep-input-styler {
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
  position: absolute;
  top: -7px;
  left: 7px;
  font-size: var(--font-size--small);
  background: var(--interface-surface);
  padding-inline: 1rem;
}

.ep-input-styler__icon-left,
.ep-input-styler__icon-right {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.8rem;
  height: 70%;
  max-height: 2.4rem;

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
  pointer-events: auto;
}
```