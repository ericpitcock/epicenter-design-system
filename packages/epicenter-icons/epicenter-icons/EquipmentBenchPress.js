import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17.5 3V8M6.5 3V8M20 4V5.5M20 5.5V7M20 5.5H21.5M4 4V5.5M4 5.5V7M4 5.5H2.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17.5 5.5H6.5', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10 5.5V9.5M14 5.5V9.5', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M5 16L7.92118 10.9923C8.2796 10.3778 8.93741 10 9.64874 10H14.3513C15.0626 10 15.7204 10.3778 16.0788 10.9923L19 16M5 16H19M5 16V17C5 18.1046 5.89543 19 7 19H17C18.1046 19 19 18.1046 19 17V16', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M16 19V21M8 19V21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'EquipmentBenchPress',
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
