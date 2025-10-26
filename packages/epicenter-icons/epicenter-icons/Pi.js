import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16.5 5.5L15.5046 18.7753C15.4244 19.9801 16.4111 21 17.6569 21C18.7113 21 19.6111 20.2613 19.7844 19.2535L20 18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10 6C9.86667 9.0625 9.6 14.75 9.2 16.5C8.8 18.25 8 20 6 20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3 9.5C3.28564 7.21485 5.22819 5.5 7.53113 5.5H18C19.4865 5.5 21 4.5 21 3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Pi',
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
