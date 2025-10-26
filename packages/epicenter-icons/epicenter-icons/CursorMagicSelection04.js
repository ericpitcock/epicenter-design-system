import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M9 4V2M5 5L3.5 3.5M4 9H2M5 13L3.5 14.5M14.5 3.5L13 5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7.56253 7.02853L21.7351 12.4795C22.0969 12.6187 22.0852 13.1346 21.7175 13.2572L15.5683 15.3069C15.4449 15.3481 15.3481 15.4449 15.3069 15.5683L13.2572 21.7175C13.1346 22.0852 12.6187 22.0969 12.4795 21.7351L7.02853 7.56253C6.89999 7.22835 7.22835 6.89999 7.56253 7.02853Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CursorMagicSelection04',
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
