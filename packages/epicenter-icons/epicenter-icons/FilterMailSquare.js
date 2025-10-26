import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8.50006 12H15.5001M10.5001 15.5H13.5001M7.50006 8.5H16.5001', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FilterMailSquare',
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
