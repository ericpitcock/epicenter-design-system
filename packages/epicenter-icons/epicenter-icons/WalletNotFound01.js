import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 2L22 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7 3H16C17.1046 3 18 3.89543 18 5V7H11M3.58579 3.58579C3.22386 3.94772 3 4.44772 3 5C3 6.10457 3.89543 7 5 7H7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3 5V19C3 20.1046 3.89543 21 5 21H19C19.5523 21 20.0523 20.7761 20.4142 20.4142M21 17V9C21 7.89543 20.1046 7 19 7H11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M21 12H18C17.4477 12 17 12.4477 17 13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'WalletNotFound01',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4
        ])
    }
})
