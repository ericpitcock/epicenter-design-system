import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4 3V20.5M20 3V20.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 6H2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15.499 10C16.6036 10 17.499 10.9801 17.499 12.1891C17.499 12.4756 17.4488 12.7492 17.3573 13H13.6407C13.5493 12.7492 13.499 12.4756 13.499 12.1891C13.499 10.9801 14.3945 10 15.499 10Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M8.5 10C9.60457 10 10.5 10.9801 10.5 12.1891C10.5 12.4756 10.4497 12.7492 10.3583 13H6.64168C6.55027 12.7492 6.5 12.4756 6.5 12.1891C6.5 10.9801 7.39543 10 8.5 10Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M8.5 10V6M15.5 10V6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'EquipmentGym02',
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
