import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20.8535 4.43934L19.5606 3.14645C19.3654 2.95118 19.0488 2.95118 18.8535 3.14645L14.4999 7.5L13.9999 10L16.4999 9.5L20.8535 5.14645C21.0488 4.95118 21.0488 4.6346 20.8535 4.43934Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9.5 3H4C3.44772 3 3 3.44772 3 4V9.5C3 10.0523 3.44772 10.5 4 10.5H9.5C10.0523 10.5 10.5 10.0523 10.5 9.5V4C10.5 3.44772 10.0523 3 9.5 3Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9.5 13.5H4C3.44772 13.5 3 13.9477 3 14.5V20C3 20.5523 3.44772 21 4 21H9.5C10.0523 21 10.5 20.5523 10.5 20V14.5C10.5 13.9477 10.0523 13.5 9.5 13.5Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M20 13.5H14.5C13.9477 13.5 13.5 13.9477 13.5 14.5V20C13.5 20.5523 13.9477 21 14.5 21H20C20.5523 21 21 20.5523 21 20V14.5C21 13.9477 20.5523 13.5 20 13.5Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'DashboardSquareEdit',
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
