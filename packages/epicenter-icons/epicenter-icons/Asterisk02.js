import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12.0001 4V20M19 8L5.00025 16M18.9997 16L5 8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Asterisk02',
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
