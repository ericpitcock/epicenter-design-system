import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10.0002 12H6.00024V21C6.00024 21.5523 6.44796 22 7.00024 22H10.0002V12Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20.0002 15H10.0002V22H20.0002C20.5525 22 21.0002 21.5523 21.0002 21V16C21.0002 15.4477 20.5525 15 20.0002 15Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M21.0002 6L20.0002 7M16.5002 7H20.0002M20.0002 7L17.0002 10H16.0002M20.0002 7V10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M11.0002 12H5.00024L3.00024 7H13.0002L11.0002 12Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M10.0002 7H6.00024L5.00024 4H11.0002L10.0002 7Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M8.00024 4V2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Airport',
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
