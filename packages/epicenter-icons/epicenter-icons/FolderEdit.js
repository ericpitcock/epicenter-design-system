import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8 6.99446H12.0179M12.0179 6.99446H20C21.1046 6.99446 22 7.88989 22 8.99446V11M12.0179 6.99446L9.30008 3.39718C9.11109 3.14703 8.81572 3 8.5022 3H3C2.44772 3 2 3.44772 2 4V19C2 20.1046 2.89543 21 4 21H11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14 19V21H16L22 15L20 13L14 19Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FolderEdit',
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
