import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '12', 'cy': '12', 'r': '10', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '12', 'cy': '12', 'r': '4', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 8H21M16 12V21M8 12V3M12 16H3', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'CameraLens',
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
