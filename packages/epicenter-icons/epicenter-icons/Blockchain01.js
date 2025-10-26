import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 7.5L12 3L4 7.5M20 7.5L12 12M20 7.5V16.5L12 21L4 16.5V7.5M12 12L4 7.5M12 12V20.2354', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Blockchain01',
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
