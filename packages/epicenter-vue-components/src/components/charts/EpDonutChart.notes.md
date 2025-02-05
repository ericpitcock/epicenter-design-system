`EpDonutChart` is a D3-based donut chart component. Very basic. But it animates, bro.

## Usage
```vue
<template>
  <ep-donut-chart v-bind="chartProps" />
</template>

<script setup>
import { EpDonutChart } from '@epicenter/vue-components'

const chartProps = {
  data: [28, 33, 44, 51],
  labels: ['Active', 'Inactive', 'Archived', 'Unknown'],
  value: '156',
}
</script>
```