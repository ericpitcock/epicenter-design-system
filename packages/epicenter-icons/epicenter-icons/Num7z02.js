import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 22H6C4.89543 22 4 21.1046 4 20L4 4C4 2.89543 4.89543 2 6 2H13L20 9V11M19.5 9H14.998C13.8935 9 12.998 8.10457 12.998 7V2.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11 14H14L12 19M17 14H20L17 19H20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Num7z02',
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
