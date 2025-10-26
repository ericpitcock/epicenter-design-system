import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4 21V8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4.00609 14.9977C4.00057 14.9977 3.99609 14.9932 3.99609 14.9877M3.99609 14.9877V3H19.9999L15.9826 8.99775L20 15L3.99609 14.9877Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Flag03',
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
