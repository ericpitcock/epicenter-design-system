import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 21V8.00012C20 6.89556 19.1046 6.00013 18 6.00012L4 6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7 3.00012L4 6.00012L7 9.00012', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ArrowMoveUpLeft',
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
