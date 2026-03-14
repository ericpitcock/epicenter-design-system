# EpChart



`EpChart` is a wrapper for Highcharts. Right now it supports basic charts like bar, column, and pie charts. It’s a good starting point for adding more chart types in the future.

## Usage
```vue
<template>
  <ep-chart v-bind="chartProps" />
</template>

<script setup>
  import { EpChart } from '@ericpitcock/epicenter-components-vue'

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
| `chartColors` | - | `Record` | `-` |
| `height` | - | `number` | `-` |
| `options` | - | `Record` | `-` |


::: info
This component does not use events, slots.
:::

## Component Code

```vue
<script setup lang="ts">
  import { computed, onBeforeUnmount, onMounted, ref, useId } from 'vue'

  interface EpChartProps {
    chartColors?: Record<string, string>
    height?: number
    options?: Record<string, unknown>
  }

  const { chartColors = {}, height = 400, options = {} } = defineProps<EpChartProps>()

  // Highcharts chart instance
  const chart = ref<{ reflow: () => void; destroy: () => void } | null>(null)

  const chartDefaults: Record<string, unknown> = {
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
  const chartId = `ep-chart-${useId()}`

  const chartOptions = computed(() => ({
    ...chartDefaults,
    ...options
  }))

  const drawChart = async (): Promise<void> => {
    const Highcharts = (await import('highcharts')).default
    chart.value = Highcharts.chart(chartId, chartOptions.value)
  }

  const reflowChart = (): void => {
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

<template>
  <div
    :id="chartId"
    :style="[{ height: `${height}px` }, chartColors]"
  />
</template>

```