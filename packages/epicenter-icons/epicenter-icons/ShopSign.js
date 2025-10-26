import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3.5 15.5H10.5', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2 21.5L7 2.5M7 2.5L12 21.5H22L18 2.5H7Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ShopSign',
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
