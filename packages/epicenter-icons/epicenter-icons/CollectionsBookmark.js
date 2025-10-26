import { defineComponent, h } from 'vue'

const _hoisted1 = h('rect', { 'height': '16', 'rx': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'width': '15', 'x': '3', 'y': '5.5' })
const _hoisted2 = h('path', { 'd': 'M7 2.5H19C20.1046 2.5 21 3.39543 21 4.5V16.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10 5.5V11.5L12.5 9.5L15 11.5V5.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CollectionsBookmark',
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
