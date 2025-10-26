import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M13.5 21.5H4.5C3.39543 21.5 2.5 20.6046 2.5 19.5V6.5H21.5V10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4.9 3.3L2.5 6.5H21.5L19.1 3.3C18.7223 2.79639 18.1295 2.5 17.5 2.5H6.5C5.87049 2.5 5.27771 2.79639 4.9 3.3Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18 13C16.067 13 14.5 14.5376 14.5 16.4343C14.5 17.5188 14.9375 18.3621 15.8125 19.1153C16.4292 19.6462 17.5514 20.7852 18 21.5C18.4713 20.7994 19.5708 19.6462 20.1875 19.1153C21.0625 18.3621 21.5 17.5188 21.5 16.4343C21.5 14.5376 19.933 13 18 13Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M18 16.5H18.009', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'DeliveryTracking02',
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
