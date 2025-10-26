import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15 8L16.0002 8.00007C16.5524 8.00011 17.0001 8.44782 17.0001 9.00007V15C17.0001 15.5523 16.5524 16 16.0001 16H15M9 16H8C7.44772 16 7 15.5523 7 15V9C7 8.44772 7.44772 8 8 8H9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '12', 'cy': '12', 'r': '10' })

export default defineComponent({
    name: 'Num2ndBracketCircle',
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
