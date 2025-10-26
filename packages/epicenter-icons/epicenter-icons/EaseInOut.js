import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21 4C11.0535 4 12.9465 20 3 20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'EaseInOut',
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
