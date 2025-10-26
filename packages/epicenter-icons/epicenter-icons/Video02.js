import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18 17.5V6.5C18 5.39543 17.1046 4.5 16 4.5H4C2.89543 4.5 2 5.39543 2 6.5V17.5C2 18.6046 2.89543 19.5 4 19.5H16C17.1046 19.5 18 18.6046 18 17.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11.5 8L14.5 8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18 15L22 17.5V6.5L18 9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Video02',
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
