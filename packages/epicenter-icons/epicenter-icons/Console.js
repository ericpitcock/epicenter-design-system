import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M13 11C13 12.1046 12.1046 13 11 13C9.89543 13 9 12.1046 9 11C9 9.89543 9.89543 9 11 9C12.1046 9 13 9.89543 13 11Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17.0005 5L15.5005 6.5M6.5 15.5L5 17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16.5 18.3727L15.5 22L18.5 21L21.5 22L20.5 18.3727M22 15.5C22 17.433 20.433 19 18.5 19C16.567 19 15 17.433 15 15.5C15 13.567 16.567 12 18.5 12C20.433 12 22 13.567 22 15.5Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M20 9C19.0905 4.99202 15.2832 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C11.5111 20 12.0122 19.9574 12.5 19.8756', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Console',
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
