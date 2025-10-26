import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18.6753 19.6886L21 22M20 16.5C20 14.0147 17.9853 12 15.5 12C13.0147 12 11 14.0147 11 16.5C11 18.9853 13.0147 21 15.5 21C17.9853 21 20 18.9853 20 16.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7.5 7H14M7.5 11H10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M19 9V4C19 2.89543 18.1046 2 17 2H5C3.89543 2 3 2.89543 3 4V19C3 20.1046 3.89543 21 5 21H8.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Investigation',
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
