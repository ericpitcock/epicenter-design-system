import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M13.6667 4.5H6C4.89543 4.5 4 5.39543 4 6.5V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V9.5C20 9.18524 19.8518 8.88885 19.6 8.7L14.2667 4.7C14.0936 4.57018 13.883 4.5 13.6667 4.5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13 8L17 11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 18C13.1046 18 14 17.1605 14 16.125C14 14.875 12 13 12 13C12 13 10 14.875 10 16.125C10 17.1605 10.8954 18 12 18Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M6 4.5V3C6 2.44772 6.44772 2 7 2H8.5C9.05228 2 9.5 2.44772 9.5 3V4.5', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Fuel02',
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
            _hoisted4
        ])
    }
})
