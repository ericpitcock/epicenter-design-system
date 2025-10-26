import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 7L19 19C19 20.1046 18.1046 21 17 21L7 21C5.89543 21 5 20.1046 5 19V7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21 2.99805L3 2.99805', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'StrokeTop',
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
