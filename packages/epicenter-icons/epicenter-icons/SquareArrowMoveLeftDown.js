import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6.99609 9.5H12.4932C13.5974 9.5 14.4927 10.3948 14.4932 11.499L14.4961 17', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9 7.5L7 9.5L9 11.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16.5 15L14.5 17L12.5 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M21.5 4.5V19.5C21.5 20.6046 20.6046 21.5 19.5 21.5H4.5C3.39543 21.5 2.5 20.6046 2.5 19.5V4.5C2.5 3.39543 3.39543 2.5 4.5 2.5H19.5C20.6046 2.5 21.5 3.39543 21.5 4.5Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SquareArrowMoveLeftDown',
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
