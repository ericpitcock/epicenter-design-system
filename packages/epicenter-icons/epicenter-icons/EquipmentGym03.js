import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18 3.5V8.5M6 3.5V8.5M20.5 4.5V6M20.5 6V7.5M20.5 6H21.5M3.5 4.5V6M3.5 6V7.5M3.5 6H2.5M18 6H6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5 18H18.9995L16.9999 14H6.99995L5 18Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9 8.5V14M15 8.5V14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M16 18V20.5M8 18V20.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'EquipmentGym03',
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
