import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 22H6C4.89543 22 4 21.1046 4 20M4 20C4 18.8954 4.89543 18 6 18H18C19.1046 18 20 17.1046 20 16V2C20 3.10457 19.1046 4 18 4L6 4C4.89543 4 4 4.89543 4 6V20Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18.5 18C18.5 18 17.5 18.7628 17.5 20C17.5 21.2372 18.5 22 18.5 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9 4V8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Book01',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
