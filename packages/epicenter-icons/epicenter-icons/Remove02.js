import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 13.498L20.002 10.5H4V13.498H20.002', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Remove02',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1
        ])
    }
})
