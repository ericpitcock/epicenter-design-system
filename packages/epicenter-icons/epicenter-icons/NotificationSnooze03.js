import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 19.0011L18.7499 11M4 19.0011L5.65098 8.43407C6.13971 5.30601 8.83398 3 12 3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 19C20 17.3431 16.4183 16 12 16C7.58172 16 4 17.3431 4 19C4 20.6569 7.58172 22 12 22C16.4183 22 20 20.6569 20 19Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M13 19H11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M15 2H20L15 8H20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'NotificationSnooze03',
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
