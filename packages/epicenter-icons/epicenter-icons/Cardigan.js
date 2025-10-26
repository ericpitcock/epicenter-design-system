import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6.5 16L5 21H2L3 6L9 3C10.4175 4.59466 13.5825 4.59466 15 3L21 6L22 21H19L17.5 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6 9L7 19L8 21H16L17 19L18 9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M8.5 3.5C8.5 3.5 8.5 8 12 9M12 9V21M12 9C15.5 8 15.5 3.5 15.5 3.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Cardigan',
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
