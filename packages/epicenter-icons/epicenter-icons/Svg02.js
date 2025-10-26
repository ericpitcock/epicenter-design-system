import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21.0002 15V14H17.5V19H21L21.0002 17H20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10 14H7.5V16.5H10V19H7.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 14L13.5 19H14L15.5 14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M19 22H5C3.89543 22 3 21.1046 3 20L3 4C3 2.89543 3.89543 2 5 2H12L19 9V11M18.5 9H13.998C12.8935 9 11.998 8.10457 11.998 7V2.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Svg02',
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
