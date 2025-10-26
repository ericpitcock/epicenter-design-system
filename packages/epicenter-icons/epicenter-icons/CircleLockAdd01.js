import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17 22L17 15M13.5 18.5H20.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10.6748 21.9979C6.64007 22.0953 3.5 18.8058 3.5 14.999C3.5 11.1335 6.69664 8 10.6399 8C13.0662 8 15.2098 9.18634 16.5 10.9995', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15 9V6.5C15 4.01472 12.9853 2 10.5 2C8.01472 2 6 4.01472 6 6.5V9.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CircleLockAdd01',
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
