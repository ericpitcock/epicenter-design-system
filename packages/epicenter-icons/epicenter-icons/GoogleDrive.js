import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M9 3L2 16L5 21M9 3H15L22 16M9 3L12 8.4M5 21H19L22 16M5 21L7.77778 16M22 16H16.2222M7.77778 16H16.2222M7.77778 16L12 8.4M16.2222 16L12 8.4', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'GoogleDrive',
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
