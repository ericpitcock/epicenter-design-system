import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22 12H2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 17H13C12.4477 17 12 16.5523 12 16V12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M4 12V22M20 12V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('rect', { 'height': '7', 'rx': '1', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'width': '10', 'x': '3', 'y': '2' })
const _hoisted5 = h('path', { 'd': 'M9.5 9L10 12M6.5 9L6 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M19 12L20.2572 8.85697C20.6674 7.83141 20.1686 6.66747 19.1431 6.25724L18.5 6M18.5 6C18.5 4.89543 17.6046 4 16.5 4H16V8H16.5C17.6046 8 18.5 7.10457 18.5 6Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ComputerDesk03',
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
