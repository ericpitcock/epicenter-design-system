import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18 22C18.5523 22 19 21.5523 19 21V15C19 11.134 15.866 8 12 8C8.13401 8 5 11.134 5 15V21C5 21.5523 5.44772 22 6 22H18Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 2H4L5.1094 3.6641C5.6658 4.4987 6.60249 5 7.60555 5H16.3944C17.3975 5 18.3342 4.4987 18.8906 3.6641L20 2Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M8 15C8 12.7909 9.79086 11 12 11C14.2091 11 16 12.7909 16 15M11.5 15.5L12.5 14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M14 8V5M10 8V5', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'WeightScale01',
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
