import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15 2L13.5 3.5M9 8L11.5 5.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21.4142 10.5858C22.1953 11.3668 22.1953 12.6332 21.4142 13.4142C20.6332 14.1953 19.3668 14.1953 18.5858 13.4142C17.8047 12.6332 17.8047 11.3668 18.5858 10.5858C19.3668 9.80474 20.6332 9.80474 21.4142 10.5858Z' })
const _hoisted3 = h('path', { 'd': 'M2.00008 18L3.50008 12.5L7.00008 11.0002L10.0001 14.5L12.5001 12.5L15.0001 17L14.0001 19.5L7.50008 22L2.00008 18Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M21.9998 2.00098L13.9998 10.001', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Comet02',
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
