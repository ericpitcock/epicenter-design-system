import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21 8.33333C20.0748 7.03165 18.8647 6 16.9782 6C8.4681 6 10.9194 21 3 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21 21H3V3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ChartLineData03',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
