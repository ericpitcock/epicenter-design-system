import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M9.39582 4.5H4.18749C3.0369 4.5 2.10416 5.39543 2.10416 6.5V18.5C2.10416 19.6046 3.0369 20.5 4.18749 20.5H16.6875C17.8381 20.5 18.7708 19.6046 18.7708 18.5V16.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21.8958 9L16.1667 3.5V7H12.5208C9.64435 7 7.3125 9.23858 7.3125 12V14.5C7.3125 14.5 8.875 11 13.1157 11H16.1667V14.5L21.8958 9Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Share01',
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
