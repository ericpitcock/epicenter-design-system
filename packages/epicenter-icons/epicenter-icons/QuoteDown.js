import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22 10V6C22 4.89543 21.1046 4 20 4L16 4C14.8954 4 14 4.89543 14 6V10C14 11.1046 14.8954 12 16 12H20C21.1046 12 22 11.1046 22 10Z' })
const _hoisted2 = h('path', { 'd': 'M22 9.5V14C22 17.3137 19.3137 20 16 20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10 10V6C10 4.89543 9.10457 4 8 4L4 4C2.89543 4 2 4.89543 2 6L2 10C2 11.1046 2.89543 12 4 12H8C9.10457 12 10 11.1046 10 10Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M10 9.5V14C10 17.3137 7.31371 20 4 20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'QuoteDown',
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
