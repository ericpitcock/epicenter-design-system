import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16 15C16 16.1046 15.1046 17 14 17H4C2.89543 17 2 16.1046 2 15V5C2 3.89543 2.89543 3 4 3H14C15.1046 3 16 3.89543 16 5V15Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 13.5L20 12V19C20 20.1046 19.1046 21 18 21H11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'RotateBottomLeft',
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
