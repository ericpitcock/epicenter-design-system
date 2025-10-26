import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15 8L9 14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15 14H14.991M9.00897 8H9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M20 21.5V4C20 2.89543 19.1046 2 18 2H6C4.89543 2 4 2.89543 4 4V21.5L8 19.5L12 22L16 19.5L20 21.5Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Coupon01',
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
