import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20.5 2H4.5C3.39543 2 2.5 2.89543 2.5 4V20C2.5 21.1046 3.39543 22 4.5 22H20.5C21.6046 22 22.5 21.1046 22.5 20V4C22.5 2.89543 21.6046 2 20.5 2Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18.5 19.0001V19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M6.5 19H10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12.5 14C14.7091 14 16.5 12.2091 16.5 10C16.5 7.79086 14.7091 6 12.5 6C10.2909 6 8.5 7.79086 8.5 10C8.5 12.2091 10.2909 14 12.5 14Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M16 10H17.5M12.5 13.5V15M9 10H7.5M12.5 6.5V5', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'GasStove',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 25 24',
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
