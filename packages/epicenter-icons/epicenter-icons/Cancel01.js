import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18 6L6.00081 17.9992M17.9992 18L6 6.00085', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Cancel01',
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
