import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6 5H14.5C16.433 5 18 6.567 18 8.5C18 10.433 16.433 12 14.5 12M6 19H14.5C16.433 19 18 17.433 18 15.5C18 13.567 16.433 12 14.5 12M14.5 12H7.2001M7.0001 5V19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9.5 3V5M13.5 3V5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9.5 19V21M13.5 19V21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Bitcoin',
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
