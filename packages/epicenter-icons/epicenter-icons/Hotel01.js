import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10.5 8V10M10.5 10V12M10.5 10H13.5M13.5 8V10M13.5 10V12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14.0063 22.0001V18.0012C14.0063 16.896 13.1104 16 12.0051 16C10.8999 16 10.0039 16.896 10.0039 18.0012V22.0001', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M6 8H7M6 12H7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M17 8H18M17 12H18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M3 4V21C3 21.5523 3.44772 22 4 22H20C20.5523 22 21 21.5523 21 21V4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M2 4H8C9 2.5 10.4262 2 12 2C13.5738 2 15 2.5 16 4H22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Hotel01',
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
