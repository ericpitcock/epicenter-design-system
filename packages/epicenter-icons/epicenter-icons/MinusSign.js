import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 12L4 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'MinusSign',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1
        ])
    }
})
