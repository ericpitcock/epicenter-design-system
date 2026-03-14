# EpCheckbox



`EpCheckbox` is my finest work. It can exist in one of two ways: checked or unchecked. Think about that.

## Usage
```vue
<template>
  <ep-checkbox
    v-for="checkbox in checkboxes"
    :key="checkbox.id"
    v-bind="checkbox"
    v-model="checkbox.checked"
    @update:modelValue="updateChecked($event, checkbox.label, checkbox.id)"
  />
</template>

<script setup>
  import { ref } from 'vue'
  import { EpCheckbox } from '@ericpitcock/epicenter-components-vue'

  const checkboxes = ref([
      {
        id: 'checkbox1',
        label: 'Checked',
        name: 'checkboxes',
        value: 'checked',
        checked: true,
      },
      {
        id: 'checkbox2',
        label: 'Indeterminate',
        name: 'checkboxes',
        value: 'indeterminate',
        checked: false,
        indeterminate: true,
      },
      {
        id: 'checkbox3',
        label: 'Disabled',
        name: 'checkboxes',
        value: 'disabled',
        checked: false,
        disabled: true,
      },
    ])

    const updateChecked = (event, label, id) => {
      const checkbox = checkboxes.value.find(checkbox => checkbox.id === id)
      checkbox.checked = event
      checkbox.indeterminate = false
    }
</script>
```
    

## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `checked` | Whether the checkbox is checked. | `boolean` | `-` |
| `disabled` | Whether the checkbox is disabled. | `boolean` | `-` |
| `id` | The ID of the checkbox. | `string` | `-` |
| `indeterminate` | Whether the checkbox is indeterminate. | `boolean` | `-` |
| `label` | The label for the checkbox. | `string` | `-` |
| `name` | The name of the checkbox. | `string` | `-` |
| `required` | Whether the checkbox is required. | `boolean` | `-` |
| `value` | The value of the checkbox. | `string` | `-` |

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

  interface EpCheckboxProps {
    /** Whether the checkbox is checked. */
    checked?: boolean
    /** Whether the checkbox is disabled. */
    disabled?: boolean
    /** The ID of the checkbox. */
    id: string
    /** Whether the checkbox is indeterminate. */
    indeterminate?: boolean
    /** The label for the checkbox. */
    label: string
    /** The name of the checkbox. */
    name: string
    /** Whether the checkbox is required. */
    required?: boolean
    /** The value of the checkbox. */
    value: string
  }

  const {
    checked = false,
    disabled = false,
    indeterminate = false,
    required = false,
  } = defineProps<EpCheckboxProps>()

  const modelValue = defineModel<boolean>({ required: true })

  const classes = computed(() => {
    return {
      'ep-checkbox--checked': modelValue.value,
      'ep-checkbox--disabled': disabled,
      'ep-checkbox--indeterminate': indeterminate,
    }
  })
</script>

<template>
  <label
    :for="id"
    :class="['ep-checkbox', classes]"
  >
    <input
      :id="id"
      v-model="modelValue"
      type="checkbox"
      :name
      :value
      :checked
      :disabled
      :indeterminate
      :required
    >
    <slot>
      {{ label }}
    </slot>
  </label>
</template>

```

## Styles (SCSS)

```scss
.ep-checkbox {
  --ep-checkbox-checked-bg-color: var(--primary-color-base);
  --ep-checkbox-checked-border-color: var(--primary-color-300);
  --ep-checkbox-unchecked-bg-color: var(--interface-overlay);
  --ep-checkbox-unchecked-border-color: var(--border-color--lighter);
  --ep-checkbox-disabled-bg-color: transparent;
  --ep-checkbox-disabled-border-color: var(--border-color--disabled);
  display: inline-flex;
  width: fit-content;
  align-items: center;
  cursor: pointer;
  gap: 1rem;
  user-select: none;

  &--checked,
  &--indeterminate {
    color: var(--text-color--loud);
  }

  &--disabled {
    color: var(--text-color--disabled);
    pointer-events: none;
  }

  input {
    position: relative;
    width: 14px;
    height: 14px;
    flex-shrink: 0;
    border: 1px solid var(--ep-checkbox-unchecked-border-color);
    border-radius: 2px;
    appearance: none;
    background-color: var(--ep-checkbox-unchecked-bg-color);
    cursor: inherit;

    &:checked {
      border-color: var(--ep-checkbox-checked-border-color);
      background-color: var(--ep-checkbox-checked-bg-color);

      &::after {
        position: absolute;
        top: 1px;
        left: 4px;
        width: 4px;
        height: 8px;
        border: solid white;
        border-width: 0 2px 2px 0;
        content: '';
        transform: rotate(45deg);
      }
    }

    &:indeterminate {
      border-color: var(--ep-checkbox-checked-border-color);
      background-color: var(--ep-checkbox-checked-bg-color);

      &::after {
        position: absolute;
        top: 5px;
        left: 2px;
        width: 8px;
        height: 2px;
        background-color: white;
        content: '';
      }
    }

    &:disabled {
      border-color: var(--ep-checkbox-disabled-border-color);
      background-color: var(--ep-checkbox-disabled-bg-color);
    }
  }
}
```