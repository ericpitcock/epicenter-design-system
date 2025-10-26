import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 11L6 18L13 17L7 11Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10 14L17.9975 6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ArrowDownLeft02',
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
