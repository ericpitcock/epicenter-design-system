import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10 20V4C10 3.44772 9.55228 3 9 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H9C9.55228 21 10 20.5523 10 20Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3H17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18 12L15 9M18 12L15 15M18 12L10 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TransitionRight',
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
