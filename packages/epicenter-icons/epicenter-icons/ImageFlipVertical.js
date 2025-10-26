import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 10.5L5 2V10.5H19Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19 13.5L5 22V13.5H19Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ImageFlipVertical',
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
