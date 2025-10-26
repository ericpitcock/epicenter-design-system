import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22 17H2M22 17L19.5806 14.5M22 17L19.5806 19.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7 22V2M7 2L9.5 4.5M7 2L4.5 4.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Coordinate01',
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
