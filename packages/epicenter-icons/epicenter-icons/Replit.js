import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 3.5V8.5H5C4.44772 8.5 4 8.05228 4 7.5V3.5C4 2.94772 4.44772 2.5 5 2.5H11C11.5523 2.5 12 2.94772 12 3.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 15.5V20.5C12 21.0523 11.5523 21.5 11 21.5H5C4.44772 21.5 4 21.0523 4 20.5V16.5C4 15.9477 4.44772 15.5 5 15.5H12Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M20 9.5V14.5C20 15.0523 19.5523 15.5 19 15.5H12V8.5H19C19.5523 8.5 20 8.94772 20 9.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Replit',
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
