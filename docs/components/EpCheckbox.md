# EpCheckbox


## Description
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
  import { EpCheckbox } from '@epicenter/vue-components'

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
| `id` | The ID of the checkbox. | `string` | `-` |
| `label` | The label for the checkbox. | `string` | `-` |
| `name` | The name of the checkbox. | `string` | `-` |
| `value` | The value of the checkbox. | `string` | `-` |
| `checked` | Whether the checkbox is checked. | `boolean` | `false` |
| `disabled` | Whether the checkbox is disabled. | `boolean` | `false` |
| `indeterminate` | Whether the checkbox is indeterminate. | `boolean` | `false` |
| `required` | Whether the checkbox is required. | `boolean` | `false` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
No events available.

## Slots
| Name | Description |
|------|-------------|
No slots available.

## Component Code

```vue
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
    {{ label }}
  </label>
</template>

<script setup>
  defineOptions({
    name: 'EpCheckbox'
  })
  import { computed } from 'vue'

  const modelValue = defineModel({
    type: Boolean,
    required: true
  })

  const props = defineProps({
    /**
     * The ID of the checkbox.
     */
    id: {
      type: String,
      required: true
    },
    /**
     * The label for the checkbox.
     */
    label: {
      type: String,
      required: true
    },
    /**
     * The name of the checkbox.
     */
    name: {
      type: String,
      required: true
    },
    /**
     * The value of the checkbox.
     */
    value: {
      type: String,
      required: true
    },
    /**
     * Whether the checkbox is checked.
     */
    checked: {
      type: Boolean,
      default: false
    },
    /**
     * Whether the checkbox is disabled.
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Whether the checkbox is indeterminate.
     */
    indeterminate: {
      type: Boolean,
      default: false
    },
    /**
     * Whether the checkbox is required.
     */
    required: {
      type: Boolean,
      default: false
    },
  })

  const classes = computed(() => {
    return {
      'ep-checkbox--checked': modelValue.value,
      'ep-checkbox--disabled': props.disabled,
      'ep-checkbox--indeterminate': props.indeterminate,
    }
  })
</script>

```


## Styles (SCSS)

```scss
.ep-checkbox {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  user-select: none;

  &--checked,
  &--indeterminate {
    color: var(--text-color--loud);
  }

  &--disabled {
    color: var(--text-color--disabled);
    cursor: default;
  }

  input {
    appearance: auto;
    cursor: inherit;
  }

  // label {
  //   color: inherit;
  //   cursor: inherit;
  // }
}
```