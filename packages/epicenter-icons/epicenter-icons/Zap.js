import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18 3L14 10H19L8 21L10 13H5L9.5 3H18Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Zap',
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
