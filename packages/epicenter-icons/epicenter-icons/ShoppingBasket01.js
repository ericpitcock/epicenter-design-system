import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5.5 7H18.5C19.3284 7 20 7.67157 20 8.5V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V8.5C4 7.67157 4.67157 7 5.5 7Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16 9.5C16 5.63401 14.2091 2 12 2C9.79086 2 8 5.63401 8 9.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ShoppingBasket01',
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
