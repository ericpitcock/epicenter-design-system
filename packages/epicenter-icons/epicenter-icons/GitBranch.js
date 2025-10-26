import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 19.0234H16.5C17.6046 19.0234 18.5 18.128 18.5 17.0234V11.0234M21 12.5234L18.5 10.0234L16 12.5234', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5 7.02344L5 17.0234', 'stroke-linejoin': 'round' })
const _hoisted3 = h('circle', { 'cx': '5', 'cy': '5.02344', 'r': '2', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M20.5 5.02344C20.5 6.12801 19.6046 7.02344 18.5 7.02344C17.3954 7.02344 16.5 6.12801 16.5 5.02344C16.5 3.91887 17.3954 3.02344 18.5 3.02344C19.6046 3.02344 20.5 3.91887 20.5 5.02344Z', 'stroke-linejoin': 'round' })
const _hoisted5 = h('circle', { 'cx': '5', 'cy': '19.0234', 'r': '2', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'GitBranch',
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
