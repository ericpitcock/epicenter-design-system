import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7.5 15H4.5M6 3L6 15M2 4.5V4C2 3.44772 2.44772 3 3 3H9C9.55228 3 10 3.44772 10 4V4.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19.5 15H16.5M18 3L18 15M14 4.5V4C14 3.44772 14.4477 3 15 3H21C21.5523 3 22 3.44772 22 4V4.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2 19H10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M14 19L22 19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('circle', { 'cx': '12', 'cy': '19', 'r': '2', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TextVariableFront',
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
