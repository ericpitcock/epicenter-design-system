import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M14 14L6 6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11 17L17 11L18 18L11 17Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ArrowDownRight02',
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
