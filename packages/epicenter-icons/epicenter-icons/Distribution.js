import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19.5 6H4.5M19.5 6V15C19.5 16.1046 18.6046 17 17.5 17H6.5C5.39543 17 4.5 16.1046 4.5 15V6M19.5 6L18.0528 3.10557C17.714 2.428 17.0215 2 16.2639 2H7.73607C6.97852 2 6.286 2.428 5.94721 3.10557L4.5 6', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10.5 9H13.5', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M3.5 22H12M20.5 22L12 22M12 22V19.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Distribution',
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
