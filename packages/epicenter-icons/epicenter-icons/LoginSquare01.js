import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M9 18V20C9 20.8284 9.67157 21.5 10.5 21.5H19.5C20.3284 21.5 21 20.8284 21 20V4C21 3.17157 20.3284 2.5 19.5 2.5H10.5C9.67157 2.5 9 3.17157 9 4V6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12.5 15.5L16 12L12.5 8.5M15 12H3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LoginSquare01',
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
