import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 12C7.97056 12 12 7.97056 12 3C12 7.97056 16.0294 12 21 12C16.0294 12 12 16.0294 12 21C12 16.0294 7.97056 12 3 12Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'GoogleGemini',
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
