import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18.5 11.9999L12 14.5L5.5 11.9999M5 11.9999L12 1.99994L19 11.9999L12 21.9999L5 11.9999Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Ethereum',
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
