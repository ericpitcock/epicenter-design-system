import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 12H8V5H12V19L15.9996 19L15.9996 12H20.9996', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'WaveSquare',
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
