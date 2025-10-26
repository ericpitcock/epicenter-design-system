import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19.5 13V10C19.5 9.44772 19.0523 9 18.5 9H14.5C13.9477 9 13.5 9.44772 13.5 10V13C13.5 13.5523 13.9477 14 14.5 14H18.5C19.0523 14 19.5 13.5523 19.5 13Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19.5 21V18C19.5 17.4477 19.0523 17 18.5 17H14.5C13.9477 17 13.5 17.4477 13.5 18V21C13.5 21.5523 13.9477 22 14.5 22H18.5C19.0523 22 19.5 21.5523 19.5 21Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M13.5 19.5H8.5C7.39543 19.5 6.5 18.6046 6.5 17.5V11.5M6.5 9V11.5M6.5 11.5H13.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M9 2L6.5 4.5M6.5 4.5L4 7M6.5 4.5L9 7M6.5 4.5L4 2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'NodeRemove',
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
