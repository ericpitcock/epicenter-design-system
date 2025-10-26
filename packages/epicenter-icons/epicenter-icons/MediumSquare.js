import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '7.5', 'cy': '12', 'r': '2.5', 'stroke-linejoin': 'round' })
const _hoisted2 = h('ellipse', { 'cx': '13.5', 'cy': '12', 'rx': '1.5', 'ry': '2.5', 'stroke-linejoin': 'round' })
const _hoisted3 = h('ellipse', { 'cx': '18', 'cy': '12', 'rx': '1', 'ry': '2.5', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M21.5 4.50024V19.5C21.5 20.6046 20.6046 21.5 19.5 21.5H4.5C3.39543 21.5 2.5 20.6046 2.5 19.5V4.50024C2.5 3.39568 3.39543 2.50024 4.5 2.50024H19.5C20.6046 2.50024 21.5 3.39568 21.5 4.50024Z', 'stroke-linecap': 'square', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'MediumSquare',
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
