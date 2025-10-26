import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '12', 'cy': '12', 'r': '6' })
const _hoisted2 = h('path', { 'd': 'M8 7.5L8.70141 3.64223C8.87432 2.69125 9.70258 2 10.6692 2H13.3308C14.2974 2 15.1257 2.69125 15.2986 3.64223L16 7.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M8 16.5L8.70141 20.3578C8.87432 21.3088 9.70258 22 10.6692 22H13.3308C14.2974 22 15.1257 21.3088 15.2986 20.3578L16 16.5', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'SmartWatch01',
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
