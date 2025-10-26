import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 5V22M12 22H9.5M12 22H14.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21 13L18.5 8L16 13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M8 13L5.5 8L3 13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M3.5 8H5.0482C6.31166 8 7.5375 7.471 8.5241 6.5C10.5562 4.5 13.4438 4.5 15.4759 6.5C16.4625 7.471 17.6883 8 18.9518 8H20.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M13.5 3.5C13.5 4.32843 12.8284 5 12 5C11.1716 5 10.5 4.32843 10.5 3.5C10.5 2.67157 11.1716 2 12 2C12.8284 2 13.5 2.67157 13.5 3.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M5.5 16.5C7.433 16.5 9 14.933 9 13H2C2 14.933 3.567 16.5 5.5 16.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted7 = h('path', { 'd': 'M18.5 16.5C20.433 16.5 22 14.933 22 13H15C15 14.933 16.567 16.5 18.5 16.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'JusticeScale01',
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
            _hoisted7
        ])
    }
})
