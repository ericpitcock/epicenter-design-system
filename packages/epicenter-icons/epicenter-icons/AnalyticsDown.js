import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17.0002 18V16M12.0002 18V15M7.00024 18V13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6 6C10 11 18 10 18 10M18 10L16 8M18 10L16 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M19.5 2.5C20.6046 2.5 21.5 3.39543 21.5 4.5V19.5C21.5 20.6046 20.6046 21.5 19.5 21.5H4.5C3.39543 21.5 2.5 20.6046 2.5 19.5V4.5C2.5 3.39543 3.39543 2.5 4.5 2.5H19.5Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'AnalyticsDown',
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
