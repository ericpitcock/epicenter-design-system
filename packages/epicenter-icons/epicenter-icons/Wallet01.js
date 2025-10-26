import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16 3H5C3.89543 3 3 3.89543 3 5C3 6.10457 3.89543 7 5 7H18V5C18 3.89543 17.1046 3 16 3Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V9C21 7.89543 20.1046 7 19 7H7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M21 12H18C17.4477 12 17 12.4477 17 13V15C17 15.5523 17.4477 16 18 16H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Wallet01',
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
