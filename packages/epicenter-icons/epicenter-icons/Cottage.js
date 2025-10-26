import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 22H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4.5 22V9.5M19.5 9.5V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M14 2L2 11', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M10 2L22 11', 'stroke-linecap': 'round' })
const _hoisted5 = h('path', { 'd': 'M9.5 22V16.3333C9.5 15.0447 10.6193 14 12 14C13.3807 14 14.5 15.0447 14.5 16.3333V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Cottage',
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
