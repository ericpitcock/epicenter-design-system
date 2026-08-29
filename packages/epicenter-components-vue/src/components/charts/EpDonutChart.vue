<script setup lang="ts">
  import { computed, onMounted, ref, useTemplateRef } from 'vue'

  interface Props {
    animate?: boolean
    data: number[]
    height?: number
    labels: string[]
    margin?: number
    value?: string
    valueTextClass?: string
    width?: number
  }

  const {
    data,
    animate = true,
    width = 200,
    height = 200,
    margin = 0,
    value = 'Value',
    valueTextClass = 'font-size--jumbo',
  } = defineProps<Props>()

  defineOptions({ name: 'EpDonutChart' })

  const container = useTemplateRef<HTMLDivElement>('container')
  const tooltip = useTemplateRef<HTMLDivElement>('tooltip')
  const epDonut = useTemplateRef<HTMLDivElement>('ep-donut')

  const tooltipVisible = ref(false)
  const tooltipStyles = ref<{ top: string; left: string }>({
    top: '0',
    left: '0',
  })
  const tooltipText = ref<string | number>('tooltip')

  const containerStyles = computed(() => ({
    width: `${width}px`,
    height: `${height}px`,
  }))

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let d3: any = null

  onMounted(async () => {
    d3 = await import('d3')
    drawChart()
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onMouseOver = (event: MouseEvent, d: any): void => {
    tooltipVisible.value = true
    const containerRect = container.value!.getBoundingClientRect()
    const tooltipRect = tooltip.value!.getBoundingClientRect()
    const x = event.clientX - containerRect.left
    const y = event.clientY - containerRect.top
    let tooltipX = x + 10
    let tooltipY = y + 10
    if (x > containerRect.width / 2) {
      tooltipX = x + 10
    } else {
      tooltipX = x - tooltipRect.width - 10
    }
    if (y > containerRect.height / 2) {
      tooltipY = y + 10
    } else {
      tooltipY = y - tooltipRect.height - 10
    }
    tooltipStyles.value = {
      top: `${tooltipY}px`,
      left: `${tooltipX}px`,
    }
    tooltipText.value = d.data
  }

  const onMouseOut = (): void => {
    tooltipVisible.value = false
  }

  const drawChart = (): void => {
    const radius = Math.min(width, height) / 2 - margin

    const svg = d3.select(epDonut.value)
      .append('svg')
      .attr('width', width)
      .attr('height', height)

    const g = svg.append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`)

    // The palette lives in CSS: _donut-chart.scss defines one arc class per
    // --chart-sequence-NN token and publishes how many there are. Reading the
    // count is all this needs to know to wrap around, and the colours stay
    // overridable and theme-aware because they never leave the stylesheet.
    const paletteSize = Number.parseInt(
      getComputedStyle(container.value!).getPropertyValue('--chart-sequence-count'),
      10
    ) || 1

    const arc = d3.arc()
      .innerRadius(radius - 26)
      .outerRadius(radius)

    const pie = d3.pie()
      .sort(null)
      .value((d: number) => d)

    const arcs = g.selectAll('arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc')

    arcs.append('path')
      .attr('d', arc)
      .attr('class', (_d: unknown, i: number) => `ep-donut-chart__arc--${i % paletteSize}`)
      .attr('stroke', 'var(--interface-surface)')
      .attr('stroke-width', '0.3rem')
      .on('mouseover', onMouseOver)
      .on('mousemove', onMouseOver)
      .on('mouseout', onMouseOut)

    if (animate) {
      arcs.select('path')
        .attr('d', arc)
        .transition()
        .duration(700)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .attrTween('d', function(d: any) {
          const interpolate = d3.interpolate(d.startAngle, d.endAngle)
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return function(t: number): any {
            d.endAngle = interpolate(t)
            return arc(d)
          }
        })
    }
  }
</script>

<template>
  <div
    ref="container"
    class="ep-donut-chart"
    :style="containerStyles"
  >
    <div
      v-show="tooltipVisible"
      ref="tooltip"
      class="ep-donut-chart__tooltip"
      :style="tooltipStyles"
    >
      {{ tooltipText }}
    </div>
    <div ref="ep-donut" />
    <div :class="['ep-donut-chart__value', valueTextClass]">
      {{ value }}
    </div>
  </div>
</template>