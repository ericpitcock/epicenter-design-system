import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z' })
const _hoisted2 = h('path', { 'd': 'M9 10.5C9 9.67157 9.67157 9 10.5 9H13.5C14.3284 9 15 9.67157 15 10.5V13.5C15 14.3284 14.3284 15 13.5 15H10.5C9.67157 15 9 14.3284 9 13.5V10.5Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9 12H2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Uber',
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
