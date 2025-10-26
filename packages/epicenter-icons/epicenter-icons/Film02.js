import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21.5 19.5V4.5C21.5 3.39543 20.6046 2.5 19.5 2.5H4.5C3.39543 2.5 2.5 3.39543 2.5 4.5V19.5C2.5 20.6046 3.39543 21.5 4.5 21.5H19.5C20.6046 21.5 21.5 20.6046 21.5 19.5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7 21.5L7 2.5M17 21.5L17 2.5', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M17 12L7 12', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M7 16L3 16M7 8L3 8', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M21 16L17 16M21 8L17 8', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Film02',
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
            _hoisted4,
            _hoisted5
        ])
    }
})
