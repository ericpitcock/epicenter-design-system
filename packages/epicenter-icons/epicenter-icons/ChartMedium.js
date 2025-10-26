import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 3H12.009M12 6H12.009M12 9H12.009M12 12H12.009M12 15H12.009M12 18H12.009', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6 7C6.67348 5.87847 7.58712 5 8.99282 5C14.9359 5 11.5954 17 17.9819 17C19.3976 17 20.3057 16.1157 21 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M21 21H3V3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ChartMedium',
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
