import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18.5 11.5H18.509', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7 18H3C2.44772 18 2 17.5523 2 17V11C2 9.34315 3.34315 8 5 8H8M17 8V3.5C17 2.67157 16.3284 2 15.5 2H8.5C7.84689 2 7.20592 2.4174 7 3M12.5 8H19C20.6569 8 22 9.34315 22 11V17C22 17.2761 21.8881 17.5261 21.7071 17.7071M17 17V20C17 21.1046 16.1046 22 15 22H9C7.89543 22 7 21.1046 7 20V16H16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2 2L22 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PrinterOff',
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
