import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2.00018 22H22.0002', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21 22V11C21 9.89543 20.1046 9 19 9H13C11.8954 9 11 9.89543 11 11V22', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3 22V4C3 2.89543 3.89543 2 5 2H13C14.1046 2 15 2.89543 15 4V9', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M3 6H6M3 10H6M3 14H6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M15.0002 13H17.0002M15.0002 16H17.0002', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M16.0002 22L16.0002 19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Building05',
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
