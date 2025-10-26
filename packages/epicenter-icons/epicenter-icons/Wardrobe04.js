import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6 20V22M18 20V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('rect', { 'height': '18', 'rx': '3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'width': '18', 'x': '3', 'y': '2' })
const _hoisted3 = h('path', { 'd': 'M12 20V2', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M15 12L15 10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M9 10L9 8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M3 16H12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Wardrobe04',
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
