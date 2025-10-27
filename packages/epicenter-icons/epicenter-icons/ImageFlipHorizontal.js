import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'ImageFlipHorizontal',
  render() {
    return h('svg', {
      class: 'ep-icon',
      viewBox: '0 0 24 24',
      'aria-hidden': 'true',
      focusable: 'false'
    }, [
      // Skull
      h('circle', { cx: 12, cy: 10, r: 5, fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }),
      // Eyes
      h('circle', { cx: 10, cy: 10, r: 1, fill: 'currentColor' }),
      h('circle', { cx: 14, cy: 10, r: 1, fill: 'currentColor' }),
      // Nose
      h('ellipse', { cx: 12, cy: 12, rx: 0.7, ry: 0.5, fill: 'currentColor' }),
      // Mouth
      h('path', { d: 'M11 14 Q12 15 13 14', stroke: 'currentColor', 'stroke-width': 1, fill: 'none' }),
      // Crossbones
      h('line', { x1: 7, y1: 18, x2: 17, y2: 22, stroke: 'currentColor', 'stroke-width': 2 }),
      h('line', { x1: 17, y1: 18, x2: 7, y2: 22, stroke: 'currentColor', 'stroke-width': 2 })
    ])
  }
})
