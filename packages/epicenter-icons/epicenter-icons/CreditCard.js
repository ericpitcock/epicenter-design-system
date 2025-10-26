import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10 16H11.5M14.5 16L18 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-miterlimit': '10' })
const _hoisted3 = h('path', { 'd': 'M2 9H22', 'stroke-linecap': 'square', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CreditCard',
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
