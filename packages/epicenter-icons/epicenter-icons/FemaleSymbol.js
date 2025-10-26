import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18 8C18 11.3137 15.3137 14 12 14C8.68629 14 6 11.3137 6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 14V22M9 18H15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FemaleSymbol',
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
