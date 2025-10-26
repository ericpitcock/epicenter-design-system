import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21 21H3V3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '8', 'cy': '8', 'r': '2', 'stroke-linejoin': 'round' })
const _hoisted3 = h('circle', { 'cx': '11.5', 'cy': '15.5', 'r': '2.5', 'stroke-linejoin': 'round' })
const _hoisted4 = h('circle', { 'cx': '17.5', 'cy': '7.5', 'r': '3.5', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ChartBubble01',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4
        ])
    }
})
