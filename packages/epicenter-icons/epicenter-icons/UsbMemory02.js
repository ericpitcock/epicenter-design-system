import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17 8.5C17 7.94772 16.5523 7.5 16 7.5H8C7.44772 7.5 7 7.94772 7 8.5V17C7 19.7614 9.23858 22 12 22C14.7614 22 17 19.7614 17 17V8.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15.5 7.5V3C15.5 2.44772 15.0523 2 14.5 2H9.5C8.94772 2 8.5 2.44772 8.5 3V7.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M11.5 4.5H12.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'UsbMemory02',
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
