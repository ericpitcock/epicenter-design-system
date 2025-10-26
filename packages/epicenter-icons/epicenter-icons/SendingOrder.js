import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 18C9.3161 18 6.86556 18.3776 5 19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18 13C20.2091 13 22 11.2091 22 9C22 6.79086 20.2091 5 18 5C17.1767 5 16.4115 5.24874 15.7754 5.67518C15.2287 4.11714 13.7448 3 12 3C10.2552 3 8.77132 4.11714 8.22461 5.67518C7.58854 5.24874 6.82332 5 6 5C3.79086 5 2 6.79086 2 9C2 11.2091 3.79086 13 6 13V18.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15 18.5H20.5M18.5 21L21 18.5L18.5 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SendingOrder',
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
