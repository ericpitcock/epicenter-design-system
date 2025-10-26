import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8 6H8.00635M8 12H8.00635M8 18H8.00635M15.9937 6H16M15.9937 12H16M15.9937 18H16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'DragDropVertical',
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
