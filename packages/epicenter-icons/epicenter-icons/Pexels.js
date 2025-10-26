import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13.5 8H9V16H13V13H13.5C14.8807 13 16 11.8807 16 10.5C16 9.11929 14.8807 8 13.5 8Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Pexels',
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
