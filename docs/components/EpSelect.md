# EpSelect



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `autofocus` | - | `boolean` | `-` |
| `disabled` | - | `boolean` | `-` |
| `error` | - | `boolean` | `-` |
| `errorEnabled` | - | `boolean` | `-` |
| `errorMessage` | - | `string` | `-` |
| `label` | - | `string` | `-` |
| `options` | - | `Array` | `-` |
| `placeholder` | - | `string` | `-` |
| `readonly` | - | `boolean` | `-` |
| `required` | - | `boolean` | `-` |
| `selectId` | - | `string` | `-` |
| `size` | - | `Size` | `-` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `update:modelValue` | - | - |
| `blur` | - | - |
| `focus` | - | - |

## Slots
| Name | Description |
|------|-------------|
| `icon-left` | Optional icon displayed on the left side of the select |

## Component Code

```vue
<script setup lang="ts">
  import ArrowDown01 from '@ericpitcock/epicenter-icons-vue/ArrowDown01'
  import { computed, ref, useId } from 'vue'

  import type { SelectOption, Size } from '../../types'
  import EpInputStyler from '../input-styler/EpInputStyler.vue'

  interface EpSelectProps {
    autofocus?: boolean
    disabled?: boolean
    error?: boolean
    errorEnabled?: boolean
    errorMessage?: string
    label?: string
    options: SelectOption[]
    placeholder?: string
    readonly?: boolean
    required?: boolean
    selectId: string
    size?: Size
  }

  const {
    selectId,
    autofocus = false,
    disabled = false,
    error = false,
    errorEnabled = false,
    errorMessage = '',
    label = '',
    placeholder = 'Select an option',
    readonly = false,
    required = false,
    size = 'default',
  } = defineProps<EpSelectProps>()

  const emit = defineEmits<{
    'update:modelValue': [value: string | number]
    blur: []
    focus: []
  }>()

  const modelValue = defineModel<string | number>({ default: '' })

  const selectClasses = computed(() => ({
    [`ep-select--${size}`]: size !== 'default',
    'ep-select--disabled': disabled,
    'ep-select--error': error,
  }))

  const computedId = ref(selectId || useId())

  const stylerProps = computed(() => ({
    id: computedId.value,
    label: label,
    disabled: disabled,
    size: size,
    errorEnabled: errorEnabled,
    error: error,
    errorMessage: errorMessage,
    iconRightClickable: false,
    iconRightVisible: true
  }))

  const onBlur = (): void => emit('blur')
  const onChange = (event: Event): void => {
    const target = event.target as HTMLSelectElement
    target.blur()
    modelValue.value = target.value
  }
  const onFocus = (): void => emit('focus')
</script>

<template>
  <ep-input-styler v-bind="stylerProps">
    <template #icon-left>
      <!-- @slot Optional icon displayed on the left side of the select -->
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
        v-if="placeholder"
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

```

## Styles (SCSS)

```scss
.ep-select {
  --ep-select-border-width: 0.1rem;
  --ep-select-border-style: solid;
  --ep-select-border-color: var(--border-color);
  --ep-select-border-radius: var(--border-radius);
  --ep-select-bg-color: var(--interface-foreground);
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 0 2.8rem 0 1.4rem;
  border: var(--ep-select-border-width) var(--ep-select-border-style) var(--ep-select-border-color);
  border-radius: var(--ep-select-border-radius);
  background: var(--ep-select-bg-color);
  cursor: pointer;
  user-select: none;

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
    border-color: var(--border-color--disabled);
    color: var(--text-color--disabled);
    pointer-events: none;
  }
}
```