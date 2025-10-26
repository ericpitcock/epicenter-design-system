import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18.5 13.9998V18.9998H20.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8 14L9.5 16.5M9.5 16.5L11 19M9.5 16.5L11 14M9.5 16.5L8 19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16 14H13.5V16.5H16V19H13.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M19.5 22H5.5C4.39543 22 3.5 21.1046 3.5 20L3.5 4C3.5 2.89543 4.39543 2 5.5 2H12.5L19.5 9V11M19 9H14.498C13.3935 9 12.498 8.10457 12.498 7V2.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Xsl02',
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
