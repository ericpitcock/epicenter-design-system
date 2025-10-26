import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11.5 5.5L21 5.5', 'stroke-linecap': 'round' })
const _hoisted2 = h('path', { 'd': 'M11.5 12L21 12', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M11.5 18.5L21 18.5', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M8 18.5L3 18.5M4 21L7 16M7 21L4 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M8 5.5L3 5.5M4 8L7 3M7 8L4 3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LeftToRightListStar',
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
