# EpDonutChart



`EpDonutChart` is a D3-based donut chart component. Very basic. But it animates, bro.

## Usage
```vue
<template>
  <ep-donut-chart v-bind="chartProps" />
</template>

<script setup>
import { EpDonutChart } from '@ericpitcock/epicenter-components-vue'

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
| `animate` | - | `boolean` | `-` |
| `data` | - | `Array` | `-` |
| `height` | - | `number` | `-` |
| `labels` | - | `Array` | `-` |
| `margin` | - | `number` | `-` |
| `value` | - | `string` | `-` |
| `valueTextClass` | - | `string` | `-` |
| `width` | - | `number` | `-` |


::: info
This component does not use events, slots.
:::

## Component Code

```vue
<script setup lang="ts">
  import { computed, onMounted, ref, useTemplateRef } from 'vue'

  interface EpDonutChartProps {
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
  } = defineProps<EpDonutChartProps>()

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
  const handleMouseOver = (event: MouseEvent, d: any): void => {
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

  const handleMouseOut = (): void => {
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
      .value((d: number) => d)

    const arcs = g.selectAll('arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc')

    arcs.append('path')
      .attr('d', arc)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .attr('fill', (d: any) => color(d.data))
      .attr('stroke', 'var(--interface-surface)')
      .attr('stroke-width', '0.3rem')
      .on('mouseover', handleMouseOver)
      .on('mousemove', handleMouseOver)
      .on('mouseout', handleMouseOut)

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
```

## Styles (SCSS)

```scss
.ep-donut-chart {
  position: relative;
  z-index: var(--z-index--overlap);
  &__value {
    position: absolute;
    z-index: var(--z-index--negative);
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  &__tooltip {
    position: absolute;
    z-index: var(--z-index--tooltip);
    display: flex;
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--border-color--lighter);
    border-radius: var(--border-radius);
    background: var(--interface-overlay);
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