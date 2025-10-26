import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12.558 20.5L5.4462 20.5C3.78935 20.5 2.43901 19.1509 2.50213 17.4953C2.79906 9.70548 4.20593 5.3407 4.9623 3.52073C5.23191 2.872 5.87606 2.50002 6.57858 2.50002L16.4257 2.5C17.1282 2.5 17.7723 2.87198 18.042 3.52071C18.6175 4.90566 19.5698 7.76425 20.123 12.4844', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8.5022 6.48438C8.5022 8.14123 9.84534 9.48438 11.5022 9.48438C13.1591 9.48438 14.5022 8.14123 14.5022 6.48438', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15.5 18.5H21.5M18.5 21.5V15.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ShoppingBagAdd',
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
