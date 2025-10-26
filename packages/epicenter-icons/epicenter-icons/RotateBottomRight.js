import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8 15C8 16.1046 8.89543 17 10 17H20C21.1046 17 22 16.1046 22 15V5C22 3.89543 21.1046 3 20 3H10C8.89543 3 8 3.89543 8 5V15Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2 11.5L4 10V19C4 20.1046 4.89543 21 6 21H13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'RotateBottomRight',
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
