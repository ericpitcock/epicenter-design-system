import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21 10V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9 10L12 13L21 3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CheckmarkSquare04',
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
