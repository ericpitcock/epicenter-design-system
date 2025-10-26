import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 3H19C20.1046 3 21 3.89543 21 5V13.5C21 14.6046 20.1046 15.5 19 15.5H10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11 7L18 7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M7 8C7 9.10457 6.10457 10 5 10C3.89543 10 3 9.10457 3 8C3 6.89543 3.89543 6 5 6C6.10457 6 7 6.89543 7 8Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12.5 12.5L6.99015 12.5M3 21V17M3 17L3.00018 13.4999C3.0002 12.9477 3.44791 12.5 4.00017 12.5H6.99015M3 17H7M7 17L6.99015 12.5M7 17V21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Teacher',
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
