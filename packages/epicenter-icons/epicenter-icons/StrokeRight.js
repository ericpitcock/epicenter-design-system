import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20.998 21L20.998 3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'StrokeRight',
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
