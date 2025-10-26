import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 9L11 9.00001M21 9L17 9.00001', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17 4V14.7857C17 16.5609 15.6569 18 14 18C12.3431 18 11 16.5609 11 14.7857V4', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M5 3V19C5 20.1046 5.89543 21 7 21H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M10.0002 4H18.0002', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'Chemistry01',
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
