import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21 21H3V3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6 12H6.00898M8.9982 12H9.00718M11.9964 12H12.0054M14.9946 12H15.0036M17.9928 12H18.0018M20.991 12H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M6 7C6.67348 5.87847 7.58712 5 8.99282 5C14.9359 5 11.5954 17 17.9819 17C19.3976 17 20.3057 16.1157 21 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ChartAverage',
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
