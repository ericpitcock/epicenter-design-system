import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8.5 16C5.1077 15.5133 2.5 12.5265 2.5 9C2.5 5.13401 5.63401 2 9.5 2C11.6524 2 13.6763 2.97153 15 4.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9.5 7V9.61399L8 10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M13.5 15C13.0465 14.0053 12.5 13 12.5 12C12.5 9.42677 15.1667 9 16.9991 7C18.8315 9 21.5 9.42677 21.5 12C21.5 12.9947 20.9535 14.0053 20.5 15M13.5 15V22H17M13.5 15H11.5M13.5 15H20.5M20.5 15V22H17M20.5 15H22.5M17 22V19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SalahTime',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 25 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
