import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '5', 'cy': '8', 'r': '3', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '9', 'cy': '17', 'r': '4', 'stroke-linejoin': 'round' })
const _hoisted3 = h('circle', { 'cx': '17', 'cy': '8', 'r': '5', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ChartBubble02',
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
