import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11.9961 9H12.0111M11.9998 15H12.0148', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8.5 12H15.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('circle', { 'cx': '1.5', 'cy': '1.5', 'r': '1.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'transform': 'matrix(1 0 0 -1 16 8)' })
const _hoisted4 = h('path', { 'd': 'M22 2H12L3.41421 10.5858C2.63316 11.3668 2.63317 12.6332 3.41421 13.4142L10.5858 20.5858C11.3668 21.3668 12.6332 21.3668 13.4142 20.5858L22 12V2Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'DiscountTag02',
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
