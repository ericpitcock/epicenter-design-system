import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6 16H8.5M11 16H8.5M8.5 16V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18.0002 16L14 16V19H18.0002V22H14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M4 12.9978L4.01994 3.99557C4.02238 2.89186 4.91845 1.99877 6.02216 2L12.9958 2.00776L20 8.99481L19.9922 12.9978M13 2.49778V6.99778C13 8.10235 13.8954 8.99778 15 8.99778H19.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Typescript02',
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
