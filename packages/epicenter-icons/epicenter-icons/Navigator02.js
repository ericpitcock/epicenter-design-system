import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20.9961 20H2.99609M2.99609 4L20.9961 4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10 11.9997L3 8L4.55591 12.0001L3.0005 16L10 11.9997Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M21 12H19M16 12H14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Navigator02',
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
