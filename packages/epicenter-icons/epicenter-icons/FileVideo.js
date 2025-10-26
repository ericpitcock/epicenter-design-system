import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 13V9L12 2H5C3.89543 2 3 2.89543 3 4V20C3 21.1046 3.89543 22 5 22H9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 2V7C12 8.10457 12.8954 9 14 9H19', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18 19.5L21 21V17L18 18.5M18 19.5V18.5M18 19.5V21C18 21.5523 17.5523 22 17 22H13C12.4477 22 12 21.5523 12 21V17C12 16.4477 12.4477 16 13 16H17C17.5523 16 18 16.4477 18 17V18.5', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FileVideo',
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
