import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '17', 'cy': '18', 'r': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '7', 'cy': '18', 'r': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M5 17.9724L3.01113 17.9907C2.45527 17.9958 2.00194 17.5466 2.00194 16.9908V15M9 18H15M2 4H13C13.5523 4 14 4.44772 14 5V10C14 10.5523 14.4477 11 15 11H22V17C22 17.5523 21.5523 18 21 18H19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M2 8H8M2 11H6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M14 6L17.8676 6.00002C18.5701 6.00002 19.2212 6.36862 19.5826 6.97102L22 11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TruckDelivery',
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
