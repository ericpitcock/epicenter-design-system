import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22 5.5V5C22 3.89543 21.1046 3 20 3H4C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V18.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6.5 3V21', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16.9922 16H17.0004', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M22 11C21 10 18.9526 9 17 9C15.0474 9 13 10 12 11M14.5 13.5C15.1398 12.8468 16.0237 12.5 17 12.5C17.9763 12.5 18.8602 12.8468 19.5 13.5', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'TabletConnectedWifi',
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
