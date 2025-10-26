import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '12', 'cy': '12', 'r': '10', 'stroke-linecap': 'square', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13 13L16.5 16.5M16.5 16.5L13 16.5M16.5 16.5L16.5 13M7.5 7.5L11 11M7.5 7.5L11 7.5M7.5 7.5L7.5 11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CircleArrowExpand02',
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
