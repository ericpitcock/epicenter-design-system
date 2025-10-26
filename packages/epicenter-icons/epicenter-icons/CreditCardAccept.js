import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M14.5 17.5L17 20L22 14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2 9H22M11.5 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CreditCardAccept',
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
