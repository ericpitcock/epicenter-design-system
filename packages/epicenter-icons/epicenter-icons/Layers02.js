import { defineComponent, h } from 'vue'

const _hoisted1 = h('rect', { 'height': '11', 'rx': '1', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'width': '11', 'x': '11', 'y': '2' })
const _hoisted2 = h('path', { 'd': 'M10.5 6.5H7.5C6.94772 6.5 6.5 6.94771 6.5 7.5V16.5C6.5 17.0523 6.94771 17.5 7.5 17.5H16.5C17.0523 17.5 17.5 17.0523 17.5 16.5V13.5', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M6 11L3 11C2.44772 11 2 11.4477 2 12V21C2 21.5523 2.44771 22 3 22H12C12.5523 22 13 21.5523 13 21V18', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Layers02',
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
