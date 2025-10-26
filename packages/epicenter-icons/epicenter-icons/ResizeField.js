import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16 18.0002L18 16.0002M11 18.0002L18 11.0002M6 18L18 6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ResizeField',
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
