import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15 16C15 17.6569 13.6569 19 12 19C10.3431 19 9 17.6569 9 16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16Z' })
const _hoisted2 = h('path', { 'd': 'M17.5 5H22V9.5M16 11L21.5077 5.4923', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M6.5 5H2V9.5M8 11L2.50653 5.50653', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Sharing',
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
