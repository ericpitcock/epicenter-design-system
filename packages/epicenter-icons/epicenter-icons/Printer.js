import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17 18H21C21.5523 18 22 17.5523 22 17V11C22 9.34315 20.6569 8 19 8H5C3.34315 8 2 9.34315 2 11V17C2 17.5523 2.44772 18 3 18H7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18.5 11.5H18.509', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M17 8V3.5C17 2.67157 16.3284 2 15.5 2H8.5C7.67157 2 7 2.67157 7 3.5V8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M17 16V20C17 21.1046 16.1046 22 15 22H9C7.89543 22 7 21.1046 7 20V16H17Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Printer',
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
