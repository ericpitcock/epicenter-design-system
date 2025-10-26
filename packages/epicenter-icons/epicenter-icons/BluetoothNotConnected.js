import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17.502 17.5L12.0014 21L12 12L6 17M12.0014 8V3L18 6.99997L14.502 10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3 3L21 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BluetoothNotConnected',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
