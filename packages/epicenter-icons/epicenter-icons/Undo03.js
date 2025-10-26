import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 8H15C18.3137 8 21 10.6863 21 14C21 17.3137 18.3137 20 15 20H11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7 12L3 8L7 4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Undo03',
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
