import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4.5 16H6M18 16H19.5M10 16H14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17.5 19V22M6.5 19V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M20 16V5C20 3.34315 18.6569 2 17 2H7C5.34315 2 4 3.34315 4 5V16C4 17.6569 5.34315 19 7 19H17C18.6569 19 20 17.6569 20 16Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M4 12C6.41266 12.655 9 13 11.5 13C14 13 17.5683 12.5802 20 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M22 10L20.9542 10.6536C20.5941 10.8787 20.315 11.2125 20.1573 11.6068L20 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M2 10L3.04577 10.6536C3.40589 10.8787 3.68501 11.2125 3.84273 11.6068L4 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Bus02',
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
