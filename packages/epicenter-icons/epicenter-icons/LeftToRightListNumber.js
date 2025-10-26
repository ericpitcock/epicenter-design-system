import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 15H6V18H3.00034V21H6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3 3H4.5V9M4.5 9H3M4.5 9H6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M11 6L21 6', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M11 12L21 12', 'stroke-linecap': 'round' })
const _hoisted5 = h('path', { 'd': 'M11 18L21 18', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'LeftToRightListNumber',
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
