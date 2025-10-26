import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11.5 3.5H4.61111C3.44518 3.5 2.5 4.44518 2.5 5.61111L2.5 19.3889C2.5 20.5548 3.44518 21.5 4.61111 21.5L18.3889 21.5C19.5548 21.5 20.5 20.5548 20.5 19.3889V12.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21.5 6C21.5 7.933 19.933 9.5 18 9.5C16.067 9.5 14.5 7.933 14.5 6C14.5 4.067 16.067 2.5 18 2.5C19.933 2.5 21.5 4.067 21.5 6Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M7.5 12.5H11.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M7.5 16.5H15.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'NotificationSquare',
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
