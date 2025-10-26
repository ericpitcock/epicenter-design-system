import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 12H5L6.5 8L9 15L10.5 12H12.5L14.5 7L16.5 17L19 12H22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Pulse02',
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
