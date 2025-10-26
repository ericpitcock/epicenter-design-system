import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6.5 6.5V20.8864M6.5 6.5L20.9347 5.53769M6.5 6.5L2.92056 3.81542M2.5 3.5L16.5 2.5L21.5 5.5V19.5L6.5 21.5L2.5 16.5V3.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12.4704 17.704L9.5 18.1M18.5 8.70001L16.2654 8.84899M17.5 8.76668V16.9998L16.5 17.0001L11.7148 9.15236L9.5 9.30001M11 9.20001V17.7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Notion02',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
