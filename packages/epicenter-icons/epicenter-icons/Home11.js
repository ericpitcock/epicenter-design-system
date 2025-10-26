import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22 10.5L12.8825 2.82207C12.6355 2.61407 12.3229 2.5 12 2.5C11.6771 2.5 11.3645 2.61407 11.1175 2.82207L2 10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20.5 5V19.5C20.5 20.6046 19.6046 21.5 18.5 21.5H5.5C4.39543 21.5 3.5 20.6046 3.5 19.5V9.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15 21.5V14.5C15 13.9477 14.5523 13.5 14 13.5H10C9.44772 13.5 9 13.9477 9 14.5L9 21.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Home11',
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
