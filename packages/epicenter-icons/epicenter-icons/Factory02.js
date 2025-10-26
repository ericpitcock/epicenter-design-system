import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M9 10.989L15.5 7V11L22 7V19.9641C22 20.5153 21.554 20.9626 21.0028 20.9641L8 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4.06137 6.05038H8.06137', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M11.9919 15.0172H13.9936', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M16.9958 15.0172H18.9975', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M3.83355 3.88963L2.00641 19.8894C1.93876 20.4819 2.41526 21 3.02776 21H10L8.12877 3.88739C8.06986 3.3819 7.63042 3 7.10768 3H4.8549C4.33128 3 3.89139 3.38316 3.83355 3.88963Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Factory02',
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
            _hoisted4,
            _hoisted5
        ])
    }
})
