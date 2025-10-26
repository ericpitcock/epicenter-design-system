import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18 9H12V15H18L20 12L18 9Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6 3H12V9H6L4 6L6 3Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M11.9961 21.0049V3.00488', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M9 21L15 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Directions01',
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
