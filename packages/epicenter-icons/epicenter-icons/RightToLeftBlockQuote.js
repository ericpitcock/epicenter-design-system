import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 6L15 6', 'stroke-linecap': 'round' })
const _hoisted2 = h('path', { 'd': 'M5 12L15 12', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M7 18L15 18', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M19 3L19 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'RightToLeftBlockQuote',
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
