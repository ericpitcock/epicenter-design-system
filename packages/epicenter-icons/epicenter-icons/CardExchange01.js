import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 21H3.99997C2.8954 21 1.99997 20.1046 1.99997 19V14C1.99997 12.8954 2.8954 12 3.99997 12H12C13.1045 12 14 12.8954 14 14V19C14 20.1046 13.1045 21 12 21Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17 11.9995H20C21.1046 11.9995 22 11.1041 22 9.99951V5C22 3.89543 21.1046 3 20 3H12C10.8955 3 10 3.89543 10 5V9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9.99997 6L22 6', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M1.99997 15L14 15', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M1.99997 9V6C1.99997 4.89543 2.8954 4 3.99997 4H6.99997L5.49997 6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M22 15L22 18C22 19.1046 21.1045 20 20 20L17 20L18.5 18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CardExchange01',
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
            _hoisted5,
            _hoisted6
        ])
    }
})
