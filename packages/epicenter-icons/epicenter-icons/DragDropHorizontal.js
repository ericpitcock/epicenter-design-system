import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18 8V8.00635M12 8V8.00635M6 8L6 8.00635M18 15.9937V16M12 15.9937V16M6 15.9937L6 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'DragDropHorizontal',
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
