import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21 21H3V3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8 3C8 9.07513 10.6863 14 14 14C17.3137 14 20 9.07513 20 3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M6 17H6.00898M8.9982 17H9.00718M11.9964 17H12.0054M14.9946 17H15.0036M17.9928 17H18.0018M20.991 17H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ChartMinimum',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
