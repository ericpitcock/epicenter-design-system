import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16.7171 5.32618L6.71894 6.75471C5.73381 6.89546 5.00203 7.73907 5.00183 8.73421L5.00034 16.2651C5.00015 17.2605 5.73206 18.1046 6.7175 18.2454L16.7172 19.6739C17.922 19.846 19 18.9111 19 17.694V7.30607C19 6.08895 17.922 5.15402 16.7171 5.32618Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 12.5L2 12.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TrapezoidLineHorizontal',
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
