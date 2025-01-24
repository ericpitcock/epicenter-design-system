# EpCheckbox



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `id` | - | `string` | `-` |
| `label` | - | `string` | `-` |
| `name` | - | `string` | `-` |
| `value` | - | `string` | `-` |
| `checked` | - | `boolean` | `false` |
| `disabled` | - | `boolean` | `false` |
| `indeterminate` | - | `boolean` | `false` |
| `required` | - | `boolean` | `false` |

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
    // required
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    // optional
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
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


## Styles

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