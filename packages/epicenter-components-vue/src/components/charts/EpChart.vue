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
