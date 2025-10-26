import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8 6.99446H12.0179M12.0179 6.99446H20C21.1046 6.99446 22 7.88989 22 8.99446V13M12.0179 6.99446L9.30008 3.39718C9.11109 3.14703 8.81572 3 8.5022 3H3C2.44772 3 2 3.44772 2 4V19C2 20.1046 2.89543 21 4 21H10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17 21C19.7614 21 22 18 22 18C22 18 19.7614 15 17 15C14.2386 15 12 18 12 18C12 18 14.2386 21 17 21Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M17.0156 18.0029H17.0246', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FolderView',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
