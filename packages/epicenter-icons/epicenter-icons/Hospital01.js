import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M14 2V4.49829M14 4.49829V7M14 4.49829H10M10 2V4.49829M10 4.49829V7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7 5H6C4.89543 5 4 5.89543 4 7V22M17 5H18C19.1046 5 20 5.89543 20 7V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M14 11H16H14Z', 'fill': 'currentColor' })
const _hoisted4 = h('path', { 'd': 'M14 14H16H14Z', 'fill': 'currentColor' })
const _hoisted5 = h('path', { 'd': 'M8 14H10H8Z', 'fill': 'currentColor' })
const _hoisted6 = h('path', { 'd': 'M8 11H10H8Z', 'fill': 'currentColor' })
const _hoisted7 = h('path', { 'd': 'M14 11H16M14 14H16M8 14H10M8 11H10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted8 = h('path', { 'd': 'M2.5 22H9.5V19C9.5 18.4477 9.94772 18 10.5 18H13.5C14.0523 18 14.5 18.4477 14.5 19V22H21.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Hospital01',
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
            _hoisted7,
            _hoisted8
        ])
    }
})
