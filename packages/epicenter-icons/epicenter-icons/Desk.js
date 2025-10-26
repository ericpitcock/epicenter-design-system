import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5 17V22M19 17V22', 'stroke-linecap': 'round' })
const _hoisted2 = h('path', { 'd': 'M8 17V20M16 17V20', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M7 8V4C7 2.89543 7.89543 2 9 2H15C16.1046 2 17 2.89543 17 4V8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M2 8H22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M3 8V15C3 16.1046 3.89543 17 5 17H19C20.1046 17 21 16.1046 21 15V8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Desk',
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
