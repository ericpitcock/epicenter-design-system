import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 18H8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16 18H17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('rect', { 'height': '8', 'rx': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'width': '18', 'x': '3', 'y': '14' })
const _hoisted4 = h('path', { 'd': 'M10.5 11L10 14M13.5 11L14 14', 'stroke-linejoin': 'round' })
const _hoisted5 = h('rect', { 'height': '9', 'rx': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'width': '12', 'x': '6', 'y': '2' })
const _hoisted6 = h('path', { 'd': 'M12 14V22', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TelevisionTable',
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
            _hoisted6
        ])
    }
})
