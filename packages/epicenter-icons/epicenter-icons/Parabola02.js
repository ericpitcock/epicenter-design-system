import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21 2C21 10.2831 16.9706 16.9978 12 16.9978C7.02944 16.9978 3 10.2831 3 2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3.5 20H4.5M15.5 20H16.5M19.5 20H20.5M7.5 20H8.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9.5 4.5L12 2L14.5 4.5M12 22V2.60878', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Parabola02',
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
