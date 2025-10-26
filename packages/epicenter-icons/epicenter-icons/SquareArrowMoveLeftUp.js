import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21.5 4.25V19.25C21.5 20.3546 20.6046 21.25 19.5 21.25H4.5C3.39543 21.25 2.5 20.3546 2.5 19.25V4.25C2.5 3.14543 3.39543 2.25 4.5 2.25H19.5C20.6046 2.25 21.5 3.14543 21.5 4.25Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10 6.75L8 9.25L10 11.75', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16 16.75V11.25C16 10.1454 15.1046 9.25 14 9.25H8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SquareArrowMoveLeftUp',
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
