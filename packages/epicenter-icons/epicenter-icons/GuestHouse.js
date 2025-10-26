import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4 5.5V19H20V3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14 22H10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12.0119 8H12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M10 19V14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14V19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M3 5.5L11.2751 2.2819C11.7414 2.10058 12.2586 2.10058 12.7249 2.2819L21 5.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'GuestHouse',
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
            _hoisted5
        ])
    }
})
