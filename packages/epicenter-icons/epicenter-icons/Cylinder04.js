import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 19L9.87868 21.1213M9.87868 21.1213C10.4216 21.6642 11.1716 22 12 22C13.6569 22 15 20.6569 15 19C15 17.3431 13.6569 16 12 16C10.3431 16 9 17.3431 9 19C9 19.8284 9.33579 20.5784 9.87868 21.1213Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5 16.0004H19C20.1046 16.0004 21 15.1049 21 14.0004V4.00032C21 2.89577 20.1046 2.00034 19 2.00032L5.00004 2.00004C3.89545 2.00002 3 2.89545 3 4.00004V14.0004C3 15.1049 3.89543 16.0004 5 16.0004Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Cylinder04',
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
