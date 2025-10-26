import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12.5 5H4.0008C2.89628 5 2.00087 5.89536 2.0008 6.99989L2.00011 18.9999C2.00005 20.1045 2.8955 21 4.00012 21H20C21.1046 21 22 20.1046 22 19V12.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5 17C6.20831 14.4189 10.7122 14.2491 12 17M10.5 11C10.5 12.1046 9.60457 13 8.5 13C7.39543 13 6.5 12.1046 6.5 11C6.5 9.89543 7.39543 9 8.5 9C9.60457 9 10.5 9.89543 10.5 11Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16 3L19 6M19 6L22 9M19 6L16 9M19 6L22 3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PassportExpired',
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
