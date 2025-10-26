import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 5.5L3 3V8L7 5.5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7 18.5L3 16V21L7 18.5Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M11 5.5L21 5.5', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M11 12L21 12', 'stroke-linecap': 'round' })
const _hoisted5 = h('path', { 'd': 'M11 18.5L21 18.5', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'LeftToRightListTriangle',
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
