import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5 17V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5L19 17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3 21L21 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'StrokeBottom',
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
