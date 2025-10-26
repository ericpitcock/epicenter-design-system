import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18.5 4H5.5C4.39543 4 3.5 4.89543 3.5 6V20C3.5 21.1046 4.39543 22 5.5 22H18.5C19.6046 22 20.5 21.1046 20.5 20V6C20.5 4.89543 19.6046 4 18.5 4Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15.5032 17.5H8.5C8.5 15.567 10.0677 14 12.0016 14C13.9355 14 15.5032 15.567 15.5032 17.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M13.7516 10.25C13.7516 11.2165 12.9678 12 12.0008 12C11.0339 12 10.25 11.2165 10.25 10.25C10.25 9.2835 11.0339 8.5 12.0008 8.5C12.9678 8.5 13.7516 9.2835 13.7516 10.25Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M8 4V2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M16 4V2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Contact',
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
