import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6.99991 21.0002V14L5.49991 15M6.99991 21.0002L5.49991 21M6.99991 21.0002L8.49991 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8.99991 6.5V3H4.99991V6.5H8.99991ZM8.99991 6.5V10H4.99991', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16.4999 4V19.1964M13.9999 17.5L16.4999 20L18.9999 17.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ArrangeByNumbers91',
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
