# EpSelect



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `label` | Label text for the select (used as placeholder when no option is selected). | `string` | `''` |
| `disabled` | If true, disables the select element. | `boolean` | `false` |
| `autofocus` | If true, automatically focuses the select on mount. | `boolean` | `false` |
| `readonly` | If true, makes the select read-only. | `boolean` | `false` |
| `required` | If true, marks the select as a required field. | `boolean` | `false` |
| `selectId` | The ID attribute for the select element. | `string` | `-` |
| `size` | The size variant of the select. | `string` | `'default'` |
| `options` | Array of option objects with 'label', 'value', and optional 'disabled' properties. | `array` | `-` |
| `placeholder` | Placeholder text shown when no option is selected. | `string` | `'Select an option'` |
| `errorEnabled` | If true, enables error state styling and message display. | `boolean` | `false` |
| `error` | If true, displays the select in error state. | `boolean` | `false` |
| `errorMessage` | Error message to display below the select. | `string` | `''` |

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
<script setup>
  import ArrowDown01 from '@ericpitcock/epicenter-icons/epicenter-icons/ArrowDown01'
  import { computed, ref, useId } from 'vue'

  import EpInputStyler from '../input-styler/EpInputStyler.vue'

  const props = defineProps({
    /**
     * Label text for the select (used as placeholder when no option is selected).
     */
    label: { type: String, default: '' },
    /**
     * If true, disables the select element.
     */
    disabled: { type: Boolean, default: false },
    /**
     * If true, automatically focuses the select on mount.
     */
    autofocus: { type: Boolean, default: false },
    /**
     * If true, makes the select read-only.
     */
    readonly: { type: Boolean, default: false },
    /**
     * If true, marks the select as a required field.
     */
    required: { type: Boolean, default: false },
    /**
     * The ID attribute for the select element.
     */
    selectId: { type: String, required: true },
    /**
     * The size variant of the select.
     * @values 'small', 'default', 'large', 'xlarge'
     */
    size: { type: String, default: 'default' },
    /**
     * Array of option objects with 'label', 'value', and optional 'disabled' properties.
     */
    options: { type: Array, required: true },
    /**
     * Placeholder text shown when no option is selected.
     */
    placeholder: { type: String, default: 'Select an option' },
    /**
     * If true, enables error state styling and message display.
     */
    errorEnabled: {
      type: Boolean,
      default: false
    },
    /**
     * If true, displays the select in error state.
     */
    error: { type: Boolean, default: false },
    /**
     * Error message to display below the select.
     */
    errorMessage: { type: String, default: '' },
  })

  const emit = defineEmits(['update:modelValue', 'blur', 'focus'])
  const modelValue = defineModel({ type: [String, Number], default: '' })

  const selectClasses = computed(() => ({
    [`ep-select--${props.size}`]: props.size !== 'default',
    'ep-select--disabled': props.disabled,
    'ep-select--error': props.error,
  }))

  const computedId = ref(props.selectId || useId())

  const stylerProps = computed(() => ({
    id: computedId.value,
    label: props.label,
    disabled: props.disabled,
    size: props.size,
    errorEnabled: props.errorEnabled,
    error: props.error,
    errorMessage: props.errorMessage,
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