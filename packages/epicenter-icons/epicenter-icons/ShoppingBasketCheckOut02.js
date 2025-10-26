import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 8V6.5C7 4.01472 9.01472 2 11.5 2V2C13.9853 2 16 4.01472 16 6.5V8', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13.5 22H6.73459C5.73929 22 4.89545 21.2681 4.75469 20.2828L3 8H20L19.5 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M17 20L19 22L21 20M19 15.5V21.3892', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M5 18H13.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ShoppingBasketCheckOut02',
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
