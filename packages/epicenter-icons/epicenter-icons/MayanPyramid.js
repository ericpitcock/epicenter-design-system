import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15.5 17H21C21.5523 17 22 17.4477 22 18V22H2V18C2 17.4477 2.44772 17 3 17H8.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4 17V13C4 12.4477 4.44772 12 5 12H9.5M20 17V13C20 12.4477 19.5523 12 19 12H14.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M6 12V8C6 7.44772 6.44772 7 7 7H17C17.5523 7 18 7.44772 18 8V12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M9 7V3C9 2.44772 9.44772 2 10 2H14C14.5523 2 15 2.44772 15 3V7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M13.5 7L16 22M10.5 7L8 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'MayanPyramid',
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
