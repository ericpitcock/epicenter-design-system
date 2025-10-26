import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15 2H10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4 13.5C4 8.80558 7.80558 5 12.5 5C14.8472 5 16.9722 5.95139 18.5104 7.48959M18.5104 7.48959C20.0486 9.02779 21 11.1528 21 13.5C21 18.1944 17.1944 22 12.5 22H3M18.5104 7.48959L20 6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M8 19H3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M6 16H3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M12.5 13.5L16 10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Timer02',
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
