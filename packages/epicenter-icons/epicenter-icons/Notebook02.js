import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5 6H3M5 12H3M5 18H3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M17 7H13M15 11H13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M9 21L9 3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Notebook02',
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
