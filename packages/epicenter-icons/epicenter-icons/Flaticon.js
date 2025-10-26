import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16 3L13.5 7H6.5L8.5 10H12L10.5 13L14 19L11 21L2 6L5 3H16Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 6L19 3L13.5 12.5L16 16.5L22 6Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Flaticon',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
