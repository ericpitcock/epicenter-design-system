import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11.998 10L20.998 6L11.998 2L2.99805 6L11.998 10Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16.498 4L7.49805 8', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3.00195 6V18L11.998 22M11.998 22L21.002 18V6.01357M11.998 22V10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M5.99805 11L8.49805 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Package',
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
