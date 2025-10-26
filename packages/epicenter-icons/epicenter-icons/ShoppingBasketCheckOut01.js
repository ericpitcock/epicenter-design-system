import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M13.5 22H6C4.34315 22 3 20.6569 3 19V8.5C3 7.67157 3.67157 7 4.5 7H17.5C18.3284 7 19 7.67157 19 8.5V12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15 9.5C15 5.63401 13.2091 2 11 2C8.79086 2 7 5.63401 7 9.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15 19L18 22L21 19M18 21.5V15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ShoppingBasketCheckOut01',
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
