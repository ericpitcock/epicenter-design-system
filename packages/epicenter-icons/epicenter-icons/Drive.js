import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 8.5C12.5523 8.5 13 8.05228 13 7.5C13 6.94772 12.5523 6.5 12 6.5M12 8.5C11.4477 8.5 11 8.05228 11 7.5C11 6.94772 11.4477 6.5 12 6.5M12 8.5V6.5M10 12.5H14M9 13.5V13C9 11.8954 9.89543 11 11 11H13C14.1046 11 15 11.8954 15 13V13.5H9Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16.5 20V20.01', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M13.5 20V20.01', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M18 18H6C4.89543 18 4 18.8954 4 20C4 21.1046 4.89543 22 6 22L18 22C19.1046 22 20 21.1046 20 20C20 18.8954 19.1046 18 18 18Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M20 20V4C20 2.89543 19.1046 2 18 2H6C4.89543 2 4 2.89543 4 4V20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Drive',
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
