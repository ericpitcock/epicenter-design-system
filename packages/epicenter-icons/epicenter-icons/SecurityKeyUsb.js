import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M13.5 7.5V3C13.5 2.44772 13.0523 2 12.5 2H7.5C6.94772 2 6.5 2.44772 6.5 3V7.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15 10.5V7.5H5V17C5 19.7614 7.23858 22 10 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18 16.5H13C12.4477 16.5 12 16.9477 12 17.5V21C12 21.5523 12.4477 22 13 22H18C18.5523 22 19 21.5523 19 21V17.5C19 16.9477 18.5523 16.5 18 16.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M17.5 16.5V15C17.5 13.8954 16.6046 13 15.5 13C14.3954 13 13.5 13.8954 13.5 15V16.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M9.5 4.5H10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SecurityKeyUsb',
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
