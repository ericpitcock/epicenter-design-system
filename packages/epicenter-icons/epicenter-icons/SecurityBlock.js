import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 2L22 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6.84414 2.84414C8.3966 2.30388 10.1475 2 12 2C15.6351 2 18.8786 3.17002 21 5L21 11C21 12.8518 20.5177 14.4357 19.7765 15.7765M4.14568 4.14568C3.7351 4.41072 3.35209 4.69627 3 5V11C3 19 12 22 12 22C12 22 15.4489 20.8504 18.0767 18.0767', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SecurityBlock',
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
