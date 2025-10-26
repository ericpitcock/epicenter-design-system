import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21 5.5H14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10.5 2.5H5C3.89543 2.5 3 3.39543 3 4.5V21.5L10.5 17.5L18 21.5V10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BookmarkMinus02',
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
