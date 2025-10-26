import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6.5 5H17C18.1046 5 19 5.89543 19 7V15C19 15.5523 18.5523 16 18 16H17M6.5 5C5.67157 5 5 5.67157 5 6.5V8H8M6.5 5C7.32843 5 8 5.67157 8 6.5V8M5 11V19C5 19.5523 5.44772 20 6 20H16C16.5523 20 17 19.5523 17 19V16M8 8V15C8 15.5523 8.44772 16 9 16H17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 4V6C22 7.10457 21.1046 8 20 8H19M2 4V6C2 7.10457 2.89543 8 4 8H5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Towels',
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
