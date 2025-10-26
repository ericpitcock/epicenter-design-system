import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 7V16C7 16.5523 7.44772 17 8 17H16C16.5523 17 17 16.5523 17 16V7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10 6L11 5M11 8.5L13 6.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M20 8V22M4 8V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M4 20H20', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M4 12H7M17 12H20', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Mirror',
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
