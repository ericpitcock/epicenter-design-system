import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '6', 'cy': '6', 'r': '4', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10 6H20.7929C21.2383 6 21.4614 6.53857 21.1464 6.85355L6.85355 21.1464C6.53857 21.4614 6 21.2383 6 20.7929V9.99998', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15.5 12.5H20C20.5523 12.5 21 12.9477 21 13.5V20.5C21 21.0523 20.5523 21.5 20 21.5H13C12.4477 21.5 12 21.0523 12 20.5V16', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'GeometricShapes02',
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
