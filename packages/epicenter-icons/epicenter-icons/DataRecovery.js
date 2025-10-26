import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 12C3 13.6569 6.58172 15 11 15C11.3387 15 11.6724 14.9921 12 14.9768', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19 5V11.5M3 5V19C3 20.6569 6.58172 22 11 22C11.3387 22 11.6724 21.9921 12 21.9768', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('ellipse', { 'cx': '11', 'cy': '5', 'rx': '8', 'ry': '3' })
const _hoisted4 = h('path', { 'd': 'M7 8V10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M7 15V17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M19.9868 14L20.4861 16.0844L19.6566 15.5661C19.0657 15.1173 18.3313 14.8512 17.5354 14.8512C15.5828 14.8512 14 16.4515 14 18.4256C14 20.3997 15.5828 22 17.5354 22C19.2457 22 20.6724 20.772 21 19.1405', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'DataRecovery',
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
