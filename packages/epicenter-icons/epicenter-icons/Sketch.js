import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17 9.5L12 3L7 9.5L12 21L17 9.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17.5 4L22 9.5H17M17.5 4L17 9.5M17.5 4L12 3L6.5 4M17 9.5H7M6.5 4L2 9.5H7M6.5 4L7 9.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M22 9.5L12 21L2 9.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Sketch',
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
