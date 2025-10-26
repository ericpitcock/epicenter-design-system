import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6 9H11V14M10.5 9.5L4 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7 17V20.5C7 21.3284 7.67157 22 8.5 22H18.5C19.3284 22 20 21.3284 20 20.5V3.5C20 2.67157 19.3284 2 18.5 2H8.5C7.67157 2 7 2.67157 7 3.5V6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15.5 2H11.5L12 3H15L15.5 2Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ScreenAddToHome02',
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
