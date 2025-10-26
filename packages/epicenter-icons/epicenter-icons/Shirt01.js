import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6 9V20C6 20.5523 6.44772 21 7 21H17C17.5523 21 18 20.5523 18 20V9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6 12L2.63289 8.63289C2.27258 8.27258 2.24082 7.69898 2.55913 7.30109L6 3H9C9 4.65685 10.3431 6 12 6C13.6569 6 15 4.65685 15 3H18L21.4409 7.30109C21.7592 7.69898 21.7274 8.27258 21.3671 8.63289L18 12', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Shirt01',
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
