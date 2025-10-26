import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10C15 12.0786 12.1196 13.9172 10.3503 14.8505C9.54685 15.2743 9 16.0917 9 17H15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4.5 21.5L19.5 21.5C20.6046 21.5 21.5 20.6046 21.5 19.5V4.5C21.5 3.39543 20.6046 2.5 19.5 2.5H4.5C3.39543 2.5 2.5 3.39543 2.5 4.5V19.5C2.5 20.6046 3.39543 21.5 4.5 21.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TwoSquare',
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
