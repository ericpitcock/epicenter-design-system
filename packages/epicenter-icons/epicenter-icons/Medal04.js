import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8.90984 21L12 19.3631L15.0902 21L14.4 17.713L17 15.4377L13.4833 15.0431L12 12L10.5167 15.0431L7 15.4377L9.6 17.713L8.90984 21Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 3L12 7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M20.5 3H3.5V8L12 12L20.5 8V3Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Medal04',
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
