import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11 5L18 5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10 10L14.5 14.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M5 11L5 18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('circle', { 'cx': '6.5', 'cy': '6.5', 'r': '4.5', 'stroke-linejoin': 'round' })
const _hoisted5 = h('circle', { 'cx': '5', 'cy': '20', 'r': '2', 'stroke-linejoin': 'round' })
const _hoisted6 = h('circle', { 'cx': '16', 'cy': '16', 'r': '2', 'stroke-linejoin': 'round' })
const _hoisted7 = h('circle', { 'cx': '20', 'cy': '5', 'r': '2', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ChartRelationship',
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
            _hoisted5,
            _hoisted6,
            _hoisted7
        ])
    }
})
