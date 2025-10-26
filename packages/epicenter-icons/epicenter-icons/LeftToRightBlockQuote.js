import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M9 6H17', 'stroke-linecap': 'round' })
const _hoisted2 = h('path', { 'd': 'M9 12H19', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M9 18H17', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M5 3V21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LeftToRightBlockQuote',
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
