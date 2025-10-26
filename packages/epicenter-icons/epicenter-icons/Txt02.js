import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 22H5C3.89543 22 3 21.1046 3 20L3 4C3 2.89543 3.89543 2 5 2H12L19 9V11M18.5 9H13.998C12.8935 9 11.998 8.10457 11.998 7V2.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18 14H19.5M19.5 14H21M19.5 14V19M7 14H8.5M8.5 14H10M8.5 14V19M12.5 14L14 16.5M14 16.5L15.5 19M14 16.5L15.5 14M14 16.5L12.5 19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Txt02',
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
