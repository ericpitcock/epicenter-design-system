import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8 6H20C21.1046 6 22 6.89543 22 8V20C22 21.1046 21.1046 22 20 22H8C6.89543 22 6 21.1046 6 20V8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2 6L4 6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M6 2V4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ArtboardTool',
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
