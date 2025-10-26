import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 11V18.5M5 18.5V10C5 6.13401 8.13401 3 12 3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20.5 18.5H3.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M13.5 20.5C13.5 21.3284 12.8284 22 12 22M10.5 20.5C10.5 21.3284 11.1716 22 12 22M12 22V20.5', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M15 2H20L15 8H20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'NotificationSnooze02',
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
            _hoisted4
        ])
    }
})
