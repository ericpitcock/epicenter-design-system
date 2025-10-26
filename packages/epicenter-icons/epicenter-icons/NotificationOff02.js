import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18 18H3.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13.5 20C13.5 20.8284 12.8284 21.5 12 21.5M10.5 20C10.5 20.8284 11.1716 21.5 12 21.5M12 21.5V20', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2 2L22 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M5 18V9.5C5 8.20839 5.34981 6.99849 5.95987 5.95987M7.85707 3.85707C9.01706 3.00399 10.4497 2.5 12 2.5C15.866 2.5 19 5.63401 19 9.5V15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'NotificationOff02',
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
