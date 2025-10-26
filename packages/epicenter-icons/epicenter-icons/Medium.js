import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '6.5', 'cy': '12', 'r': '4.5', 'stroke-linejoin': 'round' })
const _hoisted2 = h('ellipse', { 'cx': '15.5', 'cy': '12', 'rx': '2.5', 'ry': '4.5', 'stroke-linejoin': 'round' })
const _hoisted3 = h('ellipse', { 'cx': '21', 'cy': '12', 'rx': '1', 'ry': '4.5', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Medium',
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
