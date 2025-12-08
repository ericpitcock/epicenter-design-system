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
    /**
     * Custom color overrides for chart series (CSS custom properties).
     * @example { '--highcharts-color-0': 'red', '--highcharts-color-1': 'blue' }
     */
    chartColors: {
      type: Object,
      default: () => ({})
    },
    /**
     * Height of the chart in pixels.
     */
    height: {
      type: Number,
      default: 400
    },
    /**
     * Highcharts configuration options object.
     */
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
