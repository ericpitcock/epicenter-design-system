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

## CSS Custom Properties

Set any of these with a selector that matches `.ep-select` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-select {
  --ep-select-bg-color: /* … */;
}
```

### Surface

| Property | Default | State |
|---|---|---|
| `--ep-select-bg-color` | `var(--interface-foreground)` | — |

### Border

| Property | Default | State |
|---|---|---|
| `--ep-select-border-color` | `var(--border-color)` | — |
| `--ep-select-border-radius` | `var(--border-radius--default)` | — |
| `--ep-select-border-style` | `solid` | — |
| `--ep-select-border-width` | `var(--border-width--hairline)` | — |
| `--ep-select-disabled-border-color` | `var(--border-color--disabled)` | disabled |
| `--ep-select-focus-border-color` | `var(--primary-color-base)` | focus |

### Text

| Property | Default | State |
|---|---|---|
| `--ep-select-disabled-text-color` | `var(--text-color--disabled)` | disabled |
| `--ep-select-font-size` | `inherit` | — |
| `--ep-select-text-color` | `inherit` | — |

### Box

| Property | Default | State |
|---|---|---|
| `--ep-select-height` | `100%` | — |
| `--ep-select-width` | `100%` | — |

### Spacing

| Property | Default | State |
|---|---|---|
| `--ep-select-icon-padding-inline` | `var(--control-icon-width--default)` | — |
| `--ep-select-padding-inline` | `var(--control-padding-inline--default)` | — |
| `--ep-select-padding-inline-end` | `var(--ep-select-icon-padding-inline)` | — |
| `--ep-select-padding-inline-start` | `var(--ep-select-padding-inline)` | — |

## Component Code

```vue
<script setup lang="ts">
  import ArrowDown01 from '@ericpitcock/epicenter-icons-vue/ArrowDown01'
  import { computed, ref, useId } from 'vue'

  import type { SelectOption, Size } from '../../types'
  import EpInputStyler from '../input-styler/EpInputStyler.vue'

  interface Props {
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
    required = false,
    size = 'default',
  } = defineProps<Props>()

  const emit = defineEmits<{
    'update:modelValue': [value: string | number]
    blur: []
    focus: []
  }>()

  const modelValue = defineModel<string | number>({ default: '' })

  defineOptions({
    name: 'EpSelect',
    inheritAttrs: false,
  })

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
      v-bind="$attrs"
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
  // Box
  --ep-select-width: 100%;
  --ep-select-height: 100%;

  // A select always reserves room for its chevron on the trailing edge, and for
  // a leading icon only when one is present. Same two-source-value shape as the
  // button, so sizes reassign the sources rather than every permutation.
  --ep-select-icon-padding-inline: var(--control-icon-width--default);
  --ep-select-padding-inline: var(--control-padding-inline--default);
  --ep-select-padding-inline-start: var(--ep-select-padding-inline);
  --ep-select-padding-inline-end: var(--ep-select-icon-padding-inline);

  // Surface
  --ep-select-bg-color: var(--interface-foreground);

  // Border
  --ep-select-border-width: var(--border-width--hairline);
  --ep-select-border-style: solid;
  --ep-select-border-color: var(--border-color);
  --ep-select-border-radius: var(--border-radius--default);
  --ep-select-focus-border-color: var(--primary-color-base);
  --ep-select-disabled-border-color: var(--border-color--disabled);

  // Text
  --ep-select-font-size: inherit;
  --ep-select-text-color: inherit;
  --ep-select-disabled-text-color: var(--text-color--disabled);

  width: var(--ep-select-width);
  height: var(--ep-select-height);
  align-items: center;
  border: var(--ep-select-border-width) var(--ep-select-border-style) var(--ep-select-border-color);
  border-radius: var(--ep-select-border-radius);
  background: var(--ep-select-bg-color);
  color: var(--ep-select-text-color);
  cursor: pointer;
  font-size: var(--ep-select-font-size);
  padding-block: 0;
  padding-inline: var(--ep-select-padding-inline-start) var(--ep-select-padding-inline-end);
  user-select: none;

  // Apply leading padding only when a real icon is present.
  .ep-input-styler:has(.ep-input-styler__icon-left:not(:empty)) &,
  &.ep-select--has-icon {
    --ep-select-padding-inline-start: var(--ep-select-icon-padding-inline);
  }

  &:focus-visible {
    border-color: var(--ep-select-focus-border-color);
  }

  &--disabled {
    border-color: var(--ep-select-disabled-border-color);
    color: var(--ep-select-disabled-text-color);
    pointer-events: none;
  }
}

.ep-select--small {
  // Small is the one step off the shared ladder: a select this short needs a
  // tighter chevron gutter than a 2.2rem input's icon slot would give it.
  --ep-select-icon-padding-inline: 2.5rem;
  --ep-select-padding-inline: var(--space--2);
  --ep-select-font-size: var(--font-size--tiny);
}

.ep-select--large {
  --ep-select-icon-padding-inline: var(--control-icon-width--large);
  --ep-select-padding-inline: var(--control-padding-inline--large);
}

.ep-select--xlarge {
  --ep-select-icon-padding-inline: var(--control-icon-width--xlarge);
  --ep-select-padding-inline: var(--control-padding-inline--xlarge);
}

```