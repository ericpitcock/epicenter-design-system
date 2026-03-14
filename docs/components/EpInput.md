# EpInput



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `autofocus` | - | `boolean` | `-` |
| `clearable` | - | `boolean` | `-` |
| `disabled` | - | `boolean` | `-` |
| `error` | - | `boolean` | `-` |
| `errorEnabled` | - | `boolean` | `-` |
| `errorMessage` | - | `string` | `-` |
| `inputId` | - | `string` | `-` |
| `label` | - | `string` | `-` |
| `placeholder` | - | `string` | `-` |
| `readonly` | - | `boolean` | `-` |
| `required` | - | `boolean` | `-` |
| `size` | - | `Size` | `-` |
| `type` | - | `string` | `-` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `focus` | - | - |
| `esc` | - | - |
| `blur` | - | - |
| `enter` | - | - |
| `clear` | - | - |

## Slots
| Name | Description |
|------|-------------|
| `icon-left` | Optional icon displayed on the left side of the input |
| `icon-right` | Optional icon displayed on the right side of the input (overridden by clearable button if active) |

## Component Code

```vue
<script setup lang="ts">
  import { computed, ref, useId, useTemplateRef, watch } from 'vue'

  import type { Size } from '../../types'
  import EpInputStyler from '../input-styler/EpInputStyler.vue'

  interface EpInputProps {
    autofocus?: boolean
    clearable?: boolean
    disabled?: boolean
    error?: boolean
    errorEnabled?: boolean
    errorMessage?: string
    inputId?: string
    label?: string
    placeholder?: string
    readonly?: boolean
    required?: boolean
    size?: Size
    type?: string
  }

  const {
    autofocus = false,
    clearable = false,
    disabled = false,
    error = false,
    errorEnabled = false,
    errorMessage = '',
    inputId = '',
    label = '',
    placeholder = '',
    readonly = false,
    required = false,
    size = 'default',
    type = 'text',
  } = defineProps<EpInputProps>()

  const emit = defineEmits<{
    focus: [value: string]
    esc: [value: string]
    blur: [value: string]
    enter: [value: string]
    clear: [value: string]
  }>()

  const modelValue = defineModel<string>({ required: true })

  defineOptions({
    inheritAttrs: false,
  })

  const input = useTemplateRef<HTMLInputElement>('input')

  const hasInput = ref(!!modelValue.value)
  const computedId = ref(inputId || useId())

  const computedPlaceholder = computed(() => placeholder || label)

  const stylerProps = computed(() => ({
    id: computedId.value,
    hasInput: hasInput.value,
    label: label,
    clearable: clearable,
    disabled: disabled,
    errorEnabled: errorEnabled,
    error: error,
    errorMessage: errorMessage,
    size: size,
  }))

  const inputClasses = computed(() => ({
    [`ep-input--${size}`]: size !== 'default',
    'ep-input--disabled': disabled
  }))

  watch(modelValue, (value) => {
    hasInput.value = !!value
  })

  const onEsc = (): void => {
    input.value?.blur()
    emit('esc', modelValue.value)
  }

  const onFocus = (): void => {
    emit('focus', modelValue.value)
  }

  const onBlur = (): void => {
    emit('blur', modelValue.value)
  }

  const onKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Enter') {
      emit('enter', modelValue.value)
    }
  }

  const onClear = (): void => {
    modelValue.value = ''
    input.value?.focus()
    emit('clear', '')
  }
</script>

<template>
  <ep-input-styler
    v-bind="stylerProps"
    @click="onClear"
  >
    <template
      v-if="$slots['icon-left']"
      #icon-left
    >
      <!-- @slot Optional icon displayed on the left side of the input -->
      <slot name="icon-left" />
    </template>
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
    <template
      v-if="$slots['icon-right']"
      #icon-right
    >
      <!-- @slot Optional icon displayed on the right side of the input (overridden by clearable button if active) -->
      <slot name="icon-right" />
    </template>
  </ep-input-styler>
</template>
```

## Styles (SCSS)

```scss
.ep-input {
  --ep-input-font-size: var(--font-size--default);
  --ep-input-text-color: var(--text-color--loud);
  --ep-input-caret-color: var(--primary-color-base);
  --ep-input-border-color: var(--border-color);
  --ep-input-bg-color: var(--interface-foreground);
  --ep-input-border-radius: var(--border-radius);
  --ep-input-placeholder-text-color: var(--text-color--subtle);
  --ep-input-focus-border-color: var(--primary-color-base);
  --ep-input-disabled-text-color: var(--text-color--disabled);
  width: 100%;
  height: 100%;
  padding: 0 1.4rem;
  border: 1px solid var(--ep-input-border-color);
  border-radius: var(--ep-input-border-radius);
  background: var(--ep-input-bg-color);
  caret-color: var(--ep-input-caret-color);
  color: var(--ep-input-text-color);
  font-size: var(--ep-input-font-size);

  .ep-input-styler:has(.ep-input-styler__icon-left) & {
    padding-left: 2.8rem;
  }

  .ep-input-styler:has(.ep-input-styler__icon-right) & {
    padding-right: 2.8rem;
  }

  &::placeholder {
    color: var(--ep-input-placeholder-text-color);
  }

  &--large {
    padding: 0 1.6rem;

    .ep-input-styler:has(.ep-input-styler__icon-left) & {
      padding-left: 3.6rem;
    }

    .ep-input-styler:has(.ep-input-styler__icon-right) & {
      padding-right: 3.6rem;
    }
  }

  &--xlarge {
    padding: 0 1.8rem;

    .ep-input-styler:has(.ep-input-styler__icon-left) & {
      padding-left: 4.4rem;
    }

    .ep-input-styler:has(.ep-input-styler__icon-right) & {
      padding-right: 4.4rem;
    }
  }

  &--disabled {
    color: var(--ep-input-disabled-text-color);
    pointer-events: none;
    user-select: none;

    &::placeholder {
      color: var(--ep-input-disabled-text-color);
    }
  }

  .ep-input-styler--error & {
    border-color: var(--error-color);

    &:focus-visible {
      outline-color: var(--error-color);
    }
  }
}
```