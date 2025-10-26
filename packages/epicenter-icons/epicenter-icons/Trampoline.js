import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 10V18M12 16V20M22 10V18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('ellipse', { 'cx': '12', 'cy': '10', 'rx': '10', 'ry': '6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Trampoline',
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
