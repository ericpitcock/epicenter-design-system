import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 8L14.5 2L22 8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8.5 7V20M20.5 20V7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('ellipse', { 'cx': '3.5', 'cy': '12', 'rx': '1.5', 'ry': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M3.5 14V20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M2 20H22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M12.5 20V15C12.5 14.4477 12.9477 14 13.5 14H15.5C16.0523 14 16.5 14.4477 16.5 15V20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted7 = h('path', { 'd': 'M13.5 9H15.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'House04',
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
