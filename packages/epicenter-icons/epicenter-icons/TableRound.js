import { defineComponent, h } from 'vue'

const _hoisted1 = h('ellipse', { 'cx': '12', 'cy': '6.5', 'rx': '10', 'ry': '3', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15 20.5H9L9.77208 18.1838C9.90819 17.7754 10.2903 17.5 10.7208 17.5H13.2792C13.7097 17.5 14.0918 17.7754 14.2279 18.1838L15 20.5Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 17.5V9.5', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TableRound',
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
