`EpDatePicker` wraps flatpickr. You can select so many dates. Or just one.

## Usage
```vue
<template>
  <ep-date-picker v-bind="datePickerProps" />
</template>

<script setup>
import { EpDatePicker } from '@epicenter/vue-components'

const datePickerProps = {
  enableCloseOnSelect: false,
  inputProps: {
    size: 'xlarge',
  },
  dateFormat: 'm/d/Y',
  mode: 'single',
  positionX: 'left',
  positionY: 'auto',
}
</script>
```