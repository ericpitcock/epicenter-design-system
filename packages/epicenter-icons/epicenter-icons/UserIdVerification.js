import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15 9.5C15 7.84315 13.6569 6.5 12 6.5C10.3431 6.5 9 7.84315 9 9.5C9 11.1569 10.3431 12.5 12 12.5C13.6569 12.5 15 11.1569 15 9.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17 17.5C17 14.7386 14.7614 12.5 12 12.5C9.23858 12.5 7 14.7386 7 17.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16 3H19C20.1046 3 21 3.89543 21 5V8M8 3H5C3.89543 3 3 3.89543 3 5V8M8 21H5C3.89543 21 3 20.1046 3 19V16M16 21H19C20.1046 21 21 20.1046 21 19V16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'UserIdVerification',
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
