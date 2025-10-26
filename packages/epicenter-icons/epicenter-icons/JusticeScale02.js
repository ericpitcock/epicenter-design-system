import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21 17L18 10L15 17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9 17L6 10L3 17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3.5 10H5.0482C6.31166 10 7.5375 9.471 8.5241 8.5C10.5562 6.5 13.4438 6.5 15.4759 8.5C16.4625 9.471 17.6883 10 18.9518 10H20.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M6 21C8.20914 21 10 19.2091 10 17H2C2 19.2091 3.79086 21 6 21Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M18 21C20.2091 21 22 19.2091 22 17H14C14 19.2091 15.7909 21 18 21Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'JusticeScale02',
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
