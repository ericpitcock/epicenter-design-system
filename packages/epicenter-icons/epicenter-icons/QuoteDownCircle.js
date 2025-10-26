import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '12', 'cy': '12', 'r': '10' })
const _hoisted2 = h('path', { 'd': 'M10.5 12V9C10.5 8.44772 10.0523 8 9.5 8H7.5C6.94772 8 6.5 8.44772 6.5 9V11C6.5 11.5523 6.94772 12 7.5 12H10.5ZM10.5 12V13C10.5 14.6569 9.15685 16 7.5 16M17.5 12V9C17.5 8.44772 17.0523 8 16.5 8H14.5C13.9477 8 13.5 8.44772 13.5 9V11C13.5 11.5523 13.9477 12 14.5 12H17.5ZM17.5 12V13C17.5 14.6569 16.1569 16 14.5 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'QuoteDownCircle',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
