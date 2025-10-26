import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M13.5 13.5V9C13.5 8.44772 13.0523 8 12.5 8H7.5C6.94772 8 6.5 8.44772 6.5 9V20C6.5 20.5523 6.94772 21 7.5 21H12.5C13.0523 21 13.5 20.5523 13.5 20V18.5M10.5 10.5V15C10.5 15.5523 10.9477 16 11.5 16H16.5C17.0523 16 17.5 15.5523 17.5 15V4C17.5 3.44772 17.0523 3 16.5 3H11.5C10.9477 3 10.5 3.44772 10.5 4V5.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 10.5L22 9M20 14.5L22 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M4 10.5L2 9M4 14.5L2 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Unlink06',
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
