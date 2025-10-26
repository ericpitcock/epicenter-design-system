import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11.5 6L5.5 12L11.5 18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18.5 6L12.5 12L18.5 18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ArrowLeftDouble',
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
