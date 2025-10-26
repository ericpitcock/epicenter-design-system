import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 12H6L7.5 8L9.5 15L13 6L15.5 18L18 12H22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Pulse01',
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
