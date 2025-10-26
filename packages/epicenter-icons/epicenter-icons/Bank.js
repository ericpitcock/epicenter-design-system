import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11.9959 7H12.0049', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5 9.99512V18.9998M9 9.99512V18.9998', 'stroke-linecap': 'square', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15 9.99512V18.9998M19 9.99512V18.9998', 'stroke-linecap': 'square', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M21 19H3L3.0003 21.9999H21V19Z', 'stroke-linecap': 'square', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M3 7L12 2L21 7V9.99502H3V7Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Bank',
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
