import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11 16H8V13M13 8H16V11M8.49997 15.5L15.5 8.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '12', 'cy': '12', 'r': '10', 'stroke-linecap': 'square', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CircleArrowDiagonal01',
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
