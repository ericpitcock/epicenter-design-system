import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19.5 2.5C20.6046 2.5 21.5 3.39543 21.5 4.5V19.5C21.5 20.6046 20.6046 21.5 19.5 21.5H4.5C3.39543 21.5 2.5 20.6046 2.5 19.5V4.5C2.5 3.39543 3.39543 2.5 4.5 2.5H19.5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17.5 9.5C15.5 9.5 13.5 8 13.5 6V14.5C13.5 16.433 11.933 18 10 18C8.067 18 6.5 16.433 6.5 14.5C6.5 12.567 8.067 11 10 11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Tiktok',
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
