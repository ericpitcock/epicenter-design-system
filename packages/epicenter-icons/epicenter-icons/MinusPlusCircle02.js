import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16 8L8 16M15 17V15M15 15V13M15 15H13M15 15H17M8 9.5H11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '12', 'cy': '12', 'r': '10', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'MinusPlusCircle02',
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
