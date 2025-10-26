import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15 3V21M15 3H10M15 3H21M10 12H7.5C5.01472 12 3 9.98528 3 7.5C3 5.01472 5.01472 3 7.5 3H10M10 12V3M10 12V21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Paragraph',
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
