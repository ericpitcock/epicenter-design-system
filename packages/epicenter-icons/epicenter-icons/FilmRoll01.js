import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4.50048 4.5H13.5005V22H4.50048V4.5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7.00048 4.5V3C7.00048 2.44772 7.44819 2 8.00048 2H10.0005C10.5528 2 11.0005 2.44772 11.0005 3V4.5', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3.00048 4.5H15.0005', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M3.00048 22H15.0005', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M13.5005 7.5L19.9995 7.50002C20.5518 7.50002 20.9995 7.94774 20.9995 8.50002V12.465C20.9995 12.7992 20.8326 13.1114 20.5545 13.2969L18.0005 15.0009L17.9998 17.0003C17.9997 17.5525 17.552 18 16.9998 18L13.5005 18', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FilmRoll01',
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
