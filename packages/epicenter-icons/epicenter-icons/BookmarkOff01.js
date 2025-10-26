import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 2.00003L22 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11.5 7.50003H19.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M4.5 4.50003L4.5 21.5L12 17.5L19.5 21.5V19.5M7 2.50003H17.5C18.6046 2.50003 19.5 3.39546 19.5 4.50003V15.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BookmarkOff01',
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
