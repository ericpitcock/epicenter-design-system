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
    <div id="ep-donut" />
    <div :class="['ep-donut-chart__value', valueTextClass]">
      {{ value }}
    </div>
  </div>
</template>

<script>
  import * as d3 from 'd3'

  export default {
    name: 'EpDonutChart',
    props: {
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
    },
    data() {
      return {
        tooltipVisible: false,
        tooltipStyles: {
          top: 0,
          left: 0
        },
        tooltipText: 'tooltip'
      }
    },
    computed: {
      containerStyles() {
        return {
          width: this.width + 'px',
          height: this.height + 'px'
        }
      }
    },
    mounted() {
      this.drawChart()
    },
    methods: {
      handleMouseOver(event, d) {
        this.tooltipVisible = true
        // position the tooltip relative to the element being hovered over
        // always outside the chart
        // if element is in the top left quadrant, position the tooltip in the top left, etc
        var container = this.$refs.container
        var tooltip = this.$refs.tooltip
        var containerRect = container.getBoundingClientRect()
        var tooltipRect = tooltip.getBoundingClientRect()
        var x = event.clientX - containerRect.left
        var y = event.clientY - containerRect.top
        var tooltipX = x + 10
        var tooltipY = y + 10
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
        this.tooltipStyles = {
          top: tooltipY + 'px',
          left: tooltipX + 'px'
        }
        this.tooltipText = d.data
      },
      handleMouseOut() {
        this.tooltipVisible = false
      },
      drawChart() {
        // Set up the data
        var data = this.data
        var labels = this.labels

        // Set up the dimensions and margins of the chart
        var width = this.width
        var height = this.height
        var margin = this.margin

        // Calculate the radius of the chart
        var radius = Math.min(width, height) / 2 - margin

        // Select the SVG element and set its dimensions
        var svg = d3.select('#ep-donut')
          .append('svg')
          .attr('width', width)
          .attr('height', height)

        // Create a group element for the chart
        var g = svg.append('g')
          .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')

        // Set up the color scale
        var color = d3.scaleOrdinal()
          .range(['var(--chart-sequence-1)', 'var(--chart-sequence-2)', 'var(--chart-sequence-3)', 'var(--chart-sequence-4)'])

        // Set up the arc generator
        var arc = d3.arc()
          .innerRadius(radius - 26)
          .outerRadius(radius)

        // Set up the pie generator
        var pie = d3.pie()
          .sort(null)
          .value(function (d) { return d })

        // Generate the arcs
        var arcs = g.selectAll('arc')
          .data(pie(data))
          .enter()
          .append('g')
          .attr('class', 'arc')

        // Draw the paths for the arcs
        arcs.append('path')
          .attr('d', arc)
          .attr('fill', function (d) {
            return color(d.data)
          })
          .attr('stroke', 'var(--interface-bg)')
          .attr('stroke-width', '0.3rem')
          .on('mouseover', this.handleMouseOver)
          .on('mousemove', this.handleMouseOver)
          .on('mouseout', this.handleMouseOut)

        // animate the arcs
        if (this.animate) {
          arcs.select('path')
            .attr('d', arc)
            .transition()
            .duration(700)
            .attrTween('d', function (d) {
              var interpolate = d3.interpolate(d.startAngle, d.endAngle)
              return function (t) {
                d.endAngle = interpolate(t)
                return arc(d)
              }
            })
        }
      }
    }
  }
</script>
