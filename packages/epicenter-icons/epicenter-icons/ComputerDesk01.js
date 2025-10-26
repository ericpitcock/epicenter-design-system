import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22 12H2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 17H13C12.4477 17 12 16.5523 12 16V12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M4 12V22M20 12V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('rect', { 'height': '7', 'rx': '1', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'width': '10', 'x': '7', 'y': '2' })
const _hoisted5 = h('path', { 'd': 'M13.5 9L14 12M10.5 9L10 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ComputerDesk01',
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
