import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 9H22M12.5 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6L22 11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 16.5H15M18.5 13V20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CreditCardAdd',
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
