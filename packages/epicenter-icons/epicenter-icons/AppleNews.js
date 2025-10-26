import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M14 3H21.0016V10L14 3Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10 21H2.99941V14L10 21Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M21 21L21 15L9 3H3V9L15 21H21Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'AppleNews',
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
