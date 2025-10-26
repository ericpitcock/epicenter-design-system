import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18 15H21V18H18.0003V21H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18 3H19.5V9M19.5 9H18M19.5 9H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3 6L13 6', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M3 12L13 12', 'stroke-linecap': 'round' })
const _hoisted5 = h('path', { 'd': 'M3 18L13 18', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'RightToLeftListNumber',
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
