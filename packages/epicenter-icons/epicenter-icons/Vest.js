import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10.5001 13.5H10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9 2H15', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M6 3.5L9 2L13.594 12.5662C13.8491 13.1529 13.8081 13.8262 13.4837 14.3777L9 22L4 20V11C7 8.5 6.5 4.5 6 3.5Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12 9L15.0005 2L18.0005 3.5C17.5005 4.5 17.0005 8.5 20.0005 11V20L15.0005 22L12 17', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Vest',
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
