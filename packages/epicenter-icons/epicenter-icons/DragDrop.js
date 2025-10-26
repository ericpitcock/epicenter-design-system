import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6 6H6.00634M6 12H6.00634M6 18H6.00634M11.9968 6H12.0032M11.9968 12H12.0032M11.9968 18H12.0032M17.9937 6H18M17.9937 12H18M17.9937 18H18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'DragDrop',
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
