import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 8.5C8.89837 8.5 7.77572 11.1032 7.1393 13.7373C6.33194 17.0789 9.1763 18.5941 12 18.4955C14.8237 18.5941 17.6681 17.0789 16.8607 13.7373C16.2243 11.1032 15.1016 8.5 12 8.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11.9998 13.5H12.0088', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 8.5L12 2.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M4 21H4.00898', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M20 21H20.009', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M7 15L2 17M17 15L22 17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted7 = h('path', { 'd': 'M4 18V16.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted8 = h('path', { 'd': 'M20 18V16.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Plane',
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
            _hoisted6,
            _hoisted7,
            _hoisted8
        ])
    }
})
