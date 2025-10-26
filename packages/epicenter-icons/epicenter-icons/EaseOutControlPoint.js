import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4 21C4 21 11 5 22 5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11 5H13M6 5L8 5M6 5C6 6.10457 5.10457 7 4 7C2.89543 7 2 6.10457 2 5C2 3.89543 2.89543 3 4 3C5.10457 3 6 3.89543 6 5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'EaseOutControlPoint',
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
