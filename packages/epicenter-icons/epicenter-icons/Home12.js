import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 10L11.1076 2.80982C11.3617 2.60915 11.6761 2.5 12 2.5C12.3239 2.5 12.6383 2.60915 12.8924 2.80982L16.5 5.65789V3H19.5V8.02632L22 10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 11.5V19.5C20 20.6046 19.1046 21.5 18 21.5H6C4.89543 21.5 4 20.6046 4 19.5V11.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15.0011 15.5C14.2016 16.1224 13.1513 16.5 12.0011 16.5C10.8509 16.5 9.80062 16.1224 9.0011 15.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Home12',
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
