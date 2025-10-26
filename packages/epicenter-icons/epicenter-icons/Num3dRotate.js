import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '12', 'cy': '12', 'r': '10', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2 12C7.18491 16.8269 16.4642 16.3877 22 12.3556', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M11.5368 2C6.98945 6.5 6.48414 17 11.9941 22', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Num3dRotate',
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
