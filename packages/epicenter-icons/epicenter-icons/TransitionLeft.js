import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21 20V4C21 3.44772 20.5523 3 20 3H15C14.4477 3 14 3.44772 14 4V20C14 20.5523 14.4477 21 15 21H20C20.5523 21 21 20.5523 21 20Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M6 12L9 9M6 12L9 15M6 12L14 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TransitionLeft',
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
