import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '20', 'cy': '18.5', 'r': '2', 'stroke-linejoin': 'round' })
const _hoisted2 = h('rect', { 'height': '17', 'stroke-linejoin': 'round', 'width': '4', 'x': '2', 'y': '3.5' })
const _hoisted3 = h('path', { 'd': 'M15 3.5H11.1985C11.1985 9.8463 6 12.5 6 12.5L11.8931 20.5H16.5L11 13C11 13 15 10 15 3.5Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Klarna',
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
