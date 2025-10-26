import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17 10C17 8.89543 16.1046 8 15 8H5C3.89543 8 3 8.89543 3 10V20C3 21.1046 3.89543 22 5 22H15C16.1046 22 17 21.1046 17 20V10Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13.5 2L12 4H19C20.1046 4 21 4.89543 21 6V13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'RotateTopLeft',
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
