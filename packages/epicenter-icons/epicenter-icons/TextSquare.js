import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21 5C21 3.89543 20.1046 3 19 3H4C2.89543 3 2 3.89543 2 5V20C2 21.1046 2.89543 22 4 22H19C20.1046 22 21 21.1046 21 20V5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13 17.5H10M11.5 7.5L11.5 17.5M7.5 9V8.5C7.5 7.94772 7.94772 7.5 8.5 7.5H14.5C15.0523 7.5 15.5 7.94772 15.5 8.5V9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TextSquare',
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
