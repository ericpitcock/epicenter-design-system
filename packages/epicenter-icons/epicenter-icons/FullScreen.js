import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 8.5V5C3 3.89543 3.89543 3 5 3H8.5M21 8.5V5C21 3.89543 20.1046 3 19 3H15.5M15.5 21H19C20.1046 21 21 20.1046 21 19V15.5M8.5 21H5C3.89543 21 3 20.1046 3 19V15.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FullScreen',
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
