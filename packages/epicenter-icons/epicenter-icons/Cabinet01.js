import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6 18L5 21M18 18L19 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('rect', { 'height': '15', 'rx': '3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'width': '20', 'x': '2', 'y': '3' })
const _hoisted3 = h('path', { 'd': 'M2.5 14H21.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12 3L12 14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M9 9V8M15 9V8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Cabinet01',
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
