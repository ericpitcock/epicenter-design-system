import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 5.5L12.5 5.5', 'stroke-linecap': 'round' })
const _hoisted2 = h('path', { 'd': 'M3 12L12.5 12', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M3 18.5L12.5 18.5', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M21 18.5L16 18.5M17 21L20 16M20 21L17 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M21 5.5L16 5.5M17 8L20 3M20 8L17 3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LeftToRightListStar01',
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
