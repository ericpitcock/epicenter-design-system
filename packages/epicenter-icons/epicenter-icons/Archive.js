import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18 2H6C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V5C21 3.34315 19.6569 2 18 2Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21 12H3' })
const _hoisted3 = h('path', { 'd': 'M15 7H9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M15 17H9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Archive',
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
