import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 2L18.5 5.5V12.5L12 16L5.5 12.5V5.5L12 2Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8 14L7 22L12 20L17 22L16 14', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10 9L11.5 10.5L14 7.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Award04',
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
