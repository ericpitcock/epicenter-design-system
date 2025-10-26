import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18 19V19C19.6569 19 21 17.6569 21 16V5C21 3.34315 19.6569 2 18 2H6C4.34315 2 3 3.34315 3 5V16C3 17.6569 4.34315 19 6 19V19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8 10H16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M8 6H12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M9 22V15C9 14.4477 9.44772 14 10 14H14C14.5523 14 15 14.4477 15 15V22L12 20L9 22Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Repository',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4
        ])
    }
})
