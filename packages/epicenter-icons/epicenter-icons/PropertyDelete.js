import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21 12.0278V5C21 3.34315 19.6569 2 18 2H5C3.34315 2 2 3.34315 2 5V18C2 19.6569 3.34315 21 5 21L12.0278 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2 7H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M11 16H12.5M7 16H8M11 12H16M7 12H8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M16 16L19 19M19 19L22 22M19 19L16 22M19 19L22 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PropertyDelete',
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
