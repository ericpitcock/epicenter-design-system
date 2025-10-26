import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12.5 2H8.5L9 3H12L12.5 2Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17 17V20.5C17 21.3284 16.3284 22 15.5 22H5.5C4.67157 22 4 21.3284 4 20.5V3.5C4 2.67157 4.67157 2 5.5 2H15.5C16.3284 2 17 2.67157 17 3.5V7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 12.5L14.5 15L20 9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PhoneCheck',
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
