import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M13.5 20.002V13.5H20L20.002 10.502H13.5V4.00195L10.502 4V10.502H4V13.5H10.502V20.002H13.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Add02',
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
