import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5 14L8.5 17.5L12.8953 12.8953M19 6.5L14.8488 10.8488', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5 5L19 19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CheckUnread03',
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
