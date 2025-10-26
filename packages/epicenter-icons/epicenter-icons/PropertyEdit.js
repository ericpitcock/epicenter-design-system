import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M14 19.5V22H16.5L22 16.5L19.5 14L14 19.5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21 10.5V5C21 3.34315 19.6569 2 18 2H5C3.34315 2 2 3.34315 2 5V18C2 19.6569 3.34315 21 5 21H10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2 7H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M11 16H12.5M7 16H8M11 12H16M7 12H8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PropertyEdit',
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
