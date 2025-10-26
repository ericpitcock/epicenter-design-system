import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 13.5L5.5 17.5L6.45455 16.5M16 6.5L10.75 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8 13.5L11.5 17.5L22 6.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TickDouble02',
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
