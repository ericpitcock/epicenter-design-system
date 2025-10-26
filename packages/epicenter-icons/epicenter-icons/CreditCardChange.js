import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 8H22M11 19H4C2.89543 19 2 18.1046 2 17V5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V9.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15 16V15H22L20.5 13M22 18V19H15L16.5 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CreditCardChange',
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
