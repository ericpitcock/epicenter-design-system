# EpRadio



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `id` | The ID attribute for the radio input element. | `string` | `-` |
| `label` | Label text displayed next to the radio button. | `string` | `-` |
| `name` | The name attribute for the radio input (groups radios together). | `string` | `-` |
| `value` | The value for this radio option. | `string` | `-` |
| `disabled` | If true, disables the radio button. | `boolean` | `false` |
| `required` | If true, marks the radio as required. | `boolean` | `false` |


::: info
This component does not use events, slots.
:::

## Component Code

```vue
<template>
  <label
    :for="id"
    :class="['ep-radio', classes]"
  >
    <input
      :id="id"
      v-model="modelValue"
      type="radio"
      :name
      :value
      :disabled
      :required
    >
    <span class="ep-radio__dot" />
    {{ label }}
  </label>
</template>

<script setup>
  import { computed } from 'vue'

  const modelValue = defineModel({
    type: String,
    required: true
  })

  const props = defineProps({
    /**
     * The ID attribute for the radio input element.
     */
    id: {
      type: String,
      required: true,
    },
    /**
     * Label text displayed next to the radio button.
     */
    label: {
      type: String,
      required: true,
    },
    /**
     * The name attribute for the radio input (groups radios together).
     */
    name: {
      type: String,
      required: true,
    },
    /**
     * The value for this radio option.
     */
    value: {
      type: String,
      required: true,
    },
    /**
     * If true, disables the radio button.
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * If true, marks the radio as required.
     */
    required: {
      type: Boolean,
      default: false,
    },
  })

  const classes = computed(() => ({
    'ep-radio--checked': modelValue.value === props.value,
    'ep-radio--disabled': props.disabled,
  }))
</script>

```

## Styles (SCSS)

```scss
:root {
  --ep-radio-checked-bg-color: var(--primary-color-base);
  --ep-radio-checked-border-color: var(--primary-color-300);
  --ep-radio-unchecked-bg-color: var(--interface-overlay);
  --ep-radio-unchecked-border-color: var(--border-color--lighter);
  --ep-radio-disabled-bg-color: transparent;
  --ep-radio-disabled-border-color: var(--border-color--disabled);
}

.ep-radio {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  width: fit-content;
  cursor: pointer;

  &__dot {
    width: 14px;
    height: 14px;
    background-color: var(--ep-radio-unchecked-bg-color);
    border: 1px solid var(--ep-radio-unchecked-border-color);
    border-radius: 50%;
  }

  &--checked {
    color: var(--text-color--loud);

    .ep-radio__dot {
      background-color: var(--ep-radio-checked-bg-color);
      border-color: var(--ep-radio-checked-border-color);
    }
  }

  &--disabled {
    color: var(--text-color--disabled);
    cursor: default;

    .ep-radio__dot {
      background-color: var(--ep-radio-disabled-bg-color);
      border-color: var(--ep-radio-disabled-border-color);
    }
  }
}

.ep-radio input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}
```