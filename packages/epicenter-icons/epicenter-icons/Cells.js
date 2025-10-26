import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19.5 16.5L21.5 12.5L19.5 8.50017L14.5 8.50017L12.5 12.5L14.5 16.5H19.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9.5 10.5002L11.5 6.50017L9.5 2.50034L4.5 2.50034L2.5 6.50017L4.5 10.5002H9.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9.5 21.5L11.5 17.5L9.5 13.5002L4.5 13.5002L2.5 17.5L4.5 21.5H9.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Cells',
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
