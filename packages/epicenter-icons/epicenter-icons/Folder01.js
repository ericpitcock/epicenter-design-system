import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8 6.99446H12.0179M12.0179 6.99446H20C21.1046 6.99446 22 7.88989 22 8.99446V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V4C2 3.44772 2.44772 3 3 3H8.5022C8.81572 3 9.11109 3.14703 9.30008 3.39718L12.0179 6.99446Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Folder01',
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
