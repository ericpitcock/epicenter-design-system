import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21 7H3V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V7Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21 7H3L5.4 3.8C5.77771 3.29639 6.37049 3 7 3H17C17.6295 3 18.2223 3.29639 18.6 3.8L21 7Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 11L12 17.5M9 13.5L12 10.5L15 13.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Unarchive03',
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
