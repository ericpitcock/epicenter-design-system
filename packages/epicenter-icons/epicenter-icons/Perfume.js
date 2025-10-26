import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 8.99587V7C7 6.44772 7.44772 6 8 6H11C11.5523 6 12 6.44772 12 7V8.99587', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11 5.99494V3.99902C11 3.44674 10.5523 2.99902 10 2.99902H9C8.44772 2.99902 8 3.44674 8 3.99902V5.99494' })
const _hoisted3 = h('path', { 'd': 'M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M5.5 4L7.98954 3.99609M10.9935 3.99609H16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M2.06963 15.1616C1.64646 17.9079 3.2471 20.5232 4.30911 21.7086C4.48224 21.9019 4.73316 22 4.99262 22H14.0074C14.2668 22 14.5178 21.9019 14.6909 21.7086C15.7529 20.5232 17.3535 17.9079 16.9304 15.1616C16.4784 12.2282 14.1723 9.73275 12.1391 9.0444C12.0471 9.01324 11.9506 9 11.8534 9H7.14655C7.04937 9 6.95293 9.01324 6.86088 9.0444C4.82773 9.73275 2.52162 12.2282 2.06963 15.1616Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Perfume',
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
