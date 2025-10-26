import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3 3V21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'StrokeLeft',
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
