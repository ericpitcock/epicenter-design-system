import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '12', 'cy': '12', 'r': '10', 'stroke-linecap': 'square', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14 15L12 17L10 15M10 9L12 7L14 9M12 16.5L12 7.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CircleArrowVertical',
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
