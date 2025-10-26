import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22 12C19.6 12 17.6667 10.6667 17 10H7C6.33333 10.6667 4.4 12 2 12C2.57003 13.1399 3.64629 14 5 14H19C20.3537 14 21.43 13.1399 22 12Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16 6.00003H8C6.64632 6.00003 5.56997 5.13997 5 4.00003C6.50037 4.00003 8.49634 3.43906 9.6784 2.33783C9.89488 2.13615 10.1709 2 10.4668 2H13.5332C13.8291 2 14.1051 2.13616 14.3216 2.33786C15.5036 3.43909 17.4997 4.00003 19 4.00003C18.4301 5.13999 17.3536 6.00003 16 6.00003Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M17 10V6M7 10V6', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M19 22V14M5 22V14', 'stroke-linecap': 'round' })
const _hoisted5 = h('path', { 'd': 'M3 22H21', 'stroke-linecap': 'round' })
const _hoisted6 = h('path', { 'd': 'M10 22V19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19V22', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'ChinaTemple',
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
