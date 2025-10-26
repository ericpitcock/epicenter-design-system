import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17 5.5L21 3V8L17 5.5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17 18.5L21 16V21L17 18.5Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3 5.5L13 5.5', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M3 12L13 12', 'stroke-linecap': 'round' })
const _hoisted5 = h('path', { 'd': 'M3 18.5L13 18.5', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'RightToLeftListTriangle',
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
