import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17 19H20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10.5 19H13.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M4 19H7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'NoSignal',
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
