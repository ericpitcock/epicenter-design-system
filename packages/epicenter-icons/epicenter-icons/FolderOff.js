import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 3L8.0044 3C8.63144 3 9.22218 3.29407 9.60016 3.79437L12.0179 6.99446H20C21.1046 6.99446 22 7.88989 22 8.99446V18M21 21H4C2.89543 21 2 20.1046 2 19V4.75C2 4.0519 2.40876 3.44927 3 3.16841', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2 2L22 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FolderOff',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
