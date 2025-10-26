import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8 15.8889C8.15093 16.4202 8.45526 17 9.24988 17C10.6249 17 10.9687 15.8889 12 12C13.0313 8.11111 13.3751 7 14.7501 7C15.5447 7 15.8491 7.57977 16 8.11111M10.3333 10.6111H14.7501', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2.5 19.5C2.5 20.6046 3.39543 21.5 4.5 21.5H19.5C20.6046 21.5 21.5 20.6046 21.5 19.5V4.50043C21.5 3.39589 20.6046 2.50046 19.5001 2.50043L4.50005 2.50005C3.39546 2.50002 2.5 3.39546 2.5 4.50005V19.5Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FunctionSquare',
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
