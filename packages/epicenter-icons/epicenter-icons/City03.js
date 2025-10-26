import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17 12.0003V4C17 2.89543 16.1046 2 15 2L9.99999 2.00002C8.89543 2.00003 8 2.89546 8 4.00002V22.0001', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3.5 16C4.32843 16 5 15.1046 5 14C5 12.8954 4.32843 12 3.5 12C2.67157 12 2 12.8954 2 14C2 15.1046 2.67157 16 3.5 16Z' })
const _hoisted3 = h('path', { 'd': 'M3.49609 16V22' })
const _hoisted4 = h('path', { 'd': 'M2 22H22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M11.5 6H13.5M11.5 9H13.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M17 22V19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted7 = h('path', { 'd': 'M13 22V15.0087L17 12L21 15.0087V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'City03',
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
            _hoisted7
        ])
    }
})
