import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17.5 17.5L21 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4.5 4.5L7 11L3 15L9 15.5L12 21L14 14.5L20.5 12L15 9V3L10.5 7L4.5 4.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'MagicWand02',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
