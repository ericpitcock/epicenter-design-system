import { defineComponent, h } from 'vue'

const _hoisted1 = h('ellipse', { 'cx': '7', 'cy': '15.5', 'rx': '3', 'ry': '5.5', 'stroke-linecap': 'round' })
const _hoisted2 = h('ellipse', { 'cx': '17', 'cy': '15.5', 'rx': '3', 'ry': '5.5', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M17 10V7C15.5 7 15 5.89877 15 5C15 3.89543 15.8954 3 17 3C18.1046 3 19 3.89543 19 5V6L20 7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M7 10V7C5.5 7 5 5.89877 5 5C5 3.89543 5.89543 3 7 3C8.10457 3 9 3.89543 9 5V6L10 7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M4 14L10 18' })
const _hoisted6 = h('path', { 'd': 'M14 14L20 18' })

export default defineComponent({
    name: 'EarRings02',
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
