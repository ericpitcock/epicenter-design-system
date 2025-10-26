import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 6.5V3H5L13 12L5 21H19V17.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Summation01',
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
