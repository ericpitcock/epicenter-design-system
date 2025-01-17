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

<script setup>
  import { computed, ref, onMounted, useTemplateRef } from 'vue'

  defineOptions({
    name: 'EpDonutChart',
  })

  const props = defineProps({
    animate: {
      type: Boolean,
      default: true,
    },
    width: {
      type: Number,
      default: 200,
    },
    height: {
      type: Number,
      default: 200,
    },
    margin: {
      type: Number,
      default: 0,
    },
    data: {
      type: Array,
      required: true,
    },
    labels: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
      default: 'Value',
    },
    valueTextClass: {
      type: String,
      default: 'font-size--jumbo',
    },
  })

  const container = useTemplateRef('container')
  const tooltip = useTemplateRef('tooltip')
  const epDonut = useTemplateRef('ep-donut')

  const tooltipVisible = ref(false)
  const tooltipStyles = ref({
    top: 0,
    left: 0,
  })
  const tooltipText = ref('tooltip')

  const containerStyles = computed(() => ({
    width: `${props.width}px`,
    height: `${props.height}px`,
  }))

  let d3 = null // Reference for dynamic import

  onMounted(async () => {
    d3 = await import('d3') // Dynamically import d3
    drawChart()
  })

  const handleMouseOver = (event, d) => {
    tooltipVisible.value = true
    const containerRect = container.value.getBoundingClientRect()
    const tooltipRect = tooltip.value.getBoundingClientRect()
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

  const handleMouseOut = () => {
    tooltipVisible.value = false
  }

  const drawChart = () => {
    const data = props.data
    const width = props.width
    const height = props.height
    const margin = props.margin
    const radius = Math.min(width, height) / 2 - margin

    const svg = d3.select(epDonut.value)
      .append('svg')
      .attr('width', width)
      .attr('height', height)

    const g = svg.append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`)

    const color = d3.scaleOrdinal()
      .range([
        'var(--chart-sequence-00)',
        'var(--chart-sequence-01)',
        'var(--chart-sequence-02)',
        'var(--chart-sequence-03)',
      ])

    const arc = d3.arc()
      .innerRadius(radius - 26)
      .outerRadius(radius)

    const pie = d3.pie()
      .sort(null)
      .value((d) => d)

    const arcs = g.selectAll('arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc')

    arcs.append('path')
      .attr('d', arc)
      .attr('fill', (d) => color(d.data))
      .attr('stroke', 'var(--interface-surface)')
      .attr('stroke-width', '0.3rem')
      .on('mouseover', handleMouseOver)
      .on('mousemove', handleMouseOver)
      .on('mouseout', handleMouseOut)

    if (props.animate) {
      arcs.select('path')
        .attr('d', arc)
        .transition()
        .duration(700)
        .attrTween('d', function(d) {
          const interpolate = d3.interpolate(d.startAngle, d.endAngle)
          return function(t) {
            d.endAngle = interpolate(t)
            return arc(d)
          }
        })
    }
  }
</script>