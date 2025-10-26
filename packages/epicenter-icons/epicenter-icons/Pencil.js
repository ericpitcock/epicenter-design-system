import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 12V21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14 6.5C14 6.5 13 7 12 7C11 7 10 6.5 10 6.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18 21L18 12L12 3L6 12V21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M6 12L9 13.5L12 12L15 13.5L18 12', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Pencil',
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
