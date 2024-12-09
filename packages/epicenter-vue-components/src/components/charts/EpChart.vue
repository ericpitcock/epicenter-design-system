<template>
  <div
    :id="chartId"
    :style="[{ height: `${height}px` }, chartColors]"
  />
</template>

<script setup>
  import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
  import Highcharts from 'highcharts'

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

  const drawChart = () => {
    chart.value = Highcharts.chart(chartId, chartOptions.value)
  }

  // eslint-disable-next-line no-unused-vars
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
