import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 4C12 3.44772 12.4477 3 13 3H19C20.6569 3 22 4.34315 22 6V18C22 19.6569 20.6569 21 19 21H13C12.4477 21 12 20.5523 12 20V4Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9 3H8M5 3V3C3.34315 3 2 4.34315 2 6V6M9 21H8M5 21V21C3.34315 21 2 19.6569 2 18V18M2 10V14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FlipLeft',
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
