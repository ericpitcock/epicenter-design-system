# EpRadio



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `disabled` | If true, disables the radio button. | `boolean` | `-` |
| `id` | The ID attribute for the radio input element. | `string` | `-` |
| `label` | Label text displayed next to the radio button. | `string` | `-` |
| `name` | The name attribute for the radio input (groups radios together). | `string` | `-` |
| `required` | If true, marks the radio as required. | `boolean` | `-` |
| `value` | The value for this radio option. | `string` | `-` |

## Slots
| Name | Description |
|------|-------------|
| `default` | No description available. |


::: info
This component does not use events.
:::

## Component Code

```vue
<script setup lang="ts">
  import { computed } from 'vue'

  interface EpRadioProps {
    /** If true, disables the radio button. */
    disabled?: boolean
    /** The ID attribute for the radio input element. */
    id: string
    /** Label text displayed next to the radio button. */
    label: string
    /** The name attribute for the radio input (groups radios together). */
    name: string
    /** If true, marks the radio as required. */
    required?: boolean
    /** The value for this radio option. */
    value: string
  }

  const { value, disabled = false, required = false } = defineProps<EpRadioProps>()

  const modelValue = defineModel<string>({ required: true })

  const classes = computed(() => ({
    'ep-radio--checked': modelValue.value === value,
    'ep-radio--disabled': disabled,
  }))
</script>

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
    <slot>
      {{ label }}
    </slot>
  </label>
</template>

```

## Styles (SCSS)

```scss
.ep-radio {
  --ep-radio-checked-bg-color: var(--primary-color-base);
  --ep-radio-checked-border-color: var(--primary-color-300);
  --ep-radio-unchecked-bg-color: var(--interface-overlay);
  --ep-radio-unchecked-border-color: var(--border-color--lighter);
  --ep-radio-disabled-bg-color: transparent;
  --ep-radio-disabled-border-color: var(--border-color--disabled);
  position: relative;
  display: inline-flex;
  width: fit-content;
  align-items: center;
  cursor: pointer;
  gap: 1rem;

  &__dot {
    width: 14px;
    height: 14px;
    border: 1px solid var(--ep-radio-unchecked-border-color);
    border-radius: 50%;
    background-color: var(--ep-radio-unchecked-bg-color);
  }

  &--checked {
    color: var(--text-color--loud);

    .ep-radio__dot {
      border-color: var(--ep-radio-checked-border-color);
      background-color: var(--ep-radio-checked-bg-color);
    }
  }

  &--disabled {
    color: var(--text-color--disabled);
    pointer-events: none;

    .ep-radio__dot {
      border-color: var(--ep-radio-disabled-border-color);
      background-color: var(--ep-radio-disabled-bg-color);
    }
  }

  &:is(.ep-radio--checked).ep-radio--disabled {
    .ep-radio__dot {
      background-color: var(--text-color--disabled);
    }
  }
}

.ep-radio input {
  position: absolute;
  cursor: pointer;
  opacity: 0;
}
```