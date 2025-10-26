import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22 17.5H2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 21V14C22 12.8954 21.1046 12 20 12H4C2.89543 12 2 12.8954 2 14V21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M17.5 12V9.5C17.5 9.22386 17.2761 9 17 9H13.5C13.2239 9 13 9.22386 13 9.5V12', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M11 12V9.5C11 9.22386 10.7761 9 10.5 9H7C6.72386 9 6.5 9.22386 6.5 9.5V12', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M20.5 12V6.50333C20.5 6.1867 20.3508 5.88734 20.0922 5.70462C17.6716 3.99433 15.1695 3 12 3C8.83052 3 6.3284 3.99433 3.90783 5.70462C3.64924 5.88734 3.5 6.1867 3.5 6.50333V12', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BedDouble',
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
