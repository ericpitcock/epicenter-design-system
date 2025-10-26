import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '12', 'cy': '12', 'r': '10', 'stroke-linecap': 'square', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13 16H16V13M11 8H8V11M15.5 15.5L8.50003 8.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CircleArrowDiagonal02',
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
