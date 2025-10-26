import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 22V9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9 17C7.2066 15.9626 6 14.2208 6 12C6 10.3744 6.95007 9.08055 8 8C8 8 7.5 7 7.5 6C7.5 3.5 9.5 2 12 2C14.5 2 16.5 3.5 16.5 6C16.5 7 16 8 16 8C17.0499 9.08055 18 10.3744 18 12C18 14.2208 16.7934 15.9626 15 17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 15L14.5 12.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12 13L9.5 10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M10 22H14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Tree04',
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
            _hoisted4,
            _hoisted5
        ])
    }
})
