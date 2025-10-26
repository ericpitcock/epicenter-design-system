import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4.5 7.5H19.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 17.5L19.5 21.5V4.5C19.5 3.39543 18.6046 2.5 17.5 2.5H6.5C5.39543 2.5 4.5 3.39543 4.5 4.5V21.5L12 17.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Bookmark01',
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
