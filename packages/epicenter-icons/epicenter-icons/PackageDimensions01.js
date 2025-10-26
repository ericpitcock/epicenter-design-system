import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19.5 7.5H9.5C8.39543 7.5 7.5 8.39543 7.5 9.5V19.5C7.5 20.6046 8.39543 21.5 9.5 21.5H19.5C20.6046 21.5 21.5 20.6046 21.5 19.5V9.5C21.5 8.39543 20.6046 7.5 19.5 7.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16 7.5H13V11C13 11.2761 13.2239 11.5 13.5 11.5H15.5C15.7761 11.5 16 11.2761 16 11V7.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10.5 18.5H13.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M7.5 3.5H21.5M7.5 3.5V2.5M7.5 3.5V4.5M21.5 3.5V2.5M21.5 3.5V4.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M3.5 7.5L3.5 21.5M3.5 7.5L4.5 7.5M3.5 7.5L2.5 7.5M3.5 21.5H4.5M3.5 21.5H2.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PackageDimensions01',
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
