import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 15H12.01', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6 22H18', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M2 6L5.5 19H18.5L22 6L16.5 10L12 2L7.5 10L2 6Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Crown',
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
