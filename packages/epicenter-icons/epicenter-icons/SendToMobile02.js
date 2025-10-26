import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 12.0337H12M17 9L20 12L17 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17 18V20.5C17 21.3284 16.3284 22 15.5 22H5.5C4.67157 22 4 21.3284 4 20.5V3.5C4 2.67157 4.67157 2 5.5 2H15.5C16.3284 2 17 2.67157 17 3.5V5.75', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12.5 2H8.5L9 3H12L12.5 2Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SendToMobile02',
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
