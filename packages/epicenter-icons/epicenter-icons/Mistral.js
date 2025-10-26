import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10.5 16.5V19.5H1.5V16.5H4.5V4.5H7.5V7.5H10.5V10.5H13.5V7.5H16.5V4.5H19.5V16.5H22.5V19.5H13.5V16.5M10.5 16.5H13.5M10.5 16.5H7.5V13.5H10.5V16.5ZM13.5 16.5H16.5V13.5H13.5V16.5Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Mistral',
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
