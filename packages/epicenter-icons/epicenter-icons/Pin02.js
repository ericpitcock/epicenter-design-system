import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 16V21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8 5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V5.38197C16 5.76074 15.786 6.107 15.4472 6.27639L14 7L15 12H16C17.1046 12 18 12.8954 18 14V16H6V14C6 12.8954 6.89543 12 8 12H9L10 7L8.55279 6.27639C8.214 6.107 8 5.76074 8 5.38197V5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Pin02',
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
