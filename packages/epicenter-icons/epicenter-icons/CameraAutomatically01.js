import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 8.5C2 7.39543 2.89543 6.5 4 6.5H7.5L9.0547 4.16795C9.3329 3.75065 9.80125 3.5 10.3028 3.5H13.6972C14.1988 3.5 14.6671 3.75065 14.9453 4.16795L16.5 6.5H20C21.1046 6.5 22 7.39543 22 8.5V18.5C22 19.6046 21.1046 20.5 20 20.5H4C2.89543 20.5 2 19.6046 2 18.5V8.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19 9.5V9.51', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15 16.5L12.6682 9.97087C12.5673 9.68849 12.2998 9.5 12 9.5C11.7002 9.5 11.4327 9.68849 11.3318 9.97087L9 16.5M10.5 14H13.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CameraAutomatically01',
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
