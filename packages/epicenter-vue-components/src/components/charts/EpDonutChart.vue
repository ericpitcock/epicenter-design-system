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
  import * as d3 from 'd3'
  import { computed, ref, onMounted, useTemplateRef } from 'vue'

  defineOptions({
    name: 'EpDonutChart',
  })

  const props = defineProps({
    animate: {
      type: Boolean,
      default: true
    },
    width: {
      type: Number,
      default: 200
    },
    height: {
      type: Number,
      default: 200
    },
    margin: {
      type: Number,
      default: 0
    },
    data: {
      type: Array,
      required: true
    },
    labels: {
      type: Array,
      required: true
    },
    // tooltipText: {
    //   type: String,
    //   default: 'Tooltip'
    // },
    value: {
      type: String,
      default: 'Value'
    },
    valueTextClass: {
      type: String,
      default: 'font-size--jumbo'
    }
  })

  const container = useTemplateRef('container')
  const tooltip = useTemplateRef('tooltip')
  const epDonut = useTemplateRef('ep-donut')

  const tooltipVisible = ref(false)
  const tooltipStyles = ref({
    top: 0,
    left: 0
  })
  const tooltipText = ref('tooltip')

  const containerStyles = computed(() => {
    return {
      width: props.width + 'px',
      height: props.height + 'px'
    }
  })

  onMounted(() => {
    drawChart()
  })

  const handleMouseOver = (event, d) => {
    tooltipVisible.value = true
    // position the tooltip relative to the element being hovered over
    // always outside the chart
    // if element is in the top left quadrant, position the tooltip in the top left, etc
    let containerRect = container.value.getBoundingClientRect()
    let tooltipRect = tooltip.value.getBoundingClientRect()
    let x = event.clientX - containerRect.left
    let y = event.clientY - containerRect.top
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
      top: tooltipY + 'px',
      left: tooltipX + 'px'
    }
    tooltipText.value = d.data
  }

  const handleMouseOut = () => {
    tooltipVisible.value = false
  }

  const drawChart = () => {
    // Set up the data
    let data = props.data

    // Set up the dimensions and margins of the chart
    let width = props.width
    let height = props.height
    let margin = props.margin

    // Calculate the radius of the chart
    let radius = Math.min(width, height) / 2 - margin

    // Select the SVG element and set its dimensions
    let svg = d3.select(epDonut.value)
      .append('svg')
      .attr('width', width)
      .attr('height', height)

    // Create a group element for the chart
    let g = svg.append('g')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')

    // Set up the color scale
    let color = d3.scaleOrdinal()
      .range([
        'var(--chart-sequence-00)',
        'var(--chart-sequence-01)',
        'var(--chart-sequence-02)',
        'var(--chart-sequence-03)'
      ])

    // Set up the arc generator
    let arc = d3.arc()
      .innerRadius(radius - 26)
      .outerRadius(radius)

    // Set up the pie generator
    let pie = d3.pie()
      .sort(null)
      .value(function(d) { return d })

    // Generate the arcs
    let arcs = g.selectAll('arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc')

    // Draw the paths for the arcs
    arcs.append('path')
      .attr('d', arc)
      .attr('fill', function(d) {
        return color(d.data)
      })
      .attr('stroke', 'var(--interface-surface)')
      .attr('stroke-width', '0.3rem')
      .on('mouseover', handleMouseOver)
      .on('mousemove', handleMouseOver)
      .on('mouseout', handleMouseOut)

    // animate the arcs
    if (props.animate) {
      arcs.select('path')
        .attr('d', arc)
        .transition()
        .duration(700)
        .attrTween('d', function(d) {
          let interpolate = d3.interpolate(d.startAngle, d.endAngle)
          return function(t) {
            d.endAngle = interpolate(t)
            return arc(d)
          }
        })
    }
  }
</script>
