import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4 19.5V2L8 4V17L15 13L12 12L11 8L19.9981 10.5V15L8 22L4 19.5Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Bing',
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
