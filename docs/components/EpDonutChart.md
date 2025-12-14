# EpDonutChart



`EpDonutChart` is a D3-based donut chart component. Very basic. But it animates, bro.

## Usage
```vue
<template>
  <ep-donut-chart v-bind="chartProps" />
</template>

<script setup>
import { EpDonutChart } from '@epicenter/vue-components'

const chartProps = {
  data: [28, 33, 44, 51],
  labels: ['Active', 'Inactive', 'Archived', 'Unknown'],
  value: '156',
}
</script>
```
    

## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `animate` | If true, animates the chart on initial render. | `boolean` | `true` |
| `width` | Width of the chart in pixels. | `number` | `200` |
| `height` | Height of the chart in pixels. | `number` | `200` |
| `margin` | Margin around the chart in pixels. | `number` | `0` |
| `data` | Array of numeric values for each segment of the donut chart. | `array` | `-` |
| `labels` | Array of label strings corresponding to each data segment. | `array` | `-` |
| `value` | Text or number to display in the center of the donut chart. | `string` | `'Value'` |
| `valueTextClass` | CSS class for styling the center value text. | `string` | `'font-size--jumbo'` |


::: info
This component does not use events, slots.
:::

## Component Code

```vue
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
  import { computed, onMounted, ref, useTemplateRef } from 'vue'

  const props = defineProps({
    /**
     * If true, animates the chart on initial render.
     */
    animate: {
      type: Boolean,
      default: true,
    },
    /**
     * Width of the chart in pixels.
     */
    width: {
      type: Number,
      default: 200,
    },
    /**
     * Height of the chart in pixels.
     */
    height: {
      type: Number,
      default: 200,
    },
    /**
     * Margin around the chart in pixels.
     */
    margin: {
      type: Number,
      default: 0,
    },
    /**
     * Array of numeric values for each segment of the donut chart.
     */
    data: {
      type: Array,
      required: true,
    },
    /**
     * Array of label strings corresponding to each data segment.
     */
    labels: {
      type: Array,
      required: true,
    },
    /**
     * Text or number to display in the center of the donut chart.
     */
    value: {
      type: String,
      default: 'Value',
    },
    /**
     * CSS class for styling the center value text.
     */
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
        'hsl(var(--chart-sequence-00))',
        'hsl(var(--chart-sequence-01))',
        'hsl(var(--chart-sequence-02))',
        'hsl(var(--chart-sequence-03))',
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
```

## Styles (SCSS)

```scss
.ep-donut-chart {
  position: relative;
  z-index: var(--z-index--overlap);
  &__value {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: var(--z-index--negative);
  }
  &__tooltip {
    position: absolute;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--interface-overlay);
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color--lighter);
    z-index: var(--z-index--tooltip);
    // &--visible {
    //   opacity: 1;
    // }
    // &__value {
    //   font-size: var(--font-size--large);
    //   font-weight: var(--font-weight--bold);
    //   color: var(--text-color--primary);
    // }
    // &__label {
    //   font-size: var(--font-size--small);
    //   color: var(--text-color--secondary);
    // }
  }
}
```