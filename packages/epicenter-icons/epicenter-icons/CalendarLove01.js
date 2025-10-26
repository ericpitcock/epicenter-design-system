import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17 22C17 22 21 20.1471 21 17.1389C21 15.9576 20.1579 15 19 15C18.0526 15 17.4211 15.4118 17 16.2353C16.5789 15.4118 15.9474 15 15 15C13.8421 15 13 15.9576 13 17.1389C13 20.1471 17 22 17 22Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16.5 2V6M7.5 2V6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M21 12.5V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M3 10H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CalendarLove01',
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
