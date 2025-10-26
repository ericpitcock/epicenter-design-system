import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18.5 5H17V19H18.5M18.5 5H20V19H18.5M18.5 5V19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 8H10.5V19H12M12 8H13.5V19H12M12 8V19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M5.5 12H4V19H5.5M5.5 12H7V19H5.5M5.5 12V19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FullSignal',
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
