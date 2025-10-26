import { defineComponent, h } from 'vue'

const _hoisted1 = h('ellipse', { 'cx': '11', 'cy': '5', 'rx': '8', 'ry': '3', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3 12C3 13.5299 6.48993 14.8155 11 15', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M6 11C6.60158 11.1808 7.27434 11.3898 8 11.5', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M6 18C6.60158 18.1808 7.27434 18.3898 8 18.5', 'stroke-linecap': 'round' })
const _hoisted5 = h('path', { 'd': 'M11 22C6.58172 22 3 20.6569 3 19V5M19 5V10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M15.5 16.5H14V22H21V16.5H19.5M15.5 16.5V15C15.5 13.8954 16.3954 13 17.5 13C18.6046 13 19.5 13.8954 19.5 15V16.5M15.5 16.5H19.5', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'DatabaseLocked',
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
