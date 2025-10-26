import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M13.5 6V4C13.5 3.44772 13.9477 3 14.5 3H19.5C20.0523 3 20.5 3.44772 20.5 4V6H13.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20.5 6V13.3395C20.5 14.4025 20.0769 15.4218 19.3241 16.1723L15.5161 19.9685C14.1398 21.3438 11.9085 21.3438 10.5322 19.9685C9.15593 18.5933 9.15594 16.3635 10.5322 14.9882L13.5 12V6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10.5 6H7.5V4C7.5 3.44772 7.94772 3 8.5 3H10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M7.5 6V12L4.5322 14.9882C3.15594 16.3635 3.15593 18.5933 4.5322 19.9685C5.34165 20.7774 6.4469 21.1105 7.5 20.9679', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M11 14.5L16 19.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M5 14.5L7 16.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted7 = h('path', { 'd': 'M20.5 12C18.8431 12 17.5 13.3431 17.5 15C17.5 15.7684 17.7889 16.4692 18.2639 17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Socks',
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
