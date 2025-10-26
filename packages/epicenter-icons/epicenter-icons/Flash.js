import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M9.9996 12.9998H4.4996L13.9996 2V10.985M14.0004 11.0002H19.5004L10.0004 22V13.015', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Flash',
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
