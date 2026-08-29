<script setup lang="ts">
  import { onBeforeUnmount, onMounted, ref, useId } from 'vue'

  interface Props {
    chartColors?: Record<string, string>
    height?: number
    options?: Record<string, unknown>
  }

  const { chartColors = {}, height = 400, options = {} } = defineProps<Props>()

  defineOptions({ name: 'EpChart' })

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

  // Styled mode cycles series colours modulo colorCount, so a chart with more
  // series than that repeats a colour. The stylesheet publishes how many
  // --chart-sequence-NN tokens exist; reading it here means the cycle is the
  // palette, and stays so when the palette grows.
  const paletteSize = (element: HTMLElement): number => {
    const declared = getComputedStyle(element).getPropertyValue('--chart-sequence-count')
    return Number.parseInt(declared, 10) || 10
  }

  const drawChart = async (): Promise<void> => {
    const Highcharts = (await import('highcharts')).default
    const element = document.getElementById(chartId)!

    // A shallow spread would let an options object that names `chart` drop
    // styledMode with it, which turns every series black — the defaults have to
    // merge deeply. Caller options come last so they still win.
    chart.value = Highcharts.chart(chartId, Highcharts.merge(
      chartDefaults,
      { chart: { colorCount: paletteSize(element) } },
      options
    ))
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
