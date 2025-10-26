import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10.5 3H4.99995C3.89538 3 2.99995 3.89543 2.99995 5V19C2.99995 20.1046 3.89538 21 4.99995 21H19C20.1045 21 21 20.1046 21 19V13.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11 13L20.3499 3.64944M21 9V3L15 3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LinkSquare02',
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
