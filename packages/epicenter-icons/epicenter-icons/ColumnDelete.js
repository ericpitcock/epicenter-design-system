import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 21C2.44772 21 2 20.5523 2 20L2 4.00168C2 3.44874 2.44874 3.00075 3.00167 3.00168L8.00167 3.01005C8.5533 3.01097 9 3.45842 9 4.01005L9 20C9 20.5523 8.55228 21 8 21H3Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13 3.5V20C13 20.5523 13.4477 21 14 21H19C19.5523 21 20 20.5523 20 20L20 12.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M22 8.99936L16 3M22 3.00064L16 9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ColumnDelete',
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
