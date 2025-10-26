import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8 22H19.8461C21.0356 22 21.9999 21.1046 21.9999 20V15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13 16.4444V3.11111C13 2.49746 12.5075 2 11.9 2H3.1C2.49249 2 2 2.49746 2 3.11111V16.4444C2 19.5127 4.46243 22 7.5 22C10.5376 22 13 19.5127 13 16.4444Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M7.5 17.5H7.50898', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M2 8H13M2 13H13', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M16.1106 4C16.6197 4.45408 17.1963 5.02182 17.8884 5.70324C19.9628 7.74567 21 8.76689 21 10.0359C21 11.3049 19.9628 12.3261 17.8884 14.3685L10.8476 21.3008C10.5818 21.5625 10.298 21.7955 10 22', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'Swatch',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4,
            _hoisted5
        ])
    }
})
