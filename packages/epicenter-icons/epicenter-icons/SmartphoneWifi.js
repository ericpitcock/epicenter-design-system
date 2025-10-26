import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7.5 6H6C4.89543 6 4 6.89543 4 8V20C4 21.1046 4.89543 22 6 22H13C14.1046 22 15 21.1046 15 20V13.4958', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9.5 19H9.50898', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10 3.8472C11.436 2.67893 13.1511 2 14.9932 2C16.8411 2 18.5612 2.68322 20 3.85827M17.7178 7C16.8977 6.48859 15.9724 6.20085 14.9932 6.20085C14.019 6.20085 13.098 6.4857 12.281 6.99231', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M15 10H15.0064', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SmartphoneWifi',
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
