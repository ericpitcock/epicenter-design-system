import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18.5 11.5V18.5M4.5 18.5V10C4.5 6.13401 7.63401 3 11.5 3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 18.5H3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M13 20.5C13 21.3284 12.3284 22 11.5 22M10 20.5C10 21.3284 10.6716 22 11.5 22M11.5 22V20.5', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M15.5 3.5L19.5 7.5M21 5.5C21 3.567 19.433 2 17.5 2C15.567 2 14 3.567 14 5.5C14 7.433 15.567 9 17.5 9C19.433 9 21 7.433 21 5.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'NotificationBlock02',
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
