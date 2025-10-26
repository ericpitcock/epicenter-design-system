import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8 13.5L6 22M16 13.5L18 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18.5 13C16.7677 13.6224 14.4922 14 12 14C9.50781 14 7.2323 13.6224 5.5 13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M19 2C17.1344 2.62236 14.6839 3 12 3C9.3161 3 6.86556 2.62236 5 2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12 14V3M8 13.5L7 3M16 13.5L17 3', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M7 18L17 18', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Chair04',
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
            _hoisted5
        ])
    }
})
