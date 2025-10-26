import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6 8H2L8 18L12.5 11L17 18L19 14.5L15 8H10L8 11L6 8Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19 6H22L20 8H20.5C21.3284 8 22 8.67157 22 9.5C22 10.3284 21.3284 11 20.5 11C19.8469 11 19.2059 10.5826 19 10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'W3Schools',
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
