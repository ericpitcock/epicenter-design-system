# EpSelect



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `disabled` | - | `boolean` | `false` |
| `autofocus` | - | `boolean` | `false` |
| `readonly` | - | `boolean` | `false` |
| `required` | - | `boolean` | `false` |
| `width` | - | `string` | `'100%'` |
| `iconLeft` | - | `object` | `null` |
| `selectId` | - | `string` | `-` |
| `size` | - | `string` | `'default'` |
| `options` | - | `array` | `-` |
| `placeholder` | - | `string` | `'Select an option'` |
| `borderWidth` | - | `string` | `'0.1rem'` |
| `borderStyle` | - | `string` | `'solid'` |
| `borderColor` | - | `string` | `'var(--border-color)'` |
| `borderRadius` | - | `string` | `'var(--border-radius)'` |
| `backgroundColor` | - | `string` | `'var(--interface-foreground)'` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `update:modelValue` | - | - |
| `blur` | - | - |
| `focus` | - | - |


::: info
This component does not use slots.
:::

## Component Code

```vue
<template>
  <ep-input-styler v-bind="stylerProps">
    <select
      :id="computedId"
      v-model="modelValue"
      :class="['ep-select', selectClasses]"
      :style="selectStyles"
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
  </ep-input-styler>
</template>

<script setup>
  import { computed } from 'vue'

  import EpInputStyler from '../input-styler/EpInputStyler.vue'

  const props = defineProps({
    disabled: { type: Boolean, default: false },
    autofocus: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    width: { type: String, default: '100%' },
    iconLeft: { type: Object, default: null },
    selectId: { type: String, required: true },
    size: { type: String, default: 'default' },
    options: { type: Array, required: true },
    placeholder: { type: String, default: 'Select an option' },
    borderWidth: { type: String, default: '0.1rem' },
    borderStyle: { type: String, default: 'solid' },
    borderColor: { type: String, default: 'var(--border-color)' },
    borderRadius: { type: String, default: 'var(--border-radius)' },
    backgroundColor: { type: String, default: 'var(--interface-foreground)' }
  })

  const emit = defineEmits(['update:modelValue', 'blur', 'focus'])
  const modelValue = defineModel({ type: [String, Number], default: '' })

  const sizes = { small: '22', default: '30', large: '38', xlarge: '46' }

  const computedBackgroundColor = computed(() => (props.disabled ? 'transparent' : props.backgroundColor))
  const computedBorderColor = computed(() => {
    if (props.disabled) return 'var(--border-color--disabled)'
    return props.borderColor || 'var(--border-color)'
  })

  const computedId = computed(() => props.selectId || crypto.randomUUID())
  const selectClasses = computed(() => ({
    [`ep-select--${props.size}`]: props.size,
    'ep-select--has-icon': props.iconLeft,
    'ep-select--disabled': props.disabled,
  }))

  const selectStyles = computed(() => ({
    borderStyle: props.borderStyle,
    borderWidth: props.borderWidth,
    borderColor: computedBorderColor.value,
    borderRadius: props.borderRadius,
    backgroundColor: computedBackgroundColor.value,
    lineHeight: `${sizes[props.size] - 2}px`
  }))

  const stylerProps = computed(() => ({
    id: computedId.value,
    disabled: props.disabled,
    width: props.width,
    size: props.size,
    iconLeft: props.iconLeft,
    iconRight: { name: 'chevron-down' },
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
  width: 100%;
  height: 100%;
  background: var(--background-2);
  padding: 0 2.8rem 0 1.4rem;
  cursor: pointer;
  user-select: none;

  &.ep-select--has-icon {
    padding-left: 2.8rem;
  }

  &--small {
    padding: 0 2.5rem 0 0.8rem;
    font-size: var(--font-size--tiny);

    &.ep-select--has-icon {
      padding-left: 2.5rem;
    }
  }

  &--large {
    padding: 0 3.6rem 0 1.6rem;

    &.ep-select--has-icon {
      padding-left: 3.6rem;
    }
  }

  &--xlarge {
    padding: 0 4.4rem 0 1.8rem;

    &.ep-select--has-icon {
      padding-left: 4.4rem;
    }
  }

  &--disabled {
    color: var(--text-color--disabled);
    cursor: not-allowed;
    pointer-events: none;
  }
}
```