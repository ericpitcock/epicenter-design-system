import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17.8846 8L15.023 20.4004C15.0077 20.4666 15 20.5343 15 20.6022C15 21.0981 15.4019 21.5 15.8978 21.5H20.1022C20.5981 21.5 21 21.0981 21 20.6022C21 20.5343 20.9923 20.4666 20.977 20.4004L19.5 14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16 21.5H3.89776C3.40194 21.5 3 21.0981 3 20.6022C3 20.5343 3.00771 20.4666 3.02299 20.4004L5.82112 8.27514C5.92583 7.82141 6.32986 7.5 6.79551 7.5H17.2045C17.6701 7.5 18.0742 7.82141 18.1789 8.27514L21 20.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15 7.5V5.5C15 3.84315 13.6569 2.5 12 2.5C10.3431 2.5 9 3.84315 9 5.5V7.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M10 10.5H12.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ShoppingBag02',
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
