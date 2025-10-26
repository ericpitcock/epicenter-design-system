import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5 18L4 22M19 18L20 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14 18V8', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M7 11.5H9M7 14.5H9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('rect', { 'height': '10', 'rx': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'width': '20', 'x': '2', 'y': '8' })
const _hoisted5 = h('rect', { 'height': '6', 'rx': '1.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'width': '6', 'x': '5', 'y': '2' })

export default defineComponent({
    name: 'Cabinet04',
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
