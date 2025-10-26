import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21.9999 12C21.9999 17.5228 17.5227 22 11.9999 22C6.47703 22 1.99988 17.5228 1.99988 12C1.99988 6.47715 6.47703 2 11.9999 2C17.5227 2 21.9999 6.47715 21.9999 12Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14.9999 9L7.99988 16M9.99988 8H15.9999V14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CircleArrowUpRight02',
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
