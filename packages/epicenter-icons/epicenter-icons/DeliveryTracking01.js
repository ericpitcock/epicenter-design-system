import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2.5 7.5V19.5C2.5 20.6046 3.39543 21.5 4.5 21.5H14M21.5 11V7.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4.91739 3.47101L2.5 7.5H21.5L19.0826 3.47101C18.7212 2.8686 18.0701 2.5 17.3676 2.5L6.63238 2.5C5.92986 2.5 5.27884 2.8686 4.91739 3.47101Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 7.5V2.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M10 10.5H14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M18 13C16.067 13 14.5 14.5376 14.5 16.4343C14.5 17.5188 14.9375 18.3621 15.8125 19.1153C16.4292 19.6462 17.5514 20.7852 18 21.5C18.4713 20.7994 19.5708 19.6462 20.1875 19.1153C21.0625 18.3621 21.5 17.5188 21.5 16.4343C21.5 14.5376 19.933 13 18 13Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M18 16.5H18.009', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'DeliveryTracking01',
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
