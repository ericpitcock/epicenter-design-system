import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M14 3L4 13L12 21L16 17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14 3L12 5M4 13L12 5M12 5L16 9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M11 13H20', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M12 5L16 9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Leetcode',
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
