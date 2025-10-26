import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M13.5 18.5L16.5 15.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13.5 14.5L15 13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10.5 16.5L8 14.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M9.42495 21L3.07659 21C2.25689 21 1.73875 20.1297 2.13683 19.4215L11.0602 3.54651C11.4698 2.81783 12.5302 2.81783 12.9398 3.54651L21.8632 19.4215C22.2613 20.1297 21.7431 21 20.9234 21L14.575 21C13.9813 21 13.5 20.5243 13.5 19.9375V12.5331C13.5 11.9463 13.0187 11.4706 12.425 11.4706H11.575C10.9813 11.4706 10.5 11.9463 10.5 12.5331V19.9375C10.5 20.5243 10.0187 21 9.42495 21Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Forrst',
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
