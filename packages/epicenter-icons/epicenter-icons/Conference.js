import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 7V17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2 7V17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M15.5032 16.5H8.5C8.5 14.567 10.0677 13 12.0016 13C13.9355 13 15.5032 14.567 15.5032 16.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M13.7516 9.25C13.7516 10.2165 12.9678 11 12.0008 11C11.0339 11 10.25 10.2165 10.25 9.25C10.25 8.2835 11.0339 7.5 12.0008 7.5C12.9678 7.5 13.7516 8.2835 13.7516 9.25Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Conference',
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
