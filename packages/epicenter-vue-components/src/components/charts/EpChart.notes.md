`EpChart` is a wrapper for Highcharts. Right now it supports basic charts like bar, column, and pie charts. It’s a good starting point for adding more chart types in the future.

## Usage
```vue
<template>
  <ep-chart v-bind="chartProps" />
</template>

<script setup>
  import { EpChart } from '@epicenter/vue-components'

  const chartProps = {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
        },
      ],
    },
  }
</script>
```