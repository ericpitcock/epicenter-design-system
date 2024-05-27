<template>
  <div
    :id="chartId"
    :style="{ height: `${height}px` }"
  />
</template>

<script setup>
  import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
  import Highcharts from 'highcharts'

  const props = defineProps({
    chartColors: {
      type: Array,
      default: () => []
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
  const chartId = `chart-${Math.random().toString(36).substring(7)}`

  const chartOptions = computed(() => ({
    ...chartDefaults,
    ...props.options
  }))

  const drawChart = () => {
    chart.value = Highcharts.chart(chartId, chartOptions.value)
  }

  onMounted(() => {
    drawChart()
  })

  onBeforeUnmount(() => {
    if (chart.value) {
      chart.value.destroy()
    }
  })
</script>
