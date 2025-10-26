import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4.0036 4.5L4.0036 18.9951C4.00161 20.6534 5.34534 21.9987 7.0036 21.9987H20V6.99873', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19.543 2H6.5C5.11929 2 4 3.11929 4 4.5C4 5.88071 5.11929 7 6.5 7H20M6.5 4.5H18V6.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15.5 12.5H8.5M12.5 16.5H8.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Book04',
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
