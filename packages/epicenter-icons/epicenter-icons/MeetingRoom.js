import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17 21.0001V5C17 3.89543 16.1046 3 15 3H5C3.89543 3 3 3.89543 3 5V21L17 21.0001Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17 6H19C20.1046 6 21 6.89543 21 8V20.9999H14.5', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M13 11V13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'MeetingRoom',
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
