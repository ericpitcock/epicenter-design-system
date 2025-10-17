# EpInput



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `inputId` | - | `string` | `''` |
| `label` | - | `string` | `''` |
| `type` | - | `string` | `'text'` |
| `placeholder` | - | `string` | `''` |
| `iconLeft` | - | `object` | `null` |
| `iconRight` | - | `object` | `null` |
| `clearable` | - | `boolean` | `false` |
| `disabled` | - | `boolean` | `false` |
| `autofocus` | - | `boolean` | `false` |
| `required` | - | `boolean` | `false` |
| `readonly` | - | `boolean` | `false` |
| `size` | - | `string` | `'default'` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `focus` | - | - |
| `esc` | - | - |
| `blur` | - | - |
| `enter` | - | - |
| `clear` | - | - |


::: info
This component does not use slots.
:::

## Component Code

```vue
<template>
  <ep-input-styler
    v-bind="stylerProps"
    @click="onClear"
  >
    <input
      :id="computedId"
      ref="input"
      v-model="modelValue"
      :class="['ep-input', inputClasses]"
      :type="type"
      :placeholder="computedPlaceholder"
      :disabled="disabled"
      :autofocus="autofocus"
      :readonly="readonly"
      :required="required"
      v-bind="$attrs"
      @focus="onFocus"
      @blur="onBlur"
      @keydown="onKeyDown"
      @keydown.esc="onEsc"
    >
  </ep-input-styler>
</template>

<script setup>
  import { computed, ref, watch } from 'vue'

  import EpInputStyler from '../input-styler/EpInputStyler.vue'

  defineOptions({
    name: 'EpInput',
    inheritAttrs: false,
  })

  const props = defineProps({
    inputId: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    iconLeft: {
      type: Object,
      default: null
    },
    iconRight: {
      type: Object,
      default: null
    },
    clearable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default'
    },
  })

  const emit = defineEmits(['focus', 'esc', 'blur', 'enter', 'clear'])

  const hasFocus = ref(false)
  const hasInput = ref(false)
  const input = ref(null)

  const modelValue = defineModel({
    type: String,
    required: true
  })

  const computedId = ref(props.inputId || crypto.randomUUID())

  const computedPlaceholder = computed(() => props.placeholder || props.label)

  const stylerProps = computed(() => ({
    id: computedId.value,
    hasFocus: hasFocus.value,
    hasInput: hasInput.value,
    label: props.label,
    disabled: props.disabled,
    size: props.size,
    iconLeft: props.iconLeft,
    iconRight: props.clearable ? { ...props.iconRight, name: 'close' } : props.iconRight,
    iconRightClickable: props.clearable,
    iconRightVisible: props.clearable && hasInput.value || !!props.iconRight
  }))

  const inputClasses = computed(() => ({
    [`ep-input--${props.size}`]: props.size,
    'ep-input--has-icon-left': props.iconLeft,
    'ep-input--has-icon-right': props.iconRight,
    'ep-input--disabled': props.disabled
  }))

  watch(modelValue, (value) => {
    hasInput.value = !!value
  })

  const onEsc = () => {
    input.value?.blur()
    emit('esc', modelValue.value)
  }

  const onFocus = () => {
    hasFocus.value = true
    emit('focus', modelValue.value)
  }

  const onBlur = () => {
    hasFocus.value = false
    emit('blur', modelValue.value)
  }

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      emit('enter', modelValue.value)
    }
  }

  const onClear = () => {
    modelValue.value = ''
    hasInput.value = false
    input.value?.focus()
    emit('clear', '')
  }
</script>
```

## Styles (SCSS)

```scss
input.ep-input {
  --ep-input-font-size: var(--font-size--default);
  --ep-input-text-color: var(--text-color--loud);
  --ep-input-caret-color: var(--primary-color-base);
  --ep-input-border-color: var(--border-color);
  --ep-input-bg-color: var(--interface-foreground);
  --ep-input-border-radius: var(--border-radius);
  --ep-input-placeholder-text-color: var(--text-color--placeholder);
  --ep-input-focus-border-color: var(--primary-color-base);
  --ep-input-disabled-text-color: var(--text-color--disabled);
  width: 100%;
  height: 100%;
  padding: 0 1.4rem;
  caret-color: var(--ep-input-caret-color);
  font-size: var(--ep-input-font-size);
  color: var(--ep-input-text-color);
  background: var(--ep-input-bg-color);
  border: 1px solid var(--ep-input-border-color);
  border-radius: var(--ep-input-border-radius);

  &.ep-input--has-icon-left {
    padding-left: 2.8rem;
  }

  &::placeholder {
    color: var(--ep-input-placeholder-text-color);
  }

  &--large {
    padding: 0 1.6rem;

    &.ep-input--has-icon-left {
      padding-left: 3.6rem;
    }

    &.ep-input--has-icon-right {
      padding-right: 3.6rem;
    }
  }

  &--xlarge {
    padding: 0 1.8rem;

    &.ep-input--has-icon-left {
      padding-left: 4.4rem;
    }

    &.ep-input--has-icon-right {
      padding-right: 4.4rem;
    }
  }

  &--disabled {
    color: var(--ep-input-disabled-text-color);
    cursor: not-allowed;
    pointer-events: none;

    &::placeholder {
      color: var(--ep-input-disabled-text-color);
    }
  }
}
```