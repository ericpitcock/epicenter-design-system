import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 12H4C2.89543 12 2 12.8954 2 14V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V14C22 12.8954 21.1046 12 20 12Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17.991 17H18M14 17H14.009', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M5.5 17H10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12.4996 9H12.5086M17 3.95174C15.8483 2.74585 14.2574 2 12.5 2C10.7426 2 9.15165 2.74585 8 3.95174M10.25 6.30769C10.8258 5.70475 11.6213 5.33182 12.5 5.33182C13.3787 5.33182 14.1742 5.70475 14.75 6.30769', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'Router',
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
