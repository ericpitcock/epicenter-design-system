`EpDatePicker` wraps flatpickr. You can select so many dates. Or just one.

## Do not import flatpickr's stylesheet

`flatpickr` is an **optional peer dependency**, so install it if you use this component:

```shell
npm install flatpickr
```

But do **not** import `flatpickr/dist/flatpickr.min.css`. `epicenter-styles` ships a
complete tokenized replacement for it (`scss/vendor/_flatpickr.scss`), which is already
in the stylesheet you import. flatpickr's own CSS arrives unlayered and therefore beats
every cascade layer, so adding it turns the calendar back into flatpickr's default light
theme — visibly wrong in dark mode.

::: tip
If your date picker renders as a white calendar on a dark page, something in your app is
importing flatpickr's stylesheet. Remove it.
:::

## Usage
```vue
<template>
  <ep-date-picker v-bind="datePickerProps" />
</template>

<script setup>
import { EpDatePicker } from '@ericpitcock/epicenter-components-vue'

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