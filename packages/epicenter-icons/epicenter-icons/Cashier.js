import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 14.5H4C2.89543 14.5 2 15.3954 2 16.5V19.5C2 20.6046 2.89543 21.5 4 21.5H20C21.1046 21.5 22 20.6046 22 19.5V16.5C22 15.3954 21.1046 14.5 20 14.5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 14.5L19.1977 7.27914C19.0851 6.26627 18.229 5.5 17.2099 5.5H6.79009C5.77099 5.5 4.91486 6.26627 4.80232 7.27914L4 14.5' })
const _hoisted3 = h('path', { 'd': 'M11.5 2.5H14M16.5 2.5H14M14 2.5V5.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M9.5 17.5L10.5 18H13.5L14.5 17.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M8 8.5H10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Cashier',
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
            _hoisted4,
            _hoisted5
        ])
    }
})
