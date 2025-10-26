import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10 8L8 10L10 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M14 16V12C14 10.8954 13.1046 10 12 10H8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CircleArrowMoveUpLeft',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
