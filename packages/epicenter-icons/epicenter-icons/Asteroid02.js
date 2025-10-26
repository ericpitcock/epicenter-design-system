import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17 14.5C17 18.6421 13.6421 22 9.5 22C5.35786 22 2 18.6421 2 14.5C2 10.3579 5.35786 7 9.5 7C13.6421 7 17 10.3579 17 14.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7 13L14.5 5.5M18 2L16.5 3.5M22 6.00003L18.5 9.50005M11 16L14 13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Asteroid02',
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
