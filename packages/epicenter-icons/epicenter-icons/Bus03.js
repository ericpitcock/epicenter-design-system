import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6 10V5M11 10V5M16 10V5.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5.01028 17H3.00016C2.44781 17 2.00007 16.5522 2.00016 15.9998L2.00175 5.99984C2.00184 5.44762 2.44953 5 3.00175 5H16.0001C19.3138 5 22.0001 7.68629 22.0001 11V16C22.0001 16.5523 21.5523 17 21.0001 17H18.9981M14.9981 17H8.9981', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M7 19C8.10457 19 9 18.1046 9 17C9 15.8954 8.10457 15 7 15C5.89543 15 5 15.8954 5 17C5 18.1046 5.89543 19 7 19Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M17 19C18.1046 19 19 18.1046 19 17C19 15.8954 18.1046 15 17 15C15.8954 15 15 15.8954 15 17C15 18.1046 15.8954 19 17 19Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M2 10H16L18 12H22', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Bus03',
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
