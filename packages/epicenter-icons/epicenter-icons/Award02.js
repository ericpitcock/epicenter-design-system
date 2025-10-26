import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16 22V19C16 18.4477 15.5523 18 15 18H9C8.44772 18 8 18.4477 8 19V22', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11.9998 12V18', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M6 22H18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M8 13.5L12 12L16 13.5L15.5 9.5L18 6.5L14.5 5.5L12 2L9.5 5.5L6 6.5L8.5 9.5L8 13.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Award02',
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
