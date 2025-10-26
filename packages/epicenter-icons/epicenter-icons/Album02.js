import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18 16V4C18 2.89543 17.1046 2 16 2H4C2.89543 2 2 2.89543 2 4V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18 6H20C21.1046 6 22 6.89543 22 8V20C22 21.1046 21.1046 22 20 22H8C6.89543 22 6 21.1046 6 20V18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2 11.1185C2.61902 11.0398 3.24484 11.001 3.87171 11.0023C6.52365 10.9533 9.11064 11.6763 11.1711 13.0424C13.082 14.3094 14.4247 16.053 15 18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12.9998 7H13.0088', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Album02',
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
