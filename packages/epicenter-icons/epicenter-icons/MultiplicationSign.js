import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'MultiplicationSign',
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
