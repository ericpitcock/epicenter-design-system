import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M14 2H10L10.5 3H13.5L14 2Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9 12.5L12 15.5L15 12.5M12 15V8.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M17 2H7C6.17157 2 5.5 2.67157 5.5 3.5V20.5C5.5 21.3284 6.17157 22 7 22H17C17.8284 22 18.5 21.3284 18.5 20.5V3.5C18.5 2.67157 17.8284 2 17 2Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PhoneArrowDown',
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
