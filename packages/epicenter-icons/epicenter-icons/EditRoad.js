import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M13 17.5V20H15.5L21 14.5L18.5 12L13 17.5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3 3.5V20.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16 3.5V10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M9.5 3.5V6.5M9.5 10.5V13.5M9.5 17.5V20.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'EditRoad',
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
