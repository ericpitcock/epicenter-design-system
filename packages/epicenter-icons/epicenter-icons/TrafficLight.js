import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M13.5 6.5C13.5 7.32843 12.8284 8 12 8C11.1716 8 10.5 7.32843 10.5 6.5C10.5 5.67157 11.1716 5 12 5C12.8284 5 13.5 5.67157 13.5 6.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13.5 12.5C13.5 13.3284 12.8284 14 12 14C11.1716 14 10.5 13.3284 10.5 12.5C10.5 11.6716 11.1716 11 12 11C12.8284 11 13.5 11.6716 13.5 12.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M17 15V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V15C7 16.1046 7.89543 17 9 17H15C16.1046 17 17 16.1046 17 15Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12 17V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M17 4L20.0014 4.00003L20 5.5L17 7.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M17 11L20.0014 11L20 12.5L17 14.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted7 = h('path', { 'd': 'M7.00144 4L4 4.00003V5.5L7.00144 7.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted8 = h('path', { 'd': 'M7.00144 11L4 11V12.5L7.00144 14.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TrafficLight',
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
            _hoisted6,
            _hoisted7,
            _hoisted8
        ])
    }
})
