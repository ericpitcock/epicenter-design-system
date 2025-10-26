import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3.5 7H6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3.5 17H8.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18 17L20.5 17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M15.5 7L20.5 7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M11 4H7C6.44772 4 6 4.44772 6 5V9C6 9.55228 6.44772 10 7 10H11C11.5523 10 12 9.55228 12 9V5C12 4.44772 11.5523 4 11 4Z', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M17 14H13C12.4477 14 12 14.4477 12 15V19C12 19.5523 12.4477 20 13 20H17C17.5523 20 18 19.5523 18 19V15C18 14.4477 17.5523 14 17 14Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FilterHorizontal',
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
            _hoisted4,
            _hoisted5,
            _hoisted6
        ])
    }
})
