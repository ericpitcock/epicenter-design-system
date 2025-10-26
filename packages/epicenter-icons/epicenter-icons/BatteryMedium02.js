import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17 6H4C2.89543 6 2 6.89543 2 8V16C2 17.1046 2.89543 18 4 18H17C18.1046 18 19 17.1046 19 16V8C19 6.89543 18.1046 6 17 6Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19 9.5L21.1665 9.86589C21.6477 9.94716 22 10.3639 22 10.8519V13.1481C22 13.6361 21.6477 14.0528 21.1665 14.1341L19 14.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M6 10V14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M9 10V14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M12 10V14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BatteryMedium02',
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
