import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 8H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6.5 5H6.50896M10.491 5H10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10 16.5H8.5V22H15.5V16.5H14M10 16.5V15C10 13.8954 10.8954 13 12 13C13.1046 13 14 13.8954 14 15V16.5M10 16.5H14', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M5 20.5H4.5C3.39543 20.5 2.5 19.6046 2.5 18.5V4.00919C2.5 2.90505 3.39477 2.00979 4.49892 2.0092L19.4989 2.00108C20.6039 2.00048 21.5 2.89609 21.5 4.00108V18.5C21.5 19.6046 20.6046 20.5 19.5 20.5H19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'WebSecurity',
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
