import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M9 2.5H4.5C3.39543 2.5 2.5 3.39543 2.5 4.5V9M15 2.5H19.5C20.6046 2.5 21.5 3.39543 21.5 4.5V9M15 21.5H19.5C20.6046 21.5 21.5 20.6046 21.5 19.5V15M9 21.5H4.5C3.39543 21.5 2.5 20.6046 2.5 19.5V15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7.99982 8H8.00879M15.9908 16H15.9998', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M8 16L16 8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Discount01',
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
