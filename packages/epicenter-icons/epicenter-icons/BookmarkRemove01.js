import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20.5 2.5L14.5 8.5M14.5 2.5L20.5 8.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3.5 7.5H11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M11 2.5H5.5C4.39543 2.5 3.5 3.39543 3.5 4.5V21.5L11 17.5L18.5 21.5V12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BookmarkRemove01',
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
