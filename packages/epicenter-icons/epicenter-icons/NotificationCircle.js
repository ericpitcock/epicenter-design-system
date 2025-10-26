import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21.5 6C21.5 7.933 19.933 9.5 18 9.5C16.067 9.5 14.5 7.933 14.5 6C14.5 4.067 16.067 2.5 18 2.5C19.933 2.5 21.5 4.067 21.5 6Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C6.75329 21.5 2.5 17.2467 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M8 12H12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M8 16H16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'NotificationCircle',
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
