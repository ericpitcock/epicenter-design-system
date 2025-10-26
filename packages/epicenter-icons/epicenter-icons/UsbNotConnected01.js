import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 11L14 17M20 17L14 11', 'stroke-linecap': 'round' })
const _hoisted2 = h('path', { 'd': 'M13.5 6V3C13.5 2.44772 13.0523 2 12.5 2H7.5C6.94772 2 6.5 2.44772 6.5 3V6', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10 16.5V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M11 16.5H8.54131C7.88868 16.5 7.2771 16.1816 6.90285 15.6469L4.36154 12.0165C4.12622 11.6803 4 11.2799 4 10.8696V6.5C4 5.94772 4.44772 5.5 5 5.5H15C15.5523 5.5 16 5.94772 16 6.5V8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M9 8.5H11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'UsbNotConnected01',
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
