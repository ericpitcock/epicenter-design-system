import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M14 16.6L16 19L22 13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21.9379 9.5C21.9786 9.23147 22 8.96275 22 8.69444C22 5.82563 19.8947 3.5 17 3.5C15.5 3.5 14 4 12 6C10 4 8.5 3.5 7 3.5C4.10526 3.5 2 5.82563 2 8.69444C2 14.5 12 20.5 12 20.5C12 20.5 12.1832 20.3901 12.5 20.1856', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'HeartCheck',
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
