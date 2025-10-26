import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V10Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 18H8C7.44772 18 7 18.4477 7 19V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M20 14H12C11.4477 14 11 14.4477 11 15V18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M19.5 10H16C15.4477 10 15 10.4477 15 11V14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'EntranceStairs',
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
