import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5 19.0001V21.0001M19 19.0001V21.0001', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 6H4C2.89543 6 2 6.89543 2 8V17C2 18.1046 2.89543 19 4 19H20C21.1046 19 22 18.1046 22 17V8C22 6.89543 21.1046 6 20 6Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M17 6H7L7.65811 4.02566C7.86228 3.41315 8.43549 3 9.08114 3H14.9189C15.5645 3 16.1377 3.41315 16.3419 4.02566L17 6Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M19 10H16.5V15L19 15V10Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M13.5 10H11V15L13.5 15V10Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M5 15V10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted7 = h('path', { 'd': 'M7.99999 11H8.00897M7.99105 14H8.00003', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'DigitalClock',
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
            _hoisted5,
            _hoisted6,
            _hoisted7
        ])
    }
})
