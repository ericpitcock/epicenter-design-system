import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11.883 2C7.045 2.00068 3.0007 6.04639 3 10.75C3 15.27 7.23514 18.82 11.883 18.82V22C17.2791 19.34 21 15.1688 21 10.75C21 5.98 16.7893 2 11.883 2Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17 12C17 13 16 14 15.5 14V12L13 12V8H17V12Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10.5 12C10.5 13 9.5 14 9 14V12L6.5 12V8H10.5V12Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Hangout',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
