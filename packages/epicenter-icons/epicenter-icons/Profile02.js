import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22 6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10 8H6V12H10V8Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M14 8H18M14 12H18M14 16H18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M6 16H9.99072', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Profile02',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4
        ])
    }
})
