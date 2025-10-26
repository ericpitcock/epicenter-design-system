import { defineComponent, h } from 'vue'

const _hoisted1 = h('rect', { 'height': '19', 'rx': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'width': '18', 'x': '3', 'y': '2.5' })
const _hoisted2 = h('path', { 'd': 'M11 2.5V10.5L14 8.5L17 10.5V2.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Bookmark03',
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
