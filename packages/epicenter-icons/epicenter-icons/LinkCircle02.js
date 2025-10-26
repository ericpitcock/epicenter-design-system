import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21.0001 12C21.0001 16.9706 16.9707 21 12.0001 21C7.0295 21 3.00006 16.9706 3.00006 12C3.00006 7.02944 7.0295 3 12.0001 3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11.0001 12.9995L20.3836 3.61697M21.0012 8V3H16.0011', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LinkCircle02',
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
