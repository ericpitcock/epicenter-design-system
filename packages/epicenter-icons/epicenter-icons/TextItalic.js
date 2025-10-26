import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11 4H18', 'stroke-linecap': 'round' })
const _hoisted2 = h('path', { 'd': 'M9 20L15 4', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M6 20H13', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'TextItalic',
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
