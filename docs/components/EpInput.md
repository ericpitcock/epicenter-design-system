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

## CSS Custom Properties

Set any of these with a selector that matches `.ep-input` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-input {
  --ep-input-bg-color: /* … */;
}
```

### Surface

| Property | Default | State |
|---|---|---|
| `--ep-input-bg-color` | `var(--interface-foreground)` | — |

### Border

| Property | Default | State |
|---|---|---|
| `--ep-input-border-color` | `var(--border-color)` | — |
| `--ep-input-border-radius` | `var(--border-radius--default)` | — |
| `--ep-input-border-style` | `solid` | — |
| `--ep-input-border-width` | `var(--border-width--hairline)` | — |
| `--ep-input-error-border-color` | `var(--status-danger-border-color)` | error |
| `--ep-input-focus-border-color` | `var(--primary-color-base)` | focus |

### Text

| Property | Default | State |
|---|---|---|
| `--ep-input-caret-color` | `var(--primary-color-base)` | — |
| `--ep-input-disabled-text-color` | `var(--text-color--disabled)` | disabled |
| `--ep-input-font-size` | `var(--font-size--default)` | — |
| `--ep-input-placeholder-text-color` | `var(--text-color--subtle)` | — |
| `--ep-input-text-color` | `var(--text-color--loud)` | — |

### Spacing

| Property | Default | State |
|---|---|---|
| `--ep-input-icon-padding-inline` | `var(--control-icon-width--default)` | — |
| `--ep-input-padding-inline` | `var(--control-padding-inline--default)` | — |
| `--ep-input-padding-inline-end` | `var(--ep-input-padding-inline)` | — |
| `--ep-input-padding-inline-start` | `var(--ep-input-padding-inline)` | — |

## Component Code

```vue
<script setup lang="ts">
  import { computed, ref, useId, useTemplateRef } from 'vue'

  import type { Size } from '../../types'
  import EpInputStyler from '../input-styler/EpInputStyler.vue'

  interface Props {
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
  } = defineProps<Props>()

  const emit = defineEmits<{
    focus: [value: string]
    esc: [value: string]
    blur: [value: string]
    enter: [value: string]
    clear: [value: string]
  }>()

  const modelValue = defineModel<string>({ required: true })

  defineOptions({
    name: 'EpInput',
    inheritAttrs: false,
  })

  const input = useTemplateRef<HTMLInputElement>('input')

  const computedId = ref(inputId || useId())
  const hasInput = computed(() => !!modelValue.value)

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
  // The field fills its styler wrapper, which owns the control's outer size, so
  // width and height are not exposed here. In v1 those names lived on this block
  // and meant the outer dimensions; they now belong to the styler, and reusing
  // them for the inner field would collide with the migration.

  // Leading and trailing padding are picked independently: an icon slot on a
  // side widens the padding on that side to the icon slot's own width.
  --ep-input-icon-padding-inline: var(--control-icon-width--default);
  --ep-input-padding-inline: var(--control-padding-inline--default);
  --ep-input-padding-inline-start: var(--ep-input-padding-inline);
  --ep-input-padding-inline-end: var(--ep-input-padding-inline);

  // Surface
  --ep-input-bg-color: var(--interface-foreground);

  // Border
  --ep-input-border-width: var(--border-width--hairline);
  --ep-input-border-style: solid;
  --ep-input-border-color: var(--border-color);
  --ep-input-border-radius: var(--border-radius--default);
  --ep-input-focus-border-color: var(--primary-color-base);
  --ep-input-error-border-color: var(--status-danger-border-color);

  // Text
  --ep-input-font-size: var(--font-size--default);
  --ep-input-text-color: var(--text-color--loud);
  --ep-input-caret-color: var(--primary-color-base);
  --ep-input-placeholder-text-color: var(--text-color--subtle);
  --ep-input-disabled-text-color: var(--text-color--disabled);

  width: 100%;
  height: 100%;
  border-width: var(--ep-input-border-width);
  border-style: var(--ep-input-border-style);
  border-color: var(--ep-input-border-color);
  border-radius: var(--ep-input-border-radius);
  background: var(--ep-input-bg-color);
  caret-color: var(--ep-input-caret-color);
  color: var(--ep-input-text-color);
  font-size: var(--ep-input-font-size);
  padding-block: 0;
  padding-inline: var(--ep-input-padding-inline-start) var(--ep-input-padding-inline-end);

  .ep-input-styler:has(.ep-input-styler__icon-left) & {
    --ep-input-padding-inline-start: var(--ep-input-icon-padding-inline);
  }

  .ep-input-styler:has(.ep-input-styler__icon-right) & {
    --ep-input-padding-inline-end: var(--ep-input-icon-padding-inline);
  }

  &::placeholder {
    color: var(--ep-input-placeholder-text-color);
  }

  // Previously declared but never consumed, so setting it did nothing.
  &:focus-visible {
    border-color: var(--ep-input-focus-border-color);
  }

  &--large {
    --ep-input-icon-padding-inline: var(--control-icon-width--large);
    --ep-input-padding-inline: var(--control-padding-inline--large);
  }

  &--xlarge {
    --ep-input-icon-padding-inline: var(--control-icon-width--xlarge);
    --ep-input-padding-inline: var(--control-padding-inline--xlarge);
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
    border-color: var(--ep-input-error-border-color);

    &:focus-visible {
      border-color: var(--ep-input-error-border-color);
      outline-color: var(--ep-input-error-border-color);
    }
  }
}

```