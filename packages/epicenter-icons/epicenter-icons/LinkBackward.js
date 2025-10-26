import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11 8.5H10.5V4L3 11.5L10.5 19V14.5C17 14.5 21 20 21 20V18.5C21 12.9772 16.5228 8.5 11 8.5Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LinkBackward',
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
