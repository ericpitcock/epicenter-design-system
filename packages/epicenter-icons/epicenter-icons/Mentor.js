import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11.5 9.5H7M7 9.5H3C2.44772 9.5 2 9.94772 2 10.5V15C2 15.5523 2.44772 16 3 16H6C6.55228 16 7 15.5523 7 15V9.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 21H14C14 18.7909 15.7909 17 18 17C20.2091 17 22 18.7909 22 21Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M20 13C20 14.1046 19.1045 15 18 15C16.8954 15 16 14.1046 16 13C16 11.8954 16.8954 11 18 11C19.1045 11 20 11.8954 20 13Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M6.5 4.99816C6.5 6.10171 5.60457 6.99631 4.5 6.99631C3.39543 6.99631 2.5 6.10171 2.5 4.99816C2.5 3.8946 3.39543 3 4.5 3C5.60457 3 6.5 3.8946 6.5 4.99816Z', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M9.5 6H14.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M9.5 3H17.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Mentor',
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
