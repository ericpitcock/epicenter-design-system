import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '12', 'cy': '12', 'r': '10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10 16L10.0028 10.9994C10.0031 10.4474 10.4507 10 11.0028 10H16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M14.5 8L16.5 10L14.5 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M8 14.5L10 16.5L12 14.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CircleArrowMoveRightDown',
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
            _hoisted4
        ])
    }
})
