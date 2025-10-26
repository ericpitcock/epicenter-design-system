import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 3.50003L3 3.50005C2.44771 3.50005 2 3.94776 2 4.50005V12.5C2 13.0523 2.44772 13.5 3 13.5H7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17.9477 3.50003H7V13.5L13.9158 20.5L13.9867 20.4282C15.432 18.9653 15.8379 16.7526 15.0078 14.862L14.4098 13.5H20.0224C21.3836 13.5 22.3371 12.1397 21.8874 10.8393L19.8127 4.83933C19.5353 4.03716 18.7874 3.50003 17.9477 3.50003Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ThumbsDown',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
