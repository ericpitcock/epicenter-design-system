import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 4L4 2V22L7 20L9.5 22L12 20L14.5 22L17 20L20 22V2L17 4L14.5 2L12 4L9.5 2L7 4Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15 9L9 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15 15H14.991M9.00897 9H9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Coupon02',
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
