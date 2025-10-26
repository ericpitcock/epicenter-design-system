import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19.0483 16.4922C20.2541 15.3405 21 13.7495 21 11.9922C21 10.2348 20.2541 8.64384 19.0483 7.49219M17 9.74219C17.6029 10.318 17.9759 11.1135 17.9759 11.9922C17.9759 12.8709 17.6029 13.6664 17 14.2422', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11.5 2H7.5L8 3H11L11.5 2Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16 7V3.5C16 2.67157 15.3284 2 14.5 2H4.5C3.67157 2 3 2.67157 3 3.5V20.5C3 21.3284 3.67157 22 4.5 22H14.5C15.3284 22 16 21.3284 16 20.5V17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SmartPhone04',
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
