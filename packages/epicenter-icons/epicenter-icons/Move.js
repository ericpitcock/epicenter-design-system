import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 9.00006V3.74997M9.5 5.5L12 3.00006L14.5 5.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 14.5001V20.32M14.5 18.5L12 21.0001L9.5 18.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15 12.0001H20.3121M18.5 9.5L21 12.0001L18.5 14.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M9 12.0001H3.62365M5.5 14.5L3 12.0001L5.5 9.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Move',
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
            _hoisted4
        ])
    }
})
