import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16.0547 4V2.5M19.0547 4.99273L20.5547 3.5M20.0547 8H21.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21.5001 12V19.5C21.5001 20.6046 20.6047 21.5 19.5001 21.5H4.50011C3.39554 21.5 2.50011 20.6046 2.50011 19.5V4.5C2.50011 3.39543 3.39554 2.5 4.50011 2.5H12.0557', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2.55469 15C11.0547 15 16.0547 8 16.0547 8M16.0547 8H12.5547M16.0547 8V11.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ChartBreakoutSquare',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
