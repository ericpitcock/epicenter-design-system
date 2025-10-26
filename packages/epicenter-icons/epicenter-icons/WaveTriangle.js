import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3.00006 12H8.00006L12.0001 19V5L15.9997 12H20.9997', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'WaveTriangle',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1
        ])
    }
})
