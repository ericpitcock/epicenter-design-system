import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M13.5 7.5V3C13.5 2.44772 13.0523 2 12.5 2H7.5C6.94772 2 6.5 2.44772 6.5 3V7.5M9.49805 4.5H10.498M15 10V8.5C15 7.94772 14.5523 7.5 14 7.5H6C5.44772 7.5 5 7.94772 5 8.5V17C5 19.7614 7.23858 22 10 22C10.9107 22 11.7646 21.7565 12.5 21.3311', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11.5 15.5L14 18L19 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'UsbConnected02',
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
