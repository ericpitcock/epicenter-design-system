import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11 21H4.5C3.39543 21 2.5 20.1046 2.5 19V4C2.5 2.89543 3.39543 2 4.5 2H19.5C20.6046 2 21.5 2.89543 21.5 4V12.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8.5 2V21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M21.5 8L2.5 8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M14 19.5H19.5C20.6046 19.5 21.5 18.6046 21.5 17.5V15.5M14 19.5L16.5 17M14 19.5L16.5 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Pivot',
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
