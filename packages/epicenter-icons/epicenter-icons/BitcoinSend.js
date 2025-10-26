import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 5H9.88889C11.6071 5 13 6.39289 13 8.11111C13 10.2589 11.2589 12 9.11111 12M2 19H9.5C11.433 19 13 17.433 13 15.5C13 13.567 11.433 12 9.5 12H9.11111M9.11111 12H3.2001M3.00019 5V19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5 3V5M9 3V5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M5 19V21M9 19V21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M19.5 14.5L22 12L19.5 9.5M16 12H21.3912', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BitcoinSend',
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
