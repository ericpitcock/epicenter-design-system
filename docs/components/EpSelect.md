# EpSelect



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `disabled` | - | `boolean` | `false` |
| `autofocus` | - | `boolean` | `false` |
| `readonly` | - | `boolean` | `false` |
| `required` | - | `boolean` | `false` |
| `selectId` | - | `string` | `-` |
| `size` | - | `string` | `'default'` |
| `options` | - | `array` | `-` |
| `placeholder` | - | `string` | `'Select an option'` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `update:modelValue` | - | - |
| `blur` | - | - |
| `focus` | - | - |

## Slots
| Name | Description |
|------|-------------|
| `icon-left` | No description available. |

## Component Code

```vue
<template>
  <ep-input-styler v-bind="stylerProps">
    <template #icon-left>
      <slot name="icon-left" />
    </template>
    <select
      :id="computedId"
      v-model="modelValue"
      :class="['ep-select', selectClasses]"
      :disabled="disabled"
      :autofocus="autofocus"
      :required="required"
      @blur="onBlur"
      @focus="onFocus"
      @change="onChange"
    >
      <option
        disabled
        value=""
      >
        {{ placeholder }}
      </option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :disabled="option.disabled"
      >
        {{ option.label }}
      </option>
    </select>
    <template #icon-right>
      <ArrowDown01 />
    </template>
  </ep-input-styler>
</template>

<script setup>
  import ArrowDown01 from '@ericpitcock/epicenter-icons/icons/ArrowDown01'
  import { computed } from 'vue'

  import EpInputStyler from '../input-styler/EpInputStyler.vue'

  const props = defineProps({
    disabled: { type: Boolean, default: false },
    autofocus: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    selectId: { type: String, required: true },
    size: { type: String, default: 'default' },
    options: { type: Array, required: true },
    placeholder: { type: String, default: 'Select an option' },
  })

  const emit = defineEmits(['update:modelValue', 'blur', 'focus'])
  const modelValue = defineModel({ type: [String, Number], default: '' })

  const selectClasses = computed(() => ({
    [`ep-select--${props.size}`]: props.size,
    'ep-select--disabled': props.disabled,
  }))

  const computedId = computed(() => props.selectId || crypto.randomUUID())

  const stylerProps = computed(() => ({
    id: computedId.value,
    disabled: props.disabled,
    size: props.size,
    iconRightClickable: false,
    iconRightVisible: true
  }))

  const onBlur = () => emit('blur')
  const onChange = (event) => {
    event.target.blur()
    modelValue.value = event.target.value
  }
  const onFocus = () => emit('focus')
</script>

```

## Styles (SCSS)

```scss
select.ep-select {
  --ep-select-border-width: 0.1rem;
  --ep-select-border-style: solid;
  --ep-select-border-color: var(--border-color);
  --ep-select-border-radius: var(--border-radius);
  --ep-select-bg-color: var(--interface-foreground);
  width: 100%;
  height: 100%;
  background: var(--ep-select-bg-color);
  padding: 0 2.8rem 0 1.4rem;
  border: var(--ep-select-border-width) var(--ep-select-border-style) var(--ep-select-border-color);
  border-radius: var(--ep-select-border-radius);
  cursor: pointer;
  user-select: none;
  align-items: center;

  // Apply left padding only when a real icon is present
  .ep-input-styler:has(.ep-input-styler__icon-left:not(:empty)) &,
  &.ep-select--has-icon {
    padding-left: 2.8rem;
  }

  &--small {
    padding: 0 2.5rem 0 0.8rem;
    font-size: var(--font-size--tiny);

    .ep-input-styler:has(.ep-input-styler__icon-left:not(:empty)) &,
    &.ep-select--has-icon {
      padding-left: 2.5rem;
    }
  }

  &--large {
    padding: 0 3.6rem 0 1.6rem;

    .ep-input-styler:has(.ep-input-styler__icon-left:not(:empty)) &,
    &.ep-select--has-icon {
      padding-left: 3.6rem;
    }
  }

  &--xlarge {
    padding: 0 4.4rem 0 1.8rem;

    .ep-input-styler:has(.ep-input-styler__icon-left:not(:empty)) &,
    &.ep-select--has-icon {
      padding-left: 4.4rem;
    }
  }

  &--disabled {
    color: var(--text-color--disabled);
    border-color: var(--border-color--disabled);
    cursor: not-allowed;
    pointer-events: none;
  }
}
```