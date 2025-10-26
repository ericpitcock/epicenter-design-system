import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M13 8.5H13.5V4L21 11.5L13.5 19V14.5C7 14.5 3 20 3 20V18.5C3 12.9772 7.47715 8.5 13 8.5Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LinkForward',
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
