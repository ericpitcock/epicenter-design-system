import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5 6.5H8M8 6.5H12M8 6.5V5M10 6.5C9.5 8.5 8 11 6 12.5M7 8.5C7.33333 9.16667 9 11 9.5 11.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17 7H20C21.1046 7 22 7.89543 22 9V20C22 21.1046 21.1046 22 20 22H9C7.89543 22 7 21.1046 7 20V17M17 7V4C17 2.89543 16.1046 2 15 2L4 2C2.89543 2 2 2.89543 2 4V15C2 16.1046 2.89543 17 4 17H7M17 7L7 17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M13 19L15 13H16L18 19M14 17H17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Translation',
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
