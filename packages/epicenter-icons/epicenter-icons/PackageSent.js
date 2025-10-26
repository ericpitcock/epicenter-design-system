import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7.49805 5L2.99805 7L11.998 11L20.998 7L16.498 5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9.99805 4L11.998 2L13.998 4M11.998 7.5V2.60878', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M5.99805 12L7.99805 13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M3.00195 7L3.00195 18L11.998 22M11.998 22L21.002 18V7.01357M11.998 22V11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PackageSent',
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
