import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11.5 4.49998H4.0008C2.89628 4.49998 2.00087 5.39535 2.0008 6.49987L2.00011 18.4999C2.00005 19.6045 2.8955 20.5 4.00012 20.5H20C21.1046 20.5 22 19.6046 22 18.5V8.49999', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5 16.5C6.20831 13.9189 10.7122 13.7491 12 16.5M10.5 10.5C10.5 11.6046 9.60457 12.5 8.5 12.5C7.39543 12.5 6.5 11.6046 6.5 10.5C6.5 9.39543 7.39543 8.5 8.5 8.5C9.60457 8.5 10.5 9.39543 10.5 10.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M14.5 6L17 8.5L22 2.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PassportValid',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
