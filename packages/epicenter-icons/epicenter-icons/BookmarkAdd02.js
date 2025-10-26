import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21 5.5H14M17.5 2V9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10.5 3H5C3.89543 3 3 3.89543 3 5V22L10.5 18L18 22V12.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BookmarkAdd02',
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
