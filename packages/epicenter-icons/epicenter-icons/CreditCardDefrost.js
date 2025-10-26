import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 8H22M11 19H4C2.89543 19 2 18.1046 2 17V5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5L22 10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15.0161 13C11.8458 15.7942 17.3195 17.7518 15.0161 21M18.2161 13C15.0458 15.7942 20.5195 17.7518 18.2161 21M21.4161 13C18.2458 15.7942 23.7195 17.7518 21.4161 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CreditCardDefrost',
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
