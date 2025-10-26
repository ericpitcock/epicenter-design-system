import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20.9947 3L21 3.00529M18.4971 5.49736L18.5024 5.50264M16 7.99471L16.0053 8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9 10.0294C10.3726 8.65685 12.598 8.65685 13.9706 10.0294C15.3431 11.402 15.3431 13.6274 13.9706 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2 12.3699C2 17.6885 6.31155 22 11.6301 22C13.6901 22 15.5991 21.3532 17.165 20.2515C17.6367 19.9196 17.6553 19.2477 17.2474 18.8399L5.16009 6.75257C4.75226 6.34474 4.08036 6.36332 3.74849 6.83504C2.64684 8.4009 2 10.3099 2 12.3699Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'GpsSignal02',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
