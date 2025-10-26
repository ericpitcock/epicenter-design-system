import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21.5 8L14.5 12L11 6L18 2L21.5 8Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11.5 7L6.5 10L9 14L14 11', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M6.5 11L3 13.5L4 15.5L8 13.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M7.5 22L12 12.5L16.5 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Telescope01',
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
