# EpChart



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
    

## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `chartColors` | - | `object` | `{}` |
| `height` | - | `number` | `400` |
| `options` | - | `object` | `{}` |


::: info
This component does not use events, slots.
:::

## Component Code

```vue
<template>
  <div
    :id="chartId"
    :style="[{ height: `${height}px` }, chartColors]"
  />
</template>

<script setup>
  import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

  defineOptions({
    name: 'EpChart',
  })

  const props = defineProps({
    // override or add colors beyond the default 0-13
    // '--highcharts-color-0': 'red',
    chartColors: {
      type: Object,
      default: () => ({})
    },
    height: {
      type: Number,
      default: 400
    },
    options: {
      type: Object,
      default: () => ({})
    },
  })

  const chart = ref(null)
  const chartDefaults = {
    accessibility: {
      enabled: false,
    },
    chart: {
      styledMode: true,
    },
    credits: {
      enabled: false
    },
    title: {
      text: undefined
    },
    tooltip: {
      enabled: false
    },
  }
  const chartId = `ep-chart-${Math.random().toString(36).substring(7)}`

  const chartOptions = computed(() => ({
    ...chartDefaults,
    ...props.options
  }))

  const drawChart = async () => {
    const Highcharts = (await import('highcharts')).default
    chart.value = Highcharts.chart(chartId, chartOptions.value)
  }

  const reflowChart = () => {
    if (chart.value) {
      chart.value.reflow()
    }
  }

  defineExpose({
    reflowChart
  })

  onMounted(() => {
    drawChart()
  })

  onBeforeUnmount(() => {
    if (chart.value) {
      chart.value.destroy()
    }
  })
</script>

```