import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10.5 2.5H4.5C3.39543 2.5 2.5 3.39543 2.5 4.5V21.5H12.5V4.5C12.5 3.39543 11.6046 2.5 10.5 2.5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12.5 8.5H19.5C20.6046 8.5 21.5 9.39543 21.5 10.5V21.5H12.5V8.5Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18.5 16.5H15.5M18.5 12.5L15.5 12.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M9 14.5H6M9 10.5H6M9 6.5H6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Corporate',
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
