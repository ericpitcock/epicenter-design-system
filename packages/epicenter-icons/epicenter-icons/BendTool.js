import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '19', 'cy': '4', 'r': '2', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '5', 'cy': '20', 'r': '2', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M5 18C5 10 10 4 17 4', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BendTool',
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
