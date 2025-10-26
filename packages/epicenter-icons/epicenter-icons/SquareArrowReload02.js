import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21.5 4.5V19.5C21.5 20.6046 20.6046 21.5 19.5 21.5H4.5C3.39543 21.5 2.5 20.6046 2.5 19.5V4.5C2.5 3.39543 3.39543 2.5 4.5 2.5H19.5C20.6046 2.5 21.5 3.39543 21.5 4.5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16 11.5V10.5C16 9.94772 15.5523 9.5 15 9.5H8L9.5 7.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M8 12.5V13.5C8 14.0523 8.44772 14.5 9 14.5H16L14.5 16.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SquareArrowReload02',
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
