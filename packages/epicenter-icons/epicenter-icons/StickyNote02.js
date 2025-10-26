import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11.5 5H15.5C16.6046 5 17.5 5.89543 17.5 7V9C17.5 17 21.5 19 21.5 19H7.16667C6.73393 19 6.31137 18.8593 6.00991 18.5488C4.94199 17.449 2.5 14.2507 2.5 8V7C2.5 5.89543 3.39543 5 4.5 5H8.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17.5 19V20C17.5 21.1046 16.6046 22 15.5 22H4.5C3.39543 22 2.5 21.1046 2.5 20V7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M11.5 2.5V7.5C11.5 7.77614 11.2761 8 11 8H9C8.72386 8 8.5 7.77614 8.5 7.5V2.5C8.5 2.22386 8.72386 2 9 2H11C11.2761 2 11.5 2.22386 11.5 2.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'StickyNote02',
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
