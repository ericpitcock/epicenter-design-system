import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 2H4.5L7 16L6 18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6 22C7.10457 22 8 21.1046 8 20C8 18.8954 7.10457 18 6 18C4.89543 18 4 18.8954 4 20C4 21.1046 4.89543 22 6 22Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M8 20H14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M7 16L18.5 14.35L20 5H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M9 6.5H16M12.5 10V3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ShoppingCartAdd02',
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
            _hoisted4,
            _hoisted5,
            _hoisted6
        ])
    }
})
