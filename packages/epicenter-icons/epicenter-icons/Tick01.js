import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5 14C5 14 7 14.5 8.5 17.5C8.5 17.5 14.0588 8.33333 19 6.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Tick01',
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
