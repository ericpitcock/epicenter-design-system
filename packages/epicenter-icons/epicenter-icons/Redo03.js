import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21 8H9C5.68629 8 3 10.6863 3 14C3 17.3137 5.68629 20 9 20H13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17 12L21 8L17 4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Redo03',
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
