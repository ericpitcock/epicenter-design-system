import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17.5 17.5L22 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M14.5 9.5L16 11L14.5 12.5', 'fill': 'currentColor' })
const _hoisted4 = h('path', { 'd': 'M7.5 9.5L6 11L7.5 12.5', 'fill': 'currentColor' })
const _hoisted5 = h('path', { 'd': 'M12 8.5L10 13.5L12 8.5Z', 'fill': 'currentColor' })
const _hoisted6 = h('path', { 'd': 'M14.5 9.5L16 11L14.5 12.5M7.5 9.5L6 11L7.5 12.5M12 8.5L10 13.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'InspectCode',
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
