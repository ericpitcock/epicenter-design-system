import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22 12C22 17.5227 17.5229 22 12 22C6.47713 22 2 17.5227 2 12C2 6.47713 6.47713 2 12 2C17.5229 2 22 6.47713 22 12Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18 11V12C18 13.6569 16.6569 15 15 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M11 8V12.5C11 13.0523 11.4477 13.5 12 13.5H13C13.5523 13.5 14 13.0523 14 12.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M8.5 8V12.5C8.5 13.0523 8.05228 13.5 7.5 13.5H6.5C5.94772 13.5 5.5 13.0523 5.5 12.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M11 15.4902V15.5002', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M13 15.5V15.51', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Riyal',
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
