import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15 3H16M19 3V3C20.6569 3 22 4.34315 22 6V6M15 21H16M19 21V21C20.6569 21 22 19.6569 22 18V18M22 10V14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2 6C2 4.34315 3.34315 3 5 3H11C11.5523 3 12 3.44772 12 4V20C12 20.5523 11.5523 21 11 21H5C3.34315 21 2 19.6569 2 18V6Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FlipRight',
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
