import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 18C2 16.3431 3.34315 15 5 15H19C20.6569 15 22 16.3431 22 18C22 19.6569 20.6569 21 19 21H5C3.34315 21 2 19.6569 2 18Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18 13V5C18 3.89543 17.1046 3 16 3H8C6.89543 3 6 3.89543 6 5V13C6 14.1046 6.89543 15 8 15H16C17.1046 15 18 14.1046 18 13Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M11.9955 18H12.0045M7 18H7.00897M16.991 18H17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M10.5 6H13.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ShippingCenter',
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
