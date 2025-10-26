import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M14.5001 9.5L9.50006 14.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14.5001 14.5H14.4926M9.50754 9.5H9.50006', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2.00006 9.5V6C2.00006 4.89543 2.89549 4 4.00006 4H20.0001C21.1046 4 22.0001 4.89543 22.0001 6V9.5C20.6193 9.5 19.5001 10.6193 19.5001 12C19.5001 13.3807 20.6193 14.5 22.0001 14.5V18C22.0001 19.1046 21.1046 20 20.0001 20H4.00006C2.89549 20 2.00006 19.1046 2.00006 18V14.5C3.38077 14.5 4.50006 13.3807 4.50006 12C4.50006 10.6193 3.38077 9.5 2.00006 9.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CouponPercent',
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
