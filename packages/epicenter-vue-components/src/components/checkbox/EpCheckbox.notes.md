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