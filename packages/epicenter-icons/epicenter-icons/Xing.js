import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 6H3L5 11L3 16H7L9 11L7 6Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21 2H16L10 15L14 22H19L15 15L21 2Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Xing',
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
