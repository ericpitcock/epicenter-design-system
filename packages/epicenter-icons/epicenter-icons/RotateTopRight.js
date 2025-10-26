import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 10C7 8.89543 7.89543 8 9 8H19C20.1046 8 21 8.89543 21 10V20C21 21.1046 20.1046 22 19 22H9C7.89543 22 7 21.1046 7 20V10Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10.5 2L12 4H5C3.89543 4 3 4.89543 3 6V13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'RotateTopRight',
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
