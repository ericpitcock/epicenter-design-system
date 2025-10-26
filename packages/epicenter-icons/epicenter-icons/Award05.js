import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 8.6852C19 12.8768 15.866 16 12 16C8.13401 16 5 12.8167 5 8.6852C5 4.99306 8.13401 2 12 2C15.866 2 19 4.99306 19 8.6852Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10 9L11.5 10.5L14 7.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M8 14.5L7 22L12 20L17 22L16 14.5', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Award05',
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
